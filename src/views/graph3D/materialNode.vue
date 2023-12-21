<template>
  <div>
    <div id="3d-graph-m" class="three-graph"></div>
  </div>
</template>

<script lang="ts" setup>
  import ForceGraph3D from '3d-force-graph'
  import * as THREE from 'three'
  import SpriteText from 'three-spritetext'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

  let Graph = null

  // id source target字段必需
  let data = {
    nodes: [...Array(100).keys()].map((i) => ({
      id: i, // 节点id
      overflow: Math.floor(Math.random() * 180), // 满溢值，角度
      num: Math.floor(Math.random() * 1000), // 节点数量
      status: ['red', 'green', 'blue'][Math.floor(Math.random() * 3)] // 节点状态，颜色值
    })),
    links: [...Array(100).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1))
      }))
  }

  data.links.forEach((link) => {
    const a = data.nodes[link.source]
    const b = data.nodes[link.target]
    !a.neighbors && (a.neighbors = [])
    !b.neighbors && (b.neighbors = [])
    a.neighbors.push(b)
    b.neighbors.push(a)

    !a.links && (a.links = [])
    !b.links && (b.links = [])
    a.links.push(link)
    b.links.push(link)
  })

  const highlightNodes = new Set()
  const highlightLinks = new Set()
  let hoverNode = null

  function threeRender() {
    // DOM初始化及数据挂载
    const elm = document.getElementById('3d-graph-m')
    Graph = ForceGraph3D()(elm)
      .width(window.innerWidth - 240)
      .height(window.innerHeight - 220)
      .graphData(data)
      .backgroundColor('#0a1247')
      .showNavInfo(false)
      .linkColor(() => 'rgba(30,144,255, 0.8)')
      // .linkWidth(1)
      .linkWidth((link) => (highlightLinks.has(link) ? 4 : 1))
      .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 4 : 0))
      .linkDirectionalParticleWidth(4)
      .linkDirectionalParticleResolution(8)
      .nodeLabel((node) => `<p style="color:#0f0;">${node.num}<p>`)
      .nodeThreeObject((node) => {
        const vertexShader = [
          'varying vec3 vVertexWorldPosition;',
          'varying vec3 vVertexNormal;',
          'varying vec4 vFragColor;',
          'void main(){',
          '    vVertexNormal = normalize(normalMatrix * normal);', //将法线转换到视图坐标系中
          '    vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;', //将顶点转换到世界坐标系中
          '    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
          '}'
        ].join('\n')

        // vVertexNormal视图坐标系中点的法向量
        // viewCameraToVertex视图坐标系中点到摄像机的距离向量
        // dot点乘得到它们的夹角的cos值
        // 从中心向外面角度越来越小（从钝角到锐角）从cos函数也可以知道这个值由负变正，不透明度最终从低到高
        const fragmentShader = [
          'uniform vec3 glowColor;',
          'uniform float coefficient;',
          'uniform float power;',
          'varying vec3 vVertexNormal;',
          'varying vec3 vVertexWorldPosition;',
          'varying vec4 vFragColor;',
          'void main(){',
          '    vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;', //世界坐标系中从相机位置到顶点位置的距离
          '    vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;', //视图坐标系中从相机位置到顶点位置的距离
          '    viewCameraToVertex = normalize(viewCameraToVertex);', //规一化
          '    float intensity = pow(coefficient + dot(vVertexNormal, viewCameraToVertex), power);',
          '    gl_FragColor = vec4(glowColor, intensity);',
          '}'
        ].join('\n')

        // 透明度递减
        const haloMesh = new THREE.Mesh(
          new THREE.SphereGeometry(10, 50, 50),
          new THREE.ShaderMaterial({
            uniforms: {
              coefficient: {
                type: 'f',
                value: 1.0
              },
              power: {
                type: 'f',
                value: 2.0
              },
              glowColor: {
                type: 'c',
                value:
                  node.status === 'red'
                    ? new THREE.Color('#f00')
                    : node.status === 'green'
                    ? new THREE.Color('#0f0')
                    : new THREE.Color('#01d8d2')
              }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            blending: THREE.NormalBlending,
            transparent: true
          })
        )
        const bottomSphereMesh1 = new THREE.Mesh(
          new THREE.SphereGeometry(
            9.8,
            50,
            50,
            0,
            Math.PI * 2,
            0,
            (Math.PI / 180) * node.overflow
          ), // 满溢情况只需更改最后一个参数
          material1(node, '#A60B1A', '#7CFC00', '#1E83B4')
        )
        bottomSphereMesh1.rotateX((-Math.PI / 180) * 170) // 下半球体倾斜角度

        const bottomSphereMesh2 = new THREE.Mesh(
          new THREE.SphereGeometry(
            9.5,
            50,
            50,
            0,
            Math.PI * 2,
            0,
            (Math.PI / 180) * node.overflow
          ),
          material2(node)
        )
        bottomSphereMesh2.rotateX((-Math.PI / 180) * 170)

        // 显示文字
        const sprite = new SpriteText(node.num)
        sprite.color = node.status === 'red' ? '#f00' : '#fff'
        sprite.textHeight = 7
        bottomSphereMesh1.add(sprite)

        const group = new THREE.Group()
        // group.add(bottomSphereMesh2, bottomSphereMesh1)
        group.add(bottomSphereMesh2, bottomSphereMesh1, haloMesh)
        // Graph.scene().add(group)

        return group
      })
      .onNodeClick((node, event) => {
        // dialog.style.display = 'none'

        // 点击节点聚焦到当前节点
        const distance = 180
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z)
        Graph.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio
          },
          node,
          3000 // 过渡时间
        )

        // let coords = Graph.graph2ScreenCoords(node.x, node.y, node.z)  // 3d坐标转为2d坐标
        // console.log(coords);

        // setTimeout(() => {
        //     dialog.style.display = 'block'
        //     dialog.style.position = 'absolute'
        //     if (window.screen.width == 1920) {
        //         dialog.style.top = window.innerHeight / 2 - 180 + 'px'
        //         dialog.style.left = window.innerWidth / 2 - 330 + 'px'
        //     }
        //     if (window.screen.width >= 1440 && window.screen.width <= 1600) {
        //         dialog.style.top = window.innerHeight / 2 - 150 + 'px'
        //         dialog.style.left = window.innerWidth / 2 - 320 + 'px'
        //     }
        //     if (window.screen.width <= 1280) {
        //         dialog.style.top = window.innerHeight / 2 - 155 + 'px'
        //         dialog.style.left = window.innerWidth / 2 - 315 + 'px'
        //     }
        //     $('.triangle').css({
        //         'position': 'absolute',
        //         'left': '300px'
        //     })
        // }, 3000)
      })
      .onNodeHover((node) => {
        if ((!node && !highlightNodes.size) || (node && hoverNode === node))
          return
        highlightLinks.clear()
        if (node) {
          highlightNodes.add(node)
          node.neighbors.forEach((neighbor) => highlightNodes.add(neighbor))
          node.links.forEach((link) => highlightLinks.add(link))
        }
        hoverNode = node || null
        updateHighlight()
      })
      .onLinkHover((link) => {
        highlightNodes.clear()
        highlightLinks.clear()
        if (link) {
          highlightLinks.add(link)
          highlightNodes.add(link.source)
          highlightNodes.add(link.target)
        }
        updateHighlight()
      })
      .onNodeRightClick((node, event) => {
        // dialog.style.display = 'none'
      })
      .onNodeDrag((node, translate) => {
        // dialog.style.display = 'none'
      })
      .onBackgroundClick((event) => {
        // dialog.style.display = 'none'
      })
      .dagMode('radialin') // 布局径向向内
      .dagLevelDistance(15) // 节点距离

    // Graph.d3Force('charge').strength(-10) // 节点之间的距离，数越小距离越大
    Graph.cameraPosition({
      x: 0,
      y: 0,
      z: 400
    }) // 相机位置，更改z轴位置即可调整镜头远近距离

    // 轨道控制器，在相机进行轨道运动时隐藏弹出框
    const controls = new OrbitControls(
      Graph.camera(),
      Graph.renderer().domElement
    )
    controls.addEventListener('change', (event) => {
      // dialog.style.display = 'none';
      console.log(3232)
    })
  }

  // 材质对象  MeshBasicMaterial   MeshLambertMaterial  MeshPhongMaterial
  function material1(node, red, green, blue) {
    return new THREE.MeshPhongMaterial({
      color:
        node.status === 'red' ? red : node.status === 'green' ? green : blue,
      depthWrite: false,
      depthTest: false,
      side: THREE.FrontSide // DoubleSide  BackSide  FrontSide
      // transparent: true,
      // opacity: 0.8
    })
  }

  function material2(node) {
    let canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    let ctx = canvas.getContext('2d')
    let gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    )
    gradient.addColorStop(0, 'rgba(0,0,0,.1)') //内圈颜色
    let colors = {
      red: 'rgba(255,0,0,.5)',
      green: 'rgba(0,255,0,.5)',
      blue: 'rgba(0,255,255,.5)'
    }
    gradient.addColorStop(1, colors[node.status]) //外圈颜色
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height) //将一个画布使用圆形渐变对象进行填充
    let shadowTexture = new THREE.CanvasTexture(canvas)

    return new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide
    })
  }

  // 更新高亮的节点和连线
  function updateHighlight() {
    Graph.nodeColor(Graph.nodeColor())
      .linkWidth(Graph.linkWidth())
      .linkDirectionalParticles(Graph.linkDirectionalParticles())
  }

  onMounted(() => {
    threeRender()
  })
</script>

<style lang="scss" scoped></style>
