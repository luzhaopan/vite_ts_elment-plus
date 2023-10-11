<template>
  <ECharts :options="options" height="400px" />
</template>
<script lang="ts" setup>
  import * as echarts from 'echarts'

  const options: any = {
    backgroundColor: '#eee',
    title: {
      show: true, // 无数据时展示 title
      textStyle: {
        color: '#e5e6e7',
        fontSize: 20
      },
      text: '暂无数据',
      left: 'center',
      top: 'center'
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: true
      },
      data: ['0', '1', '2', '3', '4', '5', '6']
    },
    yAxis: {
      name: '预测值（kw）',
      type: 'value',
      axisLine: {
        show: true
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        // data: [150, 230, 224, 218, 135, 147, 260],
        data: [],
        type: 'line',
        lineStyle: {
          color: '#ddd'
        }
      }
    ],
    grid: {
      show: true,
      borderColor: 'transparent',
      backgroundColor: '#fff'
    }
  }
</script>
