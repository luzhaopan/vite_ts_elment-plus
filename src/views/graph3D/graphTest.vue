<template>
  <div>
    <div id="3d-graph" class="three-graph" @click="graphClick"></div>
    <div class="menu" :style="menuStyle">
      <MenuView @handle-change="menuClick" v-if="showMenu" />
    </div>

    <div class="echarts-box" :style="menuStyle1" v-show="dialogEchartsWrap">
      <div id="myChart" :style="{ width: '200px', height: '140px' }"></div>
    </div>

    <div v-show="dialogDetailsWrap" :style="menuStyle3">
      <NodeDetail />
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
  import { ref, computed, reactive, onMounted } from 'vue'
  import ForceGraph3D from '3d-force-graph'
  import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js'
  import * as echarts from 'echarts'

  import MenuView from './components/MenuView.vue'
  import NodeDetail from './components/NodeDetail.vue'

  const menuStyle = computed(() => {
    return {
      top: `${menuTop.value}px`,
      left: `${menuLeft.value}px`
    }
  })

  const menuStyle1 = computed(() => {
    return {
      position: 'absolute',
      top: `${menuTop.value - 120}px`,
      left: `${menuLeft.value - 230}px`
    }
  })

  const menuStyle3 = computed(() => {
    return {
      position: 'absolute',
      top: `${menuTop.value}px`,
      left: `${menuLeft.value + 210}px`
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
        menuTop.value = event.offsetY - 80
        menuLeft.value = event.offsetX - 80
        showMenu.value = true
        // drawer.value = true
      })
      // 根据连接属性自动为连接线条着色，（这里官方文档写的是d => gData.nodes[d.source].group ，需要自己根据数据微调）
      .linkAutoColorBy((d) => d.id)
      .graphData(gData.data)

    cameraCenter()
    // 适应屏幕大小变化
    window.addEventListener('resize', (el) => Graph.width(elm.offsetWidth))
  }

  // 聚焦 3d 节点
  function focusNode(node: any, distance = 50) {
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

  function graphClick() {
    showMenu.value = false
    dialogEchartsWrap.value = false
    dialogDetailsWrap.value = false
  }

  // 弹框显示内容 --雷达图
  const state = reactive({
    option: {
      radar: {
        radius: 40,
        center: ['50%', '56%'],
        splitLine: false,
        axisName: {
          color: '#fff'
        },
        splitArea: {
          areaStyle: {
            color: '#82B7CE', // 每个圆的背景颜色
            shadowColor: '#32dadd', // 每个圈的阴影颜色
            shadowBlur: 10
          }
        },
        axisLine: {
          show: false
        },
        indicator: [
          { name: 'name1', max: 5 },
          { name: 'name2', max: 5 },
          { name: 'name3', max: 5 },
          { name: 'name4', max: 5 },
          { name: 'name5', max: 5 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4, 3, 2, 3, 1],
              name: '',
              areaStyle: {
                color: '#9EDDF0'
              },
              lineStyle: {
                color: '#9EDDF0'
              },
              symbolSize: 'none'
            }
          ]
        }
      ]
    }
  })
  const initeCharts = () => {
    let myChart = echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption(state.option)
  }

  const dialogEchartsWrap = ref(false)
  const dialogDetailsWrap = ref(false)
  const dynamicStyle = ref()
  const detailsStyle = ref()
  function menuClick(v, event) {
    let left1 = event.clientX > 1000 ? event.clientX - 400 : event.clientX + 100
    let left = event.clientX > 1000 ? event.clientX - 280 : event.clientX + 100
    let top1 = event.clientY > 400 ? event.clientY - 300 : event.clientY + 100
    let top = event.clientY > 400 ? event.clientY - 200 : event.clientY + 100
    if (v === 2) {
      dialogEchartsWrap.value = true
      dialogDetailsWrap.value = false
      nextTick(() => {
        initeCharts()
      })
      dynamicStyle.value = {
        position: 'absolute',
        zIndex: 999999999,
        left: `${left}px`,
        top: `${top}px`
      }
    } else if (v === 1) {
      dialogDetailsWrap.value = true
      dialogEchartsWrap.value = false
      detailsStyle.value = {
        position: 'absolute',
        zIndex: 999999999,
        left: `${left1}px`,
        top: `${top1}px`
      }
    } else {
      hideDialogs()
    }
  }
  function hideDialogs() {
    dialogDetailsWrap.value = false
    dialogEchartsWrap.value = false
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

  .echarts-box {
    position: absolutel;
    padding: 10px;
    width: 230px;
    height: 160px;
    background-image: url('@/assets/menu/radar.png');
    background-size: cover;
  }
</style>
