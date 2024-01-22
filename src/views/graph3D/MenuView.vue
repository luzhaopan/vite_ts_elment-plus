<template>
  <div class="container">
    <div class="layer" @click="handleClick(1)">
      <img class="img1" src="@/assets/menu/u23.svg" alt="" />
      <div class="text">节点详情</div>
    </div>
    <div class="center">
      <div class="layer" @click="handleClick(2)">
        <img class="img2" src="@/assets/menu/u24.svg" alt="" />
        <div class="text">节点评价</div>
      </div>
      <div class="layer" @click="handleClick(3)">
        <img class="img3" src="@/assets/menu/u27.svg" alt="" />
        <div class="text">专题分析</div>
      </div>
    </div>
    <div class="center">
      <div class="layer" @click="handleClick(4)">
        <img class="img4" src="@/assets/menu/u25.svg" alt="" />
        <div class="text">流转关系</div>
      </div>
      <div class="layer" @click="showItemF">
        <img class="img5" src="@/assets/menu/u28.svg" alt="" />
      </div>
    </div>
    <div class="layer" @click="handleClick(6)">
      <img class="img6" src="@/assets/menu/u26.svg" alt="" />
      <div class="text">查看字段</div>
    </div>
    <div class="node" ref="switchRef">
      <div ref="ulRef" class="expand-menu" :class="showItem ? 'open' : 'close'">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
      </div>
    </div>
  </div>
  <!-- <div class="more" v-if="false" @click="handleClick(0)"></div> -->
</template>

<script setup lang="ts">
  import { ref, onMounted, reactive } from 'vue'
  const emit = defineEmits(['handle-change'])

  const isClick = ref(false)
  // 二级菜单显示隐藏
  const showItem = ref(false)
  // 每个item宽高
  const itemWH = ref([])
  // 第二象限xy轴高度
  const oYX = ref({})
  // 圆半径
  const or = ref(0)
  // 默认圆的半径附加值，在自动生成的圆的半径基础上加上这个值，放大缩小圆可用
  const circleOr = ref(10)
  // item 原点位置，默认o(中心) Option：top right bottom left o
  const itemO = ref('o')
  // 菜单展开方向 Option：top right bottom left
  const direc = ref('bottom')
  // 生成圆整体的偏移（px）
  const offset = reactive({ x: 0, y: 0 })
  // 每个点的位置数组
  const itemPoint = ref([])
  // 每个item动画执行的时间,单位秒
  const duration = ref(0.5)
  // 每个item之间的延迟时间 单位秒（默认0.01，每个item依次累加）
  const delay = ref(0.01)
  // 是否为整圆 Option：1（整圆） 0.5（半圆） 0.25（1/4圆） 0.125（1/8圆）
  const completeCircle = ref(0.5)

  const ulRef = ref()
  const allAtems = computed(() => {
    return ulRef.value.children
  })

  // 获取半圆夹角
  const Angle = computed(() => {
    let i = deg.value === 360 ? 0 : 1
    return deg.value / (allAtems.value.length + i)
  })

  // 圆的形状计算
  const deg = computed(() => {
    return 360 * completeCircle.value
  })

  const switchRef = ref()
  const switchDom = computed(() => {
    return switchRef.value
  })

  // 获取中心点的宽高
  const switchWH = computed(() => {
    let w = switchDom.value.getBoundingClientRect().width
    let h = switchDom.value.getBoundingClientRect().height
    return {
      width: w,
      height: h
    }
  })

  const showItemF = () => {
    if (isClick.value) {
      isClick.value = false
      return
    }
    showItem.value = !showItem.value
  }

  const handleClick = (v) => {
    emit('handle-change', v)
  }

  // 获取每个子元素宽高
  function itemsWH(i) {
    return {
      width: allAtems.value[i].getBoundingClientRect().width,
      height: allAtems.value[i].getBoundingClientRect().height
    }
  }

  // 获得xy轴高度
  function getY() {
    let width = 0
    let height = 0
    for (let i = 0, length = allAtems.value.length; i < length; i++) {
      const o = itemsWH(i)
      width += o.width
      height += o.height
      itemWH.value.push({
        w: o.width,
        h: o.height
      })
    }
    // 如果是正圆,则一二、三四象限item的数量为总数量的一半，所以半径为半圆的一半
    let i = deg.value == 360 ? 2 : 1
    let oYX1 = {
      x: width / i,
      y: height / i
    }
    oYX.value = oYX1
  }

  // 获得圆半径,根据item 数量的一半获取，x值必须根据半径获得
  function getOr() {
    let { x, y } = oYX.value
    x = x / 2
    y = y / 2
    or.value = x + Number(circleOr.value)
  }

  // 所有item排布方式
  function setdirec() {
    switch (direc.value) {
      case 'left':
        return {
          xd: -1,
          yd: 1
        }
      case 'right':
        return {
          xd: 1,
          yd: -1
        }
      case 'bottom':
        return {
          xd: 1,
          yd: 1
        }
      case 'top':
        return {
          xd: -1,
          yd: -1
        }
      default:
        console.error('direc参数有误')
        break
    }
  }

  // item的原点位置
  // type:x/y
  function calculateItemO(itemXorY, wh, type) {
    const o = itemXorY > 0 ? 1 : -1
    itemXorY = Math.abs(itemXorY)
    if (type == 'x') {
      switch (itemO.value) {
        case 'top':
          return o * itemXorY
        case 'right':
          if (o < 0) {
            return o * (itemXorY + wh)
          } else {
            return o * (itemXorY - wh)
          }
        case 'bottom':
          if (o < 0) {
            // 二三想象
            return o * (itemXorY + wh)
          } else {
            // 一四象限
            return o * (itemXorY - wh)
          }
        case 'left':
          return o * itemXorY
        case 'o':
          if (o < 0) {
            // 二三象限
            return o * (itemXorY + wh / 2)
          } else {
            // 一四象限
            return o * (itemXorY - wh / 2)
          }
        default:
          return o
      }
    } else {
      // Y轴
      switch (itemO.value) {
        case 'top':
          return o * itemXorY
        case 'right':
          return o * itemXorY
        case 'bottom':
          // 三四象限
          if (o > 0) {
            return o * (itemXorY - wh)
          } else {
            // 一二象限
            return o * (itemXorY + wh)
          }
        case 'left':
          if (o < 0) {
            return o * (itemXorY + wh)
          } else {
            return o * (itemXorY - wh)
          }
        case 'o':
          if (o > 0) {
            return o * (itemXorY - wh / 2)
          } else {
            // 一二象限
            return o * (itemXorY + wh / 2)
          }
        default:
          return o
      }
    }
  }

  // 设置每一个元素的x,y值
  function setItemXY() {
    let xd = setdirec().xd
    let yd = setdirec().yd
    let switchB = switchWH.value

    let offsetX = offset.x || 0
    let offsetY = offset.y || 0
    // 将圆心定位在开关中心
    let ox = switchB.width / 2
    let oy = switchB.height / 2

    itemPoint.value = [...allAtems.value].map((v, i) => {
      let x =
        xd * or.value * Math.sin((Angle.value * (i + 1) * 2 * Math.PI) / 360)
      let y =
        yd * or.value * Math.cos((Angle.value * (i + 1) * 2 * Math.PI) / 360)
      if (direc.value == 'top' || direc.value == 'bottom') {
        // 上下分布
        ;[x, y] = [y, x]
      }
      x = x + ox + offsetX
      y = y + oy + offsetY
      const h = itemsWH(i).height
      const w = itemsWH(i).width
      return {
        y: calculateItemO(y, h, 'y'),
        x: calculateItemO(x, w, 'x')
      }
    })
    console.log(2, itemPoint.value)
  }

  // 计算每一个元素的位置
  function animateItem() {
    const arr = [...allAtems.value]
    arr.forEach((v, i) => {
      v.style.transform = `translate(${itemPoint.value[i].x}px,${itemPoint.value[i].y}px)`
      v.style.transition = `all ${duration.value}s ${i * delay.value}s`
      // console.log(itemPoint.value[i].x, itemPoint.value[i].y)
      // console.log(duration.value, i * delay.value)
    })
  }

  // 重置
  function reset() {
    ;[...allAtems.value].forEach((v) => {
      v.style.transform = `translate(0,0)`
    })
  }

  function init() {
    getY()
    getOr()
    setItemXY()
  }

  onMounted(() => {
    init()
  })

  watch(showItem, () => {
    showItem.value ? animateItem() : reset()
  })
