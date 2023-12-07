<template>
  <el-row :gutter="20" style="margin-top: 20px; padding: 20px">
    <el-col :span="12">
      <ECharts :options="optionsW1" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="optionsW2" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="optionsW3" height="600px" />
    </el-col>
    <el-col :span="24"> ---- </el-col>
    <el-col :span="12">
      <ECharts :options="options1" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="options1" height="600px" />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
  import { dataW1, dataAll, dataW3 } from '../data'
  const optionsW1 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '80',
      icon: 'rect',
      itemHeight: 4,
      data: ['真实样本', '合成样本']
    },
    color: ['blue', '#fbc868'],
    xAxis: [
      {
        name: '采样时间点',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#000',
          fontWeight: '600',
          fontSize: 14
        },
        nameGap: 30,
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
          fontSize: 14,
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
          fontSize: 14
        },
        nameGap: 35,
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
          fontSize: 14
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
          if (index === 45) {
            return item[1]
          } else {
            return item[1]
          }
        })
      },
      {
        name: '合成样本',
        type: 'line',
        symbol: 'none',
        data: dataW1.map(function (item, index) {
          if (index === 45 || index === 100) {
            return item[1] * 2
          } else {
            return item[1]
          }
        })
      }
    ]
  }

  // const dataW2 = dataAll.slice(200, 550)
  const dataW22 = dataAll.slice(200, 550)
  const dataW2 = []
  dataW22.forEach((item, index) => {
    dataW2.push([index, item[1] / 1000])
  })

  const optionsW2 = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: dataW2.map(function (item) {
        return item[0]
      })
    },
    yAxis: {},
    series: [
      {
        name: 'Beijing AQI',
        type: 'line',
        lineStyle: {
          color: 'orange'
        },
        symbol: 'none',
        data: dataW2.map(function (item) {
          return item[1]
        })
      },
      {
        name: 'Beijing AQI',
        type: 'line',
        lineStyle: {
          color: 'blue'
        },
        symbol: 'none',
        data: dataW2.map(function (item) {
          return item[1] * 2
        })
      }
    ]
  }

  const optionsW3 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: '80',
      icon: 'rect',
      itemHeight: 4,
      data: ['真实样本', '合成样本']
    },
    color: ['blue', '#fbc868'],
    xAxis: [
      {
        name: '采样时间点',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#000',
          fontWeight: '600',
          fontSize: 14
        },
        nameGap: 30,
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
          fontSize: 14,
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
          fontSize: 14
        },
        nameGap: 35,
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
          fontSize: 14
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
          return item[1] * (Math.floor(Math.random() * 1.15) + 0.85)
        })
      }
    ]
  }

  const options1 = {
    xAxis: [
      {
        type: 'category',
        name: 'recall',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 14
        },
        nameGap: 30,
        data: [
          '0.0',
          '',
          '',
          '',
          '',
          '0.2',
          '',
          '',
          '',
          '',
          '0.4',
          '',
          '',
          '',
          '',
          '0.6',
          '',
          '',
          '',
          '',
          '0.8',
          '',
          '',
          '',
          '',
          '1.0'
        ],
        boundaryGap: false,
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
          color: '#333',
          fontWeight: '600',
          fontSize: 14,
          interval: 0
        }
      },
      {
        type: 'category',
        data: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#333'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Precision',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 16
        },
        nameGap: 35,
        position: 'left',
        splitLine: {
          show: false // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        },
        axisLabel: {
          color: '#333',
          fontWeight: '600',
          fontSize: 14,
          formatter: function (value, index) {
            return !value ? '0.0' : value
          }
        }
      },
      {
        type: 'value',
        position: 'right',
        splitLine: {
          show: false // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        }
      }
    ],
    color: ['orange', 'red', 'green', 'blue', 'purple', '#333'],
    series: [
      {
        data: [
          1,
          '',
          '',
          '',
          '',
          0.85,
          '',
          '',
          '',
          '',
          0.71,
          '',
          '',
          '',
          '',
          0.58,
          '',
          '',
          '',
          '',
          0.56,
          '',
          '',
          '',
          '',
          0.54
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        data: [
          1,
          '',
          '',
          '',
          '',
          0.92,
          '',
          '',
          '',
          '',
          0.84,
          '',
          '',
          '',
          '',
          0.76,
          '',
          '',
          '',
          '',
          0.68,
          '',
          '',
          '',
          '',
          0.55
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        data: [
          1,
          '',
          '',
          '',
          '',
          0.95,
          '',
          '',
          '',
          '',
          0.89,
          '',
          '',
          '',
          '',
          0.83,
          '',
          '',
          '',
          '',
          0.78,
          0.76,
          '',
          '',
          '',
          0.55
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        data: [
          1,
          '',
          '',
          '',
          '',
          0.96,
          '',
          '',
          '',
          '',
          0.91,
          '',
          '',
          '',
          '',
          0.86,
          '',
          '',
          '',
          '',
          0.8,
          0.79,
          '',
          '',
          0.76,
          0.35
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        data: [
          1,
          '',
          '',
          '',
          '',
          0.963,
          '',
          '',
          '',
          '',
          0.921,
          '',
          '',
          '',
          '',
          0.87,
          '',
          '',
          '',
          '',
          0.82,
          0.81,
          0.8,
          '',
          '',
          0.55
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        data: [
          1,
          '',
          '',
          '',
          '',
          0.9863,
          '',
          '',
          '',
          '',
          0.982,
          '',
          '',
          '',
          '',
          0.97,
          '',
          '',
          '',
          '',
          0.96,
          '',
          '',
          '',
          0.95,
          0.65
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }
</script>
