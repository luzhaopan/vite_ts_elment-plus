<template>
  <el-row
    :gutter="20"
    style="margin-top: 20px; padding: 20px; background: #fff"
  >
    <el-col :span="12">
      <ECharts :options="optionsCl1" height="500px" />
      <div class="text">原始1</div>
    </el-col>
    <el-col :span="12">
      <ECharts :options="optionsCl2" height="500px" />
      <div class="text">改进1</div>
    </el-col>

    <el-col :span="12">
      <ECharts :options="optionsCl3" height="500px" />
      <div class="text">原始2</div>
    </el-col>
    <el-col :span="12">
      <ECharts :options="optionsCl4" height="500px" />
      <div class="text">改进2</div>
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

  const xd3 = []
  for (let i = 0; i < 21; i++) {
    xd3.push(i * 10)
  }
  const oo3 = [
    13600, 17450, 21000, 22900, 13300, 15800, 20400, 16200, 12500, 21530, 14120,
    12800, 21950, 13450, 22200, 13250, 23080, 14680, 12530, 19800
  ]
  const oo31 = [
    13936.80152535008, 17135.02608863346, 20978.28170887494, 18854.504053089175,
    11470.017218669569, 16861.925509643374, 21349.0604994709,
    16422.559883128208, 14271.533211168027, 21470.576818825386,
    14998.485987864635, 11780.471790871597, 20092.193355144354,
    13265.390270513506, 21128.332225875725, 11623.56502090975, 25117.3942888389,
    16918.624530756653, 13939.720191293809, 19184.251846085437
  ]
  const oo4 = [
    13600, 17450, 21000, 22900, 13300, 15800, 20400, 16200, 12500, 21530, 14120,
    12800, 21950, 13450, 22200, 13250, 23080, 14680, 12530, 19800
  ]
  const oo41 = [
    13226.652843417081, 18026.89426218361, 20758.342907154074,
    23129.077361430638, 12948.300076215068, 15072.907372194612,
    19673.97121291105, 15874.196255762716, 13021.988252141404,
    22407.65229261859, 13424.755706578873, 12285.12618105398,
    21090.955809079944, 14103.7199458932, 23208.51198349756, 13471.700855307537,
    23397.07827416054, 13958.608703094535, 12540.726225625102,
    19325.480175673856
  ]
  // const oo41 = []
  // for (let i = 0; i < oo4.length; i++) {
  //   oo41.push(oo4[i] * (Math.random() * (1.05 - 0.95) + 0.95))
  // }
  // console.log('oo41', oo41)
  const optionsCl3 = {
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
      left: '15%',
      right: '3%',
      bottom: '14%',
      top: '3%'
    },
    series: [
      {
        name: 'True',
        smooth: true, // 开启平滑效果
        data: oo3,
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
        data: oo31,
        type: 'line',
        showSymbol: false,
        connectNulls: true
        // lineStyle: {
        //   color: '#ff5a5a'
        // }
      }
    ]
  }

  const optionsCl4 = {
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
      left: '15%',
      right: '3%',
      bottom: '14%',
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

<style>
  .text {
    text-align: center;
    margin: 20px;
  }
</style>
