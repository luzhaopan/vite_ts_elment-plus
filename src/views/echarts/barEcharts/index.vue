<template>
  <el-row :gutter="0" style="margin-top: 20px; padding: 20px; background: #fff">
    <el-col :span="12">
      <ECharts :options="optionsCl1" height="500px" />
      <div style="text-align: center">原始</div>
    </el-col>
    <el-col :span="12">
      <ECharts :options="optionsCl2" height="500px" />
      <div style="text-align: center">改进</div>
    </el-col>
    <el-col :span="12">
      <ECharts :options="optionsW1" height="500px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="optionsW3" height="500px" />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
  import { dataW1, dataW3 } from '../data'

  const femalex = []
  const femaley = []

  for (let i = 0; i < 500; i++) {
    let l = Math.random() * (0.7 - 0.1) + 0.1
    let r = Math.random() * (0.7 - 0.1) + 0.1
    // if (l < 0.7) {
    // female1.push([Number(l.toFixed(2)), Number(r.toFixed(2))])
    femalex.push([Number(l.toFixed(2)), Number(r.toFixed(2))])
    // }
  }
  // // console.log('female1', female1)
  console.log('femalex', femalex)

  for (let i = 0; i < 30; i++) {
    let l = Math.random() * (0.9 - 0.7) + 0.7
    let r = Math.random() * (0.9 - 0.7) + 0.7
    // female2.push([Number(l.toFixed(2)), Number(r.toFixed(2))])
    femaley.push([Number(l.toFixed(2)), Number(r.toFixed(2))])
  }
  // console.log('female2', female2)
  console.log('femaley', femaley)

  const optionsW1 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '60',
      icon: 'rect',
      itemHeight: 4,
      textStyle: {
        fontSize: 18
      },
      data: ['真实样本', '合成样本']
    },
    color: ['blue', 'orange'],
    xAxis: [
      {
        name: '采样时间点',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18
        },
        nameGap: 40,
        axisLine: {
          show: true
        },
        splitLine: {
          show: false // 是否显示网格线
        },
        axisTick: {
          show: false // 不显示坐标轴刻度线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18,
          interval: 29
        },
        data: dataW1.map(function (item) {
          return item[0]
        })
      },
      {
        type: 'category',
        data: new Array(dataW1.length).fill(''),
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#000'
          }
        }
      }
    ],
    yAxis: [
      {
        name: '归一化用电量',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 18
        },
        max: 1,
        min: 0,
        nameGap: 45,
        position: 'left',
        splitLine: {
          show: false // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18
        }
      },
      {
        position: 'right',
        splitLine: {
          show: false // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        }
      }
    ],
    series: [
      {
        name: '真实样本',
        type: 'line',
        symbol: 'none',
        data: dataW1.map(function (item, index) {
          return item[1]
        })
      },
      {
        name: '合成样本',
        type: 'line',
        symbol: 'none',
        data: dataW1.map(function (item, index) {
          if (index === 45 || index === 100) {
            return item[1] * 2
          } else if (index > 55 && index < 65) {
            return item[1] * 3
          } else if (index > 80 && index < 90) {
            return item[1] * 0.3
          } else if (index > 200 && index < 250) {
            return item[1] * (Math.floor(Math.random() * 2) + 1)
          } else {
            return item[1] * (Math.floor(Math.random() * 1.5) + 0.8)
          }
        })
      }
    ]
  }

  const xd = []
  for (let i = 0; i < 100; i++) {
    xd.push(i * 10)
  }

  const oo1 = [
    285, 273, 264, 250, 235, 212, 211, 200, 183.7, 186, 186, 156, 152.5, 152,
    144, 133, 105, 102.9, 112, 110, 102.7, 90, 80, 70, 65, 60, 57, 55.5, 55, 56,
    50, 68, 55, 53, 48, 45, 44, 43, 42, 41, 40, 39, 38, 35, 32, 33, 31, 30, 29,
    28, 27, 26, 24.5, 23.4, 21, 20, 17, 15, 13, 11, 9, 8, 7, 5.2, 4.8, 4.3, 4.0,
    2.9, 2.7, 2.6, 2.4, 2.2, 2.1, 2, 2, 1.8, 1.6, 1.4, 1.2, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]

  const oo2 = [
    285, 273, 264, 250, 235, 212, 211, 200, 183.7, 186, 186, 156, 152.5, 152,
    144, 133, 112, 111.5, 112, 110, 102.7, 90, 80, 70, 65, 60, 57, 55.5, 55, 56,
    55, 58, 55, 53, 48, 45, 44, 43, 42, 41, 40, 39, 38, 35, 32, 33, 31, 30, 29,
    28, 27, 26, 24.5, 23.4, 21, 20, 17, 15, 13, 11, 9, 8, 7, 5, 4, 3, 2, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ]

  const optionsCl1 = {
    xAxis: [
      {
        type: 'category',
        name: 'step',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 40,
        data: xd,
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
          // interval: 10
        }
        // minInterval: 200
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    yAxis: [
      {
        type: 'value',
        name: 'loss',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 45,
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
        }
      }
    ],
    grid: {
      left: '15%',
      right: '3%',
      bottom: '14%',
      top: '3%'
    },
    series: [
      {
        name: '',
        // smooth: true, // 开启平滑效果
        data: oo1,
        type: 'line',
        showSymbol: false,
        connectNulls: true,
        lineStyle: {
          color: '#ff5a5a'
        }
      }
    ]
  }

  const optionsCl2 = {
    xAxis: [
      {
        type: 'category',
        name: 'step',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 40,
        data: xd,
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
          // interval: 10
        }
        // minInterval: 200
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    yAxis: [
      {
        type: 'value',
        name: 'loss',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 45,
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
        }
      }
    ],
    grid: {
      left: '15%',
      right: '3%',
      bottom: '14%',
      top: '3%'
    },
    series: [
      {
        name: '',
        // smooth: true, // 开启平滑效果
        data: oo2,
        type: 'line',
        showSymbol: false,
        connectNulls: true,
        lineStyle: {
          color: '#ff5a5a'
        }
      }
    ]
  }

  const optionsW3 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '60',
      icon: 'rect',
      itemHeight: 4,
      textStyle: {
        fontSize: 18
      },
      data: ['真实样本', '合成样本']
    },
    color: ['blue', 'orange'],
    xAxis: [
      {
        name: '采样时间点',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18
        },
        nameGap: 40,
        axisLine: {
          show: true
        },
        splitLine: {
          show: false // 是否显示网格线
        },
        axisTick: {
          show: false // 不显示坐标轴刻度线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18,
          interval: 29
        },
        data: dataW3.map(function (item) {
          return item[0]
        })
      },
      {
        type: 'category',
        data: new Array(dataW3.length).fill(''),
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#000'
          }
        }
      }
    ],
    yAxis: [
      {
        name: '归一化用电量',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 18
        },
        max: 1,
        min: 0,
        nameGap: 45,
        position: 'left',
        splitLine: {
          show: false // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18
        }
      },
      {
        position: 'right',
        splitLine: {
          show: false // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        }
      }
    ],
    series: [
      {
        name: '真实样本',
        type: 'line',
        // lineStyle: {
        //   color: 'blue'
        // },
        symbol: 'none',
        data: dataW3.map(function (item) {
          return item[1]
        })
      },
      {
        name: '合成样本',
        type: 'line',
        // lineStyle: {
        //   color: 'orange'
        // },
        symbol: 'none',
        data: dataW3.map(function (item, index) {
          return item[1] * (Math.floor(Math.random() * 1.1) + 0.9)
        })
      }
    ]
  }
</script>
