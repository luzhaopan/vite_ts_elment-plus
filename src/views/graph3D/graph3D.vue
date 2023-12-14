<template>
  <div>
    <div id="3d-graph" class="three-graph"></div>
    <el-drawer
      v-model="drawer"
      title="顶点类型详情"
      :before-close="handleClose"
    >
      <span>顶点信息</span>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import ForceGraph3D from '3d-force-graph'
  import * as THREE from 'three'
  import SpriteText from 'three-spritetext'
  import {
    CSS2DRenderer,
    CSS2DObject
  } from 'three/addons/renderers/CSS2DRenderer.js'
  import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
  import { testData } from './data/data.js'
  import imgName from './imgs/cat.jpg'

  const drawer = ref(false)

  let Graph = null
  const highlightNodes = []
  const highlightLinks = []
  let hoverNode = null
  // const img = require('./imgs/cat.jpg')
  const gData = {
    data: {},
    map: {}
  }

  const handleClose = (done: () => void) => {
    drawer.value = false
  }

  function threeRender() {
    // const distance = 1400
    // DOM初始化及数据挂载
    const elm = document.getElementById('3d-graph')
    //   const width = elm.offsetWidth;
    // const height = elm.offsetHeight;
    Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elm)
      .height(window.innerHeight - 150)
      .width(window.innerWidth - 240)
      .showNavInfo(false) //禁用页脚
      .backgroundColor('#000011') //画布背景色
      // 每个值单位的节点球体体积 (cubic px) 的比率
      // .nodeRelSize(7)
      // 通过groud/Id来分组不同的颜色
      .nodeAutoColorBy('id')
      .nodeOpacity(1)
      // 在节点处显示文本
      .nodeLabel((node) => lableTips(node))
      .nodeResolution(20)
      .nodeColor((node) =>
        highlightNodes.includes(node.id)
          ? node === hoverNode
            ? 'yellow'
            : 'blue'
          : node['~style']['color']
      )
      // 拖动节点后，该节点位置不变
      // .onNodeDragEnd((node: any) => {
      //   node.fx = node.x
      //   node.fy = node.y
      //   node.fz = node.z
      // })
      // .nodeThreeObject((node) => SpriteMesh(node))
      // .nodeThreeObject((node) => sphereMesh(node))
      .nodeThreeObject((node) => {
        const nodeEl = document.createElement('div')
        nodeEl.textContent = node.id
        nodeEl.style.color = '#fff'
        nodeEl.className = 'node-label'
        return new CSS2DObject(nodeEl)
      })
      .nodeThreeObjectExtend(true)
      .onNodeClick((node: any) => {
        // Aim at node from outside it
        focusNode(node)
      })
      .onNodeRightClick(() => {
        drawer.value = true
      })
      .onNodeHover((node) => {
        highlightNode(node)
      })
      // 设置线条的箭头长度
      .linkDirectionalArrowLength(1.5)
      // 用于设置线条箭头的相对位置
      .linkDirectionalArrowRelPos(1)
      // 用于设置线条的曲率 0为直线
      .linkCurvature(0.1)
      .linkWidth((link) => {
        return highlightLinks.includes(link.id) ? 1 : 0
      })
      // 链接对象访问器函数、属性或用于显示在链接线上的粒子（小球体）数量的数字常量
      // .linkDirectionalParticles(1)
      .linkDirectionalParticles((link) =>
        highlightLinks.includes(link.id) ? 1 : 0
      )
      // 设置箭头粒子的速度为
      .linkDirectionalParticleSpeed(0.005)
      // 设置线条透明度
      .linkOpacity(0.5)
      // 根据连接属性自动为连接线条着色，（这里官方文档写的是d => gData.nodes[d.source].group ，需要自己根据数据微调）
      .linkAutoColorBy((d) => d.id)
      .onLinkHover((link: any) => {
        highlightNodes.length = 0
        highlightLinks.length = 0

        if (link) {
          highlightLinks.push(link.id)
          highlightNodes.push(link.source)
          highlightNodes.push(link.target)
        }

        // updateHighlight()
      })
      .linkThreeObjectExtend(true)
      .linkThreeObject((link) => {
        // extend link with text sprite
        // console.log(link)
        const sprite = new SpriteText(`${link.id}`)
        sprite.color = 'lightgrey'
        sprite.textHeight = 1.5
        return sprite
      })
      .linkPositionUpdate((sprite, { start, end }, link) => {
        let middlePos = getQuadraticXY(
          0.5,
          start.x,
          start.y,
          start.z,
          link.__curve.v1.x,
          link.__curve.v1.y,
          link.__curve.v1.z,
          end.x,
          end.y,
          end.z
        )

        // Position sprite
        Object.assign(sprite.position, middlePos)
      })
      .graphData(gData.data)

    glowHandle()

    cameraCenter()
    // 适应屏幕大小变化
    window.addEventListener('resize', (el) => Graph.width(elm.offsetWidth))
  }
  // 发光效果处理
  function glowHandle() {
    const bloomPass = new UnrealBloomPass()
    bloomPass.strength = 0.5 // 强度
    bloomPass.radius = 2 // 半径
    bloomPass.threshold = 0.1 // 阈值
    Graph.postProcessingComposer().addPass(bloomPass)
  }
  // 节点对象处理成图片展示
  function SpriteMesh(node) {
    const imgTexture = new THREE.TextureLoader().load(imgName)
    imgTexture.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.SpriteMaterial({ map: imgTexture })
    const sprite = new THREE.Sprite(material)
    sprite.scale.set(12, 12)
    return sprite
  }
  // 节点hover显示内容
  function lableTips(node) {
    const { properties } = node
    const arr = Object.keys(properties)
    let ele = `<div style="color: #000; font-size: 12px; background: #fff; padding: 2px; z-index: 999999999">
      <ul>`
    arr.forEach((item) => {
      ele += `<li> ${item}: ${properties[item]} </li>`
    })
    ele + `</ul></div>`
    return ele
  }
  // 计算连接线上文字的显示位置
  function getQuadraticXY(t, sx, sy, sz, cp1x, cp1y, cp1z, ex, ey, ez) {
    return {
      x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * cp1x + t * t * ex,
      y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * cp1y + t * t * ey,
      z: (1 - t) * (1 - t) * sz + 2 * (1 - t) * t * cp1z + t * t * ez
    }
  }
  // 节点对象处理成其他模型
  function sphereMesh(node) {
    // 球体
    const geometry = new THREE.SphereGeometry(Math.random() * 10)
    // 圆环
    // const geometry = new THREE.TorusGeometry(7, 0.3, 16, 50)
    // const material = new THREE.MeshBasicMaterial({ color: node.color })
    // const loader = new THREE.TextureLoader().load('./resources/diffuse.jpg')
    const material = new THREE.MeshLambertMaterial({
      color: Math.round(Math.random() * Math.pow(2, 24)),
      transparent: true,
      opacity: 0.75
      // map: loader
    })
    // 根据几何体和材质创建物体
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
  }
  // hover 高亮处理
  function highlightNode(node) {
    // no state change
    if ((!node && !highlightNodes.length) || (node && hoverNode === node))
      return

    highlightNodes.length = 0
    highlightLinks.length = 0
    if (node && node.neighbors) {
      highlightNodes.push(node.id)
      node.neighbors.forEach((neighbor) => highlightNodes.push(neighbor.id))
      node.links.forEach((link) => highlightLinks.push(link.id))
    }

    hoverNode = node || null

    updateHighlight()
  }
  function updateHighlight() {
    // trigger update of highlighted objects in scene
    Graph.nodeColor(Graph.nodeColor())
      .linkWidth(Graph.linkWidth())
      .linkDirectionalParticles(Graph.linkDirectionalParticles())
      .linkThreeObject(Graph.linkThreeObject())
  }
  // 聚焦 3d 节点
  function focusNode(node: any) {
    const distance = 40
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z)
    const newPos =
      node.x || node.y || node.z
        ? {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio
          }
        : { x: 0, y: 0, z: distance } // special case if node is in (0,0,0)

    Graph.cameraPosition(
      newPos, // new position
      node, // lookAt ({ x, y, z })
      3000 // ms transition duration
    )
  }
  // 3d 镜头拉近
  function cameraCenter(x: any = -300, y: any = 30, z: any = 300) {
    Graph.cameraPosition({
      x: x,
      y: y,
      z: z
    })
  }
  // 随机生成一个规模为N的图
  function createRandomGraph(N = 300) {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    }
  }

  onMounted(() => {
    gData.data = { ...testData }

    gData.data.nodes.forEach((item) => {
      gData.map[item.id] = item
    })

    // const gData = createRandomGraph()
    gData.data.links.forEach((link) => {
      let a: any = {}
      let b: any = {}

      if (gData.map && gData.map[link.source]) {
        a = gData.map[link.source]
        b = gData.map[link.target]

        !a.neighbors && (a.neighbors = [])
        !b.neighbors && (b.neighbors = [])
        a.neighbors.push(b)
        b.neighbors.push(a)

        !a.links && (a.links = [])
        !b.links && (b.links = [])

        a.links.push(link)
        b.links.push(link)
      }
    })

    // console.log(3, gData.map)

    threeRender()
  })
</script>

<style lang="scss" scoped>
  .three-graph {
    width: 100%;
    height: 350px;
  }
</style>
