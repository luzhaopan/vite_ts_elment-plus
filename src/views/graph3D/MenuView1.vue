<template>
  <div class="container">
    <div class="layer layer5">查看字段</div>
    <div class="layer layer5">流转关系</div>
    <div class="layer layer5">节点评价</div>
    <div class="layer layer5">节点详情</div>
    <div class="layer layer5">专题分析</div>
    <div class="layer layer5">...</div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    const b_len = document.getElementsByClassName('layer5').length
    document.querySelectorAll('.layer5').forEach(function (item, i) {
      // item.style.backgroundColor =
      //   '#' + Math.floor(Math.random() * 16777215).toString(16)
      item.style.transform =
        'rotate(' +
        (360 / b_len) * (i + 1) +
        'deg)skewX(' +
        (90 - 360 / b_len) +
        'deg)'
    })
  })
</script>

<style scoped>
  .container {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    /* border: 2px outset deeppink; */
    border-radius: 50%;
    background-image: url('@/assets/menu/u16.svg');
    background-size: 100% 100%;
  }
  .layer {
    position: absolute;
    transform-origin: left top;
    left: 100px;
    top: 100px;
    width: 100px;
    height: 100px;
    /* border: 1px solid white; */
    box-sizing: border-box;
    color: #fff;
  }
</style>
