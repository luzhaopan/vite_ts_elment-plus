<template>
  <div class="fullscreen" @click="toggleFullscreen">
    <el-icon :size="18">
      <component :is="isFullscreen ? 'Rank' : 'FullScreen'" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
  import { useFullscreen } from '@vueuse/core'

  const { toggle, isFullscreen } = useFullscreen()

  const toggleFullscreen = () => {
    toggle()
  }
</script>
