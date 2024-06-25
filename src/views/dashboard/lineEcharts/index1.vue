<template>
  <ECharts :options="options" height="500px" />
</template>
<script lang="ts" setup>
  // import * as echarts from 'echarts'

  const xd3 = []
  for (let i = 0; i < 21; i++) {
    xd3.push(i * 10)
  }

  const oo4 = [
    13610.33, 17450.15, 21000.53, 22900.94, 13300.65, 15800.84, 20400.67,
    16200.52, 12500.39, 21530.47, 14121.13, 12802.09, 21950.14, 13450.66,
    22200.36, 13253.29, 23086.3, 14680, 12537.27, 19895.31
  ]

  const oo41 = [
    13226.65, 18026.89, 20758.34, 23129.07, 12948.3, 15072.9, 19673.97,
    15874.19, 13021.34, 22407.65, 13424.75, 12285.12, 21090.58, 14103.72,
    23208.56, 13471.77, 23397.04, 13958.65, 12540.72, 19325.48
  ]

  const options: any = {
    legend: {
      top: '30',
      icon: 'rect',
      itemHeight: 4,
      textStyle: {
        fontSize: 18
      },
      data: ['True', 'Predict']
    },
    xAxis: [
      {
        type: 'category',
        name: 'time(h)',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 40,
        data: xd3,
        boundaryGap: false,
        axisLine: {
          show: true
        },
        splitLine: {
          show: true // 是否显示网格线
        },
        axisTick: {
          show: true // 不显示坐标轴刻度线
        },
        axisLabel: {
          color: '#333',
          // fontWeight: '600',
          fontSize: 25
          // interval: 20
        }
        // interval: 20
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    yAxis: [
      {
        type: 'value',
        name: 'electricity(MWh)',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 90,
        position: 'left',
        splitLine: {
          show: true // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        },
        axisLabel: {
          color: '#333',
          // fontWeight: '600',
          fontSize: 25
          // formatter: function (value, index) {
          //   return !value ? '0' : value
          // }
        },
        // interval: 2000,
        min: 10000
      }
    ],
    grid: {
      left: '20%',
      right: '5%',
      bottom: '16%',
      top: '3%'
    },
    series: [
      {
        name: 'True',
        smooth: true, // 开启平滑效果
        data: oo4,
        type: 'line',
        showSymbol: false,
        connectNulls: true,
        lineStyle: {
          color: '#ff5a5a'
        }
      },
      {
        name: 'Predict',
        smooth: true, // 开启平滑效果
        data: oo41,
        type: 'line',
        showSymbol: false,
        connectNulls: true
        // lineStyle: {
        //   color: '#ff5a5a'
        // }
      }
    ]
  }
</script>
