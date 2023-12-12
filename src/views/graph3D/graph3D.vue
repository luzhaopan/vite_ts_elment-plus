<template>
  <div>
    <div id="3d-graph" class="three-graph"></div>
  </div>
</template>

<script lang="ts" setup>
  import ForceGraph3D from '3d-force-graph'
  // import SpriteText from "three-spritetext";
  import * as THREE from 'three'
  import {
    CSS2DRenderer,
    CSS2DObject
  } from 'three/addons/renderers/CSS2DRenderer.js'
  import { top5, records } from './data/data.js'

  let Graph = null

  // var sphereMesh = function (id) {
  //   var mesh = new THREE.Mesh(
  //     [new THREE.SphereGeometry(10, 32, 32)][id % 1],
  //     new THREE.MeshLambertMaterial({
  //       color: '#277ec9',
  //       transparent: true,
  //       opacity: 1.0
  //     })
  //   )

  //   // Make it glow.
  //   var glowMesh = new THREE.GeometricGlowMesh(mesh)
  //   mesh.add(glowMesh.object3d)

  //   var insideUniforms = glowMesh.insideMesh.material.uniforms
  //   insideUniforms.glowColor.value.set('yellow')

  //   var outsideUniforms = glowMesh.outsideMesh.material.uniforms
  //   outsideUniforms.glowColor.value.set('yellow')

  //   return mesh
  // }

  function threeRender() {
    // const gData = createRandomGraph()
    const distance = 1400
    // DOM初始化及数据挂载
    const elm = document.getElementById('3d-graph')
    //   const width = elm.offsetWidth;
    // const height = elm.offsetHeight;
    Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elm)
      .graphData(records)
      .height(window.innerHeight - 150)
      .width(window.innerWidth - 240)
      .showNavInfo(false) //禁用页脚
      .backgroundColor('#000011') //画布背景色
      // 每个值单位的节点球体体积 (cubic px) 的比率
      // .nodeRelSize(7)
      // 通过groud/Id来分组不同的颜色
      .nodeAutoColorBy('group')
      .nodeOpacity(1)
      // 在节点处显示文本
      .nodeLabel('id')
      .nodeResolution(20)
      .nodeThreeObject(({ id }) => sphereMesh(id))
      // .nodeThreeObject((node) => {
      //   const nodeEl = document.createElement('div')
      //   nodeEl.textContent = node.id
      //   nodeEl.style.color = node.color
      //   // nodeEl.style.fontSize = '12px'
      //   nodeEl.className = 'node-label'
      //   // var nodeEl = document.createElement('div')
      //   // nodeEl.innerHTML = `<p class="node-label" href="${node.id}" target="_blank">
      //   //   <span>${node.id}</span>
      //   // </p>`
      //   // nodeEl.style.color = node.color
      //   // nodeEl.classList.add('tag')
      //   return new CSS2DObject(nodeEl)
      // })
      .nodeThreeObjectExtend(true)
      .onNodeClick((node: any) => {
        // Aim at node from outside it
        focusNode(node)
      })
      // 设置线条的箭头长度
      .linkDirectionalArrowLength(3.5)
      // 用于设置线条箭头的相对位置
      .linkDirectionalArrowRelPos(1)
      // 用于设置线条的曲率
      .linkCurvature(0.25)
      // 链接对象访问器函数、属性或用于显示在链接线上的粒子（小球体）数量的数字常量
      .linkDirectionalParticles(1)
      // 设置箭头粒子的速度为
      .linkDirectionalParticleSpeed(0.005)
      // 设置线条透明度
      .linkOpacity(0.5)
    // 根据连接属性自动为连接线条着色，（这里官方文档写的是d => gData.nodes[d.source].group ，需要自己根据数据微调）
    // .linkAutoColorBy( d=> gData.value.nodes[d.value].group )
    cameraCenter()
    window.addEventListener('resize', (el) => Graph.width(elm.offsetWidth))
  }
  function sphereMesh(node) {
    const mesh = new THREE.Mesh(
      [
        // 球体
        new THREE.SphereGeometry(Math.random() * 10),
        // 圆环
        new THREE.TorusGeometry(Math.random() * 10, Math.random() * 2)
      ][1],
      new THREE.MeshLambertMaterial({
        color: Math.round(Math.random() * Math.pow(2, 24)),
        transparent: true,
        opacity: 0.75
      })
    )
    return mesh
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
    threeRender()
  })
</script>

<style lang="scss" scoped>
  .three-graph {
    width: 100%;
    height: 350px;
  }
</style>
