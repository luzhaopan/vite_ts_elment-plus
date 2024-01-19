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
      <div class="layer" @click="handleClick(5)">
        <img class="img5" src="@/assets/menu/u28.svg" alt="" />
      </div>
    </div>
    <div class="layer" @click="handleClick(6)">
      <img class="img6" src="@/assets/menu/u26.svg" alt="" />
      <div class="text">查看字段</div>
    </div>
    <div class="node" ref="menulist"></div>
  </div>
  <!-- <div class="more" v-if="false" @click="handleClick(0)"></div> -->
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const emit = defineEmits(['handle-change'])

  const handleClick = (v) => {
    emit('handle-change', v)
  }
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
</style>
