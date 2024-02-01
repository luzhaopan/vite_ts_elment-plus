<template>
  <div>
    <el-form>
      <el-input
        v-model="search"
        @clear="clearSearch"
        placeholder="请输入id搜索"
        clearable
      />
      <el-button type="primary" @click="searched">搜索</el-button>
    </el-form>
    <!-- 3d-graph关系图 -->
    <div id="3d-graph" class="three-graph"></div>
    <!-- 添加遮罩层，菜单显示时，不允许操作关系图 -->
    <div class="mask" v-if="showMenu" @click="graphClick"></div>
    <!-- menu -->
    <div class="menu" :style="menuStyle">
      <MenuView
        @handle-change="menuClick"
        @secondmenu-change="secondMenuClick"
        v-if="showMenu"
      />
    </div>
    <div class="echarts-box" :style="dynamicStyle" v-show="dialogEchartsWrap">
      <div id="myChart" :style="{ width: '200px', height: '140px' }"></div>
    </div>
    <div v-show="dialogDetailsWrap" :style="detailsStyle">
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
  import { ref, reactive, nextTick, onMounted, computed } from 'vue'
  import { ElDrawer, ElInput, ElForm, ElButton } from 'element-plus'
  import ForceGraph3D from '3d-force-graph'
  import {
    CSS2DRenderer,
    CSS2DObject
  } from 'three/addons/renderers/CSS2DRenderer.js'
  import * as echarts from 'echarts'
  // import * as THREE from 'three'
  import MenuView from './components/MenuView.vue'
  import NodeDetail from './components/NodeDetail.vue'

  import imgName from '@/assets/menu/location.png'

  const showMenu = ref(false)
  const drawer = ref(false)
  // 圆环菜单位置信息
  const menuTop = ref(0)
  const menuLeft = ref(0)
  const menuStyle = computed(() => {
    return {
      top: `${menuTop.value}px`,
      left: `${menuLeft.value}px`
    }
  })

  const gData = {
    data: {} as any,
    map: {} as any
  }

  // graph渲染初始化
  let Graph: any = null
  function threeRender() {
    // DOM初始化及数据挂载
    const elm: any = document.getElementById('3d-graph')
    Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elm)
      .height(window.innerHeight - 180)
      .width(window.innerWidth - 240)
      .showNavInfo(false) //禁用页脚
      .backgroundColor('#000011') //画布背景色
      // 通过groud/Id来分组不同的颜色
      .nodeAutoColorBy('id')
      .nodeOpacity(1)
      .nodeLabel((node) => node.id)
      .nodeResolution(20)
      .onNodeClick((node: any) => {
        console.log('node', node)
        showMenu.value = false
        // Aim at node from outside it
        focusNode(node)
        hideDialogs()
      })
      .onNodeRightClick((node, _) => {
        const ele: any = document.getElementById(`node${node.id}`)
        const computedStyles = window.getComputedStyle(ele)
        // 获取节点lable的translateX、translateY 等属性的值
        const transformValue = computedStyles.transform
        const matrexArr = transformValue.split(', ') // Array(6) [ "matrix(1", "0", "0", "1", "10", "20)" ]
        const translateXNumX = parseInt(matrexArr[4])
        const translateXNumY = parseInt(matrexArr[5])
        menuTop.value = translateXNumY - 18
        menuLeft.value = translateXNumX - 74
        showMenu.value = true
        hideDialogs()
        // drawer.value = true
      })
      // 根据连接属性自动为连接线条着色，（这里官方文档写的是d => gData.nodes[d.source].group ，需要自己根据数据微调）
      .linkAutoColorBy((d) => d.id)
      // 以图片作为节点
      .nodeThreeObject(({ img, id }) => {
        const nodeDiv = document.createElement('div')
        nodeDiv.textContent = id
        nodeDiv.style.color = 'transparent'
        nodeDiv.id = `node${id}`
        // 节点是遍历data挨个画出的,在检索数组arr有值且该节点数据包含img时才有图片占位
        if (arr.length && img) {
          // const imgTexture = new THREE.TextureLoader().load(require(`${img}`)) //创建纹理贴图
          // vite创建框架不能直接使用require，vite官网静态资源处理方式为 new URL(url, import.meta.url)
          // const imgTexture = new THREE.TextureLoader().load(new URL(`${img}`, import.meta.url)) //创建纹理贴图
          // imgTexture.colorSpace = THREE.SRGBColorSpace
          // const material = new THREE.SpriteMaterial({ map: imgTexture })
          // const sprite = new THREE.Sprite(material)
          // sprite.scale.set(12, 12)
          // sprite.position.set(0, 14, 0) // 改变图片位置
          // return sprite
          // 为了方便获取元素位置，换成dom的形式引入图片
          const nodeImg = document.createElement('img')
          // const imgSrc: any = new URL(`${img}`, import.meta.url)
          nodeImg.src = imgName
          nodeImg.style.position = 'absolute'
          nodeImg.style.height = '30px'
          nodeImg.style.width = '30px'
          nodeImg.style.top = '-50%'
          nodeImg.style.left = '50%'
          nodeImg.style.transform = 'translate(-50%, -50%)'
          nodeDiv.appendChild(nodeImg)
        }
        return new CSS2DObject(nodeDiv)
      })
      .nodeThreeObjectExtend(true)
      .graphData(gData.data)

    cameraCenter()
    // 适应屏幕大小变化
    window.addEventListener('resize', () => Graph.width(elm.offsetWidth))
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

  // 点击菜单以外的地方关闭菜单
  function graphClick() {
    showMenu.value = false
    hideDialogs()
  }
  const handleClose = () => {
    drawer.value = false
  }
  // 弹框显示内容 --雷达图
  const state = reactive({
    option: {
      radar: {
        radius: 45,
        center: ['52%', '60%'],
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
  //环形菜单-二级菜单
  function secondMenuClick(val) {
    if (val.value) hideDialogs()
  }
  // 菜单点击事件
  const dialogEchartsWrap = ref(false)
  const dialogDetailsWrap = ref(false)
  const dynamicStyle = ref()
  const detailsStyle = ref()
  function menuClick(v, event) {
    let left1 = event.clientX > 1000 ? event.clientX - 650 : event.clientX - 50
    let left = event.clientX > 1000 ? event.clientX - 530 : event.clientX
    let top1 = event.clientY > 500 ? event.clientY - 300 : event.clientY - 50
    let top = event.clientY > 500 ? event.clientY - 270 : event.clientY - 50
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

  // 搜索定位节点事件
  const search = ref('')
  let arr = []
  //确认按钮点击事件
  const searched = () => {
    //判断search的值不为空
    if (search.value !== '') {
      arr = gData.data.nodes.filter((item) => {
        return (item.id + '').indexOf(search.value) !== -1
      })
      const idArr = arr.map((item: any) => item.id + '')
      if (idArr) {
        gData.data.nodes.forEach((e) => {
          if (idArr.indexOf(e.id + '') !== -1) {
            e.img = '../../../assets/menu/location.png'
          } else {
            e.img = null
          }
        })
        threeRender()
      }
    }
  }
  const clearSearch = () => {
    gData.data = createRandomGraph()
    threeRender()
  }

  onMounted(() => {
    gData.data = createRandomGraph()
    threeRender()
  })
</script>

<style lang="scss" scoped>
  .three-graph {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .menu {
    position: absolute;
    border-radius: 50%;
  }

  .echarts-box {
    width: 230px;
    height: 157px;
    padding: 10px;
    background-image: url('@/assets/menu/echartsbg.jpg');
    background-size: cover;
  }

  .el-input {
    width: 200px;
    padding-right: 10px;
  }

  .el-form {
    padding-bottom: 20px;
  }
</style>
