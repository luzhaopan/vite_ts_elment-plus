<template>
  <ElButton type="primary" @click="guideStart">guide</ElButton>
</template>

<script setup lang="ts">
  import { ElButton } from 'element-plus'
  import { useGuide } from './guide'

  const { drive } = useGuide()

  const guideStart = () => {
    drive()
  }
</script>
