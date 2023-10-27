<template>
  <div class="box">
    <div
      id="slider"
      class="slider"
      :style="{ left: left + 'px' }"
      @mousedown="onMouseDown"
    ></div>
    <p class="text">{{ text }}</p>
    <div class="chute" :style="{ width: left + 'px' }"></div>
  </div>
</template>

<script lang="ts" setup>
  const text = ref('请向右滑动滑块')
  const left = ref(0)
  const flag = ref(false)
  const isDragging = ref(false) // 是否正在拖动滑块
  const dragStartX = ref(0) // 开始拖动时鼠标的x坐标 // 鼠标相对于滑块左边缘的偏移量

  const onMouseDown = (e) => {
    isDragging.value = true
    dragStartX.value = e.clientX
  }

  const onMouseMove = (e) => {
    if (!isDragging.value) return
    const distance = e.clientX - dragStartX.value
    if (distance > 0) {
      left.value = distance
      const box: any = document.querySelector('.box')
      const slider: any = document.querySelector('.slider')
      if (distance >= box.offsetWidth - slider.offsetWidth) {
        text.value = '验证成功'
        flag.value = true
        window.removeEventListener('mousemove', onMouseMove)
        // window.removeEventListener('mouseup', onMouseUp)
      }
    }
  }

  const onMouseUp = (e) => {
    if (flag.value) return
    isDragging.value = false
    left.value = 0
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  })
</script>

<style scoped lang="scss">
  .box {
    position: relative;
    height: 30px;
    width: 300px;
    background: #eee;
    border: 1px solid #ddd;
  }
  .slider {
    width: 30px;
    height: 30px;
    background: #ddd;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 10px;
    cursor: pointer;
  }
  .text {
    position: absolute;
    z-index: 2;
    width: 100%;
    margin: 0;
    text-align: center;
  }
  .chute {
    position: absolute;
    width: 0;
    height: 100%;
    background: #36d97a;
    z-index: 1;
  }
</style>
