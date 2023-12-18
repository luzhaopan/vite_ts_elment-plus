<template>
  <el-card>
    <ECharts :options="options1" height="400px" />
  </el-card>
  <el-card>
    <ECharts :options="options2" height="400px" />
  </el-card>
</template>
<script lang="ts" setup>
  import * as echarts from 'echarts'

  const category = []
  let dottedBase = +new Date()
  const lineData = []
  const barData = []

  for (var i = 0; i < 20; i++) {
    var date = new Date((dottedBase += 1000 * 3600 * 24))
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
    )
    var b = Math.random() * 200
    var d = Math.random() * 200
    barData.push(b)
    lineData.push(d + b)
  }

  const options1: any = {
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
          backgroundColor: '#333'
        }
      }
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [
      {
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
      },
      {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' }
          ])
        },
        data: barData
      },
      {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' }
          ])
        },
        z: -12,
        data: lineData
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }
    ]
  }

  const options2 = {
    title: {
      text: '患者数量（人）',
      textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
      padding: [5, 0, 0, 0]
    },
    legend: {
      orient: 'vertical',
      top: 0,
      right: 0,
      itemWidth: 10,
      itemHeight: 10,
      data: [
        '特护三级',
        '特护二级',
        '特护一级',
        '普护三级',
        '普护二级',
        '普护一级'
      ] // ! 调整系列名展示顺序
    },
    grid: { left: 0, top: 40, bottom: 20, right: 80, containLabel: true },
    xAxis: {
      type: 'category',
      data: [
        '神经内外科',
        '内分泌科',
        '消化内科',
        '呼吸内科',
        '骨外科',
        '眼耳鼻喉科',
        '心血管内科'
      ],
      axisLine: { lineStyle: { color: '#ccc' } },
      axisTick: { length: 3 },
      axisLabel: { color: '#666' }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: true, lineStyle: { color: '#ccc' } },
      axisLabel: { color: '#999' },
      splitLine: {
        lineStyle: {
          color: ['#CEEDFF'],
          type: [5, 8], // ! 网格虚线设置
          dashOffset: 3
        }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      padding: [12, 17, 20, 23],
      textStyle: { color: '#424242' },
      renderMode: 'html',
      className: 'tooltip',
      order: 'seriesDesc' // ! 顺序调整
    },
    color: ['#008E6D', '#00B389', '#62F4D1', '#006EFE', '#52A8FF', '#A3D7FF'],
    series: [
      {
        name: '特护三级',
        type: 'bar',
        barWidth: 24,
        stack: 'total',
        data: [0, 0, 1, 1, 0, 0, 0]
      },
      {
        name: '特护二级',
        type: 'bar',
        barWidth: 24,
        stack: 'total',
        data: [0, 1, 0, 1, 0, 0, 2]
      },
      {
        name: '特护一级',
        type: 'bar',
        barWidth: 24,
        stack: 'total',
        data: [1, 0, 1, 3, 1, 3, 0]
      },
      {
        name: '普护三级',
        type: 'bar',
        barWidth: 24,
        stack: 'total',
        data: [0, 2, 0, 2, 0, 8, 0]
      },
      {
        name: '普护二级',
        type: 'bar',
        barWidth: 24,
        stack: 'total',
        data: [0, 2, 0, 4, 0, 9, 0]
      },
      {
        name: '普护一级',
        type: 'bar',
        barWidth: 24,
        stack: 'total',
        data: [0, 1, 0, 7, 0, 8, 1]
      },
      {
        name: '普护一级1',
        type: 'bar',
        barWidth: 30,
        barGap: '-100%',
        itemStyle: {
          normal: {
            color: 'transparent',
            borderType: 'dashed',
            barBorderColor: '#eee',
            barBorderWidth: 2,
            barBorderRadius: 1,
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowColor: 'red'
          }
        },
        stack: 'total1',
        data: ['-', '-', '-', '-', '-', '-', 5]
      }
    ]
  }
</script>
