<template>
  <div>
    <div id="3d-graph" class="three-graph">434342</div>
    <div class="menu" :style="menuStyle" v-show="showMenu">
      <MenuView @handle-change="menuClick" />
    </div>
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
  import { ref, computed } from 'vue'
  import ForceGraph3D from '3d-force-graph'
  // import * as THREE from 'three'
  // import SpriteText from 'three-spritetext'
  import {
    CSS2DRenderer,
    CSS2DObject
  } from 'three/addons/renderers/CSS2DRenderer.js'
  // import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
  // import { testData } from './datasets/blocks.js'

  import MenuView from './MenuView.vue'

  // const menuStyle = { top: `10px`, left: `10px` }

  const menuStyle = computed(() => {
    return {
      top: `${menuTop.value}px`,
      left: `${menuLeft.value}px`
    }
  })

  const menuTop = ref(0)
  const menuLeft = ref(0)
  const showMenu = ref(false)
  const drawer = ref(false)

  let Graph = null

  const gData = {
    data: {},
    map: {}
  }

  const handleClose = (done: () => void) => {
    drawer.value = false
  }

  function threeRender() {
    // DOM初始化及数据挂载
    const elm = document.getElementById('3d-graph')
    Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elm)
      .height(window.innerHeight - 150)
      .width(window.innerWidth - 240)
      .showNavInfo(false) //禁用页脚
      .backgroundColor('#000011') //画布背景色
      // 通过groud/Id来分组不同的颜色
      .nodeAutoColorBy('id')
      .nodeOpacity(1)
      .nodeLabel((node) => node.id)
      .nodeResolution(20)
      .onNodeClick((node: any) => {
        showMenu.value = false
        // Aim at node from outside it
        focusNode(node)
      })
      .onNodeRightClick((node, event) => {
        // console.log('node', node)
        // console.log('event', event)
        menuTop.value = event.offsetY - 80
        menuLeft.value = event.offsetX - 80
        // drawer.value = true

        showMenu.value = true
      })
      // 根据连接属性自动为连接线条着色，（这里官方文档写的是d => gData.nodes[d.source].group ，需要自己根据数据微调）
      .linkAutoColorBy((d) => d.id)
      .graphData(gData.data)

    cameraCenter()
    // 适应屏幕大小变化
    window.addEventListener('resize', (el) => Graph.width(elm.offsetWidth))
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
  function createRandomGraph(N = 30) {
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

  function menuClick(val) {
    console.log('menuClick', val)
  }

  onMounted(() => {
    gData.data = createRandomGraph()
    threeRender()
  })
</script>

<style lang="scss" scoped>
  .three-graph {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .menu {
    position: absolute;
    border-radius: 50%;
  }

  ul.circle {
    list-style-type: none; /* 去除列表样式 */
    margin: 0; /* 清空外边距 */
    padding: 0; /* 清空内边距 */
    display: flex; /* 使用flex布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    transform: rotate(45deg); /* 旋转角度（根据需求调整）*/
  }

  li {
    text-align: center; /* 文本居中 */
    font-size: 16px; /* 字体大小 */
    color: #333; /* 字体颜色 */
    background-color: #f9f9f9; /* 背景颜色 */
    border: 1px solid #ccc; /* 边框样式 */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    cursor: pointer; /* 光标变成手型 */
    transition: all 0.3s ease; /* 添加动画效果 */
  }

  li:hover {
    background-color: #eaeaea; /* 鼠标悬停时改变背景颜色 */
  }
</style>
