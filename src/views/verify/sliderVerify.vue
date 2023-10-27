<template>
  <div class="box">
    <div id="slider" class="slider" :style="{ left: left + 'px' }"></div>
    <p class="text">{{ text }}</p>
    <div class="chute" :style="{ width: left + 'px' }"></div>
  </div>
</template>

<script lang="ts" setup>
  const text = ref('请向右滑动滑块')
  const left = ref(0)
  const flag = ref(false)

  onMounted(() => {
    const box: any = document.querySelector('.box')
    const slider: any = document.querySelector('.slider')
    slider.onmousedown = function (e) {
      let downx = e.clientX
      slider.onmousemove = function (e) {
        const movex = e.clientX - downx

        if (movex > 0) {
          left.value = movex
          if (movex >= box.offsetWidth - slider.offsetWidth) {
            text.value = '验证成功'
            flag.value = true
            slider.onmousemove = null
            slider.onmousedown = null
          }
        }
      }
    }

    slider.onmouseup = function () {
      slider.onmousemove = null
      if (flag.value) return
      left.value = 0
    }
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
