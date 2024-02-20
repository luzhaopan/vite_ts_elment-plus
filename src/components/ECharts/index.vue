<template>
  <div ref="chartRef" :style="{ width, height }"></div>
</template>
<script lang="ts" setup>
  import { ref, Ref, onMounted, type PropType } from 'vue'
  import { useECharts } from '@/hooks/web/useECharts'
  import type { EChartsOption } from 'echarts'

  const props = defineProps({
    width: {
      type: String as PropType<string>,
      default: '100%'
    },
    height: {
      type: String as PropType<string>,
      default: '300px'
    },
    options: {
      type: Object as PropType<EChartsOption>,
      required: true
    },
    event: {
      type: Boolean,
      default: false
    }
  })

  const chartRef = ref<HTMLDivElement | null>(null)
  const { setOptions, getInstance } = useECharts(
    chartRef as Ref<HTMLDivElement>,
    'light'
  )

  onMounted(() => {
    setOptions(props.options)
    const arr = []
    props.event &&
      getInstance().on('click', function (params) {
        arr.push(params.data)
        console.log(arr)
      })
  })
</script>
