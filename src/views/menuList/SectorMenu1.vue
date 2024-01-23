<template>
  <div class="container">
    <MenuView @handle-change="menuClick" />
  </div>
</template>

<script setup lang="ts">
  import MenuView from './components/MenuView.vue'
  function menuClick(val) {
    console.log('menuClick', val)
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>
