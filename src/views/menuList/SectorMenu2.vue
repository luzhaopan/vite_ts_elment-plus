<template>
  <div class="content-box">
    <!-- 拼接辅助线 -->
    <div class="line1"></div>
    <div class="line2"></div>
    <!-- 展示圆环 -->
    <div
      class="img-box"
      :class="'img-box' + (i + 1)"
      v-for="(url, i) in imgArr"
      :key="i"
    >
      <div style="position: absolute; top: 0px; left: 0px; color: #fff">
        2222
      </div>
      <img
        @mouseenter="handleMouseEnter(i)"
        @mouseleave="handleMouseLeave(i)"
        :src="url"
        alt=""
      />
    </div>

    <div class="center"></div>
  </div>
</template>

<script setup lang="ts">
  import img from '@/assets/menu/u17.svg'

  const imgArr = [img, img, img, img, img, img, img, img]

  function handleMouseEnter(i) {
    // this.$set(this.imgArr, i - 1, img2)
  }
  function handleMouseLeave(i) {
    // this.$set(this.imgArr, i - 1, img)
  }
</script>
<style lang="scss" scoped>
  .content-box {
    position: relative;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background: url('@/assets/menu/u16.svg');
    background-size: 125px 125px;
    display: flex;
    justify-content: center;
    align-items: center;

    .center {
      width: 30px;
      height: 30px;
      background: url('@/assets/menu/u17.svg');
      background-size: 100% 100%;
    }

    .line1 {
      position: absolute;
      width: 125px;
      height: 2px;
      background: red;
      left: 50%;
      margin-left: -62.5px;
      top: 50%;
      margin-top: -1px;
      z-index: 999;
    }

    .line2 {
      position: absolute;
      left: 50%;
      margin-top: -62.5px;
      top: 50%;
      margin-left: -1px;
      width: 2px;
      height: 125px;
      background: red;
      z-index: 999;
    }

    .img-box {
      position: absolute;
    }

    .img-box1 {
      left: 48px;
      top: -2px;
      transform: rotate(-90deg);
      // background-image: url('@/assets/vue.svg');
      // background-size: 100% 100%;
    }

    .img-box2 {
      left: 81px;
      top: 13px;
      transform: rotate(-45deg);
      // background-image: url('@/assets/vue.svg');
      // background-size: 100% 100%;
    }

    .img-box3 {
      left: 92px;
      top: 48px;
      transform: rotate(0deg);
    }

    .img-box4 {
      left: 76px;
      top: 79px;
      transform: rotate(46deg);
    }

    .img-box5 {
      left: 42px;
      top: 90px;
      transform: rotate(90deg);
    }

    .img-box6 {
      left: 11px;
      top: 76px;
      transform: rotate(135deg);
    }

    .img-box7 {
      left: 0px;
      top: 43px;
      transform: rotate(-180deg);
    }

    .img-box8 {
      left: 14px;
      top: 10px;
      transform: rotate(-135deg);
    }
  }
</style>