</script>

<style scoped>
  .container {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url('@/assets/menu/u16.svg');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
  }
  .node {
    background-image: url('@/assets/menu/u17.svg');
    background-size: 100% 100%;
    width: 33px;
    height: 33px;
    position: absolute;
    top: 85px;
    left: 85px;
  }
  .center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 15px;
  }
  .img1 {
    width: 16px;
    height: 19px;
  }
  .img2 {
    width: 22px;
    height: 20px;
  }
  .img3 {
    width: 16px;
    height: 16px;
  }
  .img4 {
    width: 19px;
    height: 17px;
  }
  .img5 {
    width: 16px;
    height: 4px;
    padding-right: 18px;
  }
  .img6 {
    width: 24px;
    height: 14px;
  }
  .layer {
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
  }
  .text {
    color: #fff;
    font-size: 12px;
  }
  .more {
    background-image: url('@/assets/menu/u16.png');
    background-size: 100% 100%;
    width: 410px;
    height: 270px;
    position: absolute;
    top: -10px;
    left: -95px;
  }

  /* .expand-menu {
    z-index: -1;
     background-image: url('@/assets/menu/u16.png');
    background-size: 100% 100%; 
  }*/
  .expand-menu > .item {
    position: absolute;
    transition: all 0.5s;
    color: #fff;
    /* background-image: url('@/assets/vue.svg');
    background-size: 100% 100%; */
    background-color: aqua;
    padding: 10px 20px;
    /* width: 50px;
    height: 50px; */
  }
  .close.expand-menu > .item {
    opacity: 0;
    overflow: hidden;
  }
</style>
