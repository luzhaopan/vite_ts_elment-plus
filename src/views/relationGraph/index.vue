<template>
  <div class="container">
    <el-card class="box-card">
      <ECharts :options="relationoption" height="500px" />
    </el-card>
    <el-card class="box-card">
      <RelationGraph />
    </el-card>
  </div>
</template>

<script setup>
  import RelationGraph from './components/RelationGraph.vue'
  import { relationoption } from './optionsData.js'
</script>

<style lang="scss" scoped>
  .container {
    background-color: #fff;
    padding: 10px;
    h2 {
      margin-top: 20px;
    }
  }
</style>
