<template>
  <el-card class="box-card">
    <ECharts :options="options1" height="400px" />
  </el-card>

  <el-card class="box-card">
    <div>
      <div class="row" v-for="(item, index) in demo1" :key="index">
        <div
          class="item"
          :style="{ background: c.color }"
          v-for="(c, i) in item"
          :key="i"
        >
          {{ c.name }}
        </div>
      </div>
    </div>
  </el-card>

  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="6">
        <ECharts :options="options2" height="400px" />
      </el-col>
      <el-col :span="18">
        <ECharts :options="options3" height="400px" />
      </el-col>
      <el-col :span="24">
        <ECharts :options="options4" height="400px" />
      </el-col>
    </el-row>
  </el-card>

  <el-card class="box-card">
    <h2>预期资产收益率与预期资产波动率</h2>
    <ECharts :options="scatterOptions" height="300px" />
  </el-card>
  <el-card class="box-card">
    <h2>相关性分析</h2>
    <ECharts :options="heatmapOption" height="500px" />
  </el-card>
  <el-card class="box-card">
    <h2>组合业绩归因</h2>
    <ECharts :options="lineOption" height="500px" />
  </el-card>
  <el-card class="box-card">
    <h2>中国信用环境指标时序看板</h2>
    <ECharts :options="combineOption" height="800px" />
  </el-card>
  <el-card class="box-card">
    <h2>指标预测综合分析</h2>
    <ECharts :options="gaugeChartsoption" height="500px" />
  </el-card>
</template>
<script lang="ts" setup>
  import * as echarts from 'echarts'
  import {
    scatterOptions,
    heatmapOption,
    lineOption,
    combineOption,
    gaugeChartsoption
  } from './optionsData.js'

  const demo1 = [
    [
      {
        name: '南华商品',
        color: 'blue'
      },
      {
        name: '创业板指',
        color: '#00f5ff'
      },
      {
        name: '中证500',
        color: 'pink'
      },
      {
        name: '黄金',
        color: 'orange'
      },
      {
        name: '黄金',
        color: 'orange'
      },
      {
        name: '南华商品',
        color: 'blue'
      },
      {
        name: '南华商品',
        color: 'blue'
      }
    ],
    [
      {
        name: '黄金',
        color: 'orange'
      },
      {
        name: '沪深300',
        color: 'red'
      },
      {
        name: '黄金',
        color: 'orange'
      },
      {
        name: '企业债AA+',
        color: 'green'
      },

      {
        name: '金融债',
        color: '#3480b9'
      },
      {
        name: '中证800',
        color: '#442834'
      },
      {
        name: '货币基金',
        color: '#00ff45'
      }
    ],
    [
      {
        name: '金融债',
        color: '#3480b9'
      },
      {
        name: '黄金',
        color: 'orange'
      },

      {
        name: '企业债AA+',
        color: 'green'
      },
      {
        name: '货币基金',
        color: '#00ff45'
      },
      {
        name: '黄金',
        color: 'orange'
      },
      {
        name: '沪深300',
        color: 'red'
      },
      {
        name: '中证800',
        color: '#122834'
      }
    ],
    [
      {
        name: '创业板指',
        color: '#00f5ff'
      },
      {
        name: '南华商品',
        color: 'blue'
      },

      {
        name: '中证500',
        color: 'pink'
      },
      {
        name: '黄金',
        color: 'orange'
      },
      {
        name: '南华商品',
        color: 'blue'
      },
      {
        name: '黄金',
        color: 'orange'
      },

      {
        name: '南华商品',
        color: 'blue'
      }
    ]
  ]

  const options1 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: {
              color: '#00f5ff'
            }
          },
          {
            value: -200,
            itemStyle: {
              color: 'blue'
            }
          },
          {
            value: 150,
            itemStyle: {
              color: 'pink'
            }
          },
          {
            value: 80,
            itemStyle: {
              color: 'orange'
            }
          },
          {
            value: -70,
            itemStyle: {
              color: '#442834'
            }
          },
          {
            value: 90,
            itemStyle: {
              color: '#3480b9'
            }
          },
          {
            value: -130,
            itemStyle: {
              color: '#00ff45'
            }
          }
        ],
        type: 'bar'
      }
    ]
  }

  const options2 = {
    series: [
      {
        type: 'gauge',
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.2, '#67e0e3'],
              [0.4, '#87f4e3'],
              [0.6, 'orange'],
              [0.8, '#fd666d'],
              [1, 'red']
            ]
          }
        },
        pointer: {
          width: 6,
          length: '10%',
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          show: false,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          show: false,
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 25,
          fontSize: 20
        },
        title: {
          fontSize: 14
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '20%'],
          valueAnimation: true,
          formatter: '{value}',
          color: 'inherit'
        },
        data: [
          {
            value: 70,
            name: '更新日期 2023-12-08',
            title: {
              offsetCenter: ['0%', '40%']
            }
          }
        ]
      }
    ]
  }

  const options3 = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    legend: {
      icon: 'circle',
      data: ['权益投资吸引力指', '股票型主动金指数']
    },
    yAxis: [
      {
        type: 'value',
        name: '',
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    color: ['blue', '#ffb714'],
    series: [
      {
        name: '权益投资吸引力指',
        data: [820, 932, 901, 884, 840, 830, 700],
        type: 'line',
        symbol: 'none',
        yAxisIndex: 0,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: 'rgba(65,159,255,0)'
            },
            {
              offset: 1,
              color: 'rgba(65,159,255,0.19)'
            }
          ])
        }
      },
      {
        name: '股票型主动金指数',
        data: [220, 632, 601, 634, 940, 960, 990],
        type: 'line',
        symbol: 'none',
        yAxisIndex: 1, // 指定为1号y轴
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: 'rgba(65,159,255,0)'
            },
            {
              offset: 1,
              color: '#ffb71442'
            }
          ])
        }
      }
    ]
  }

  const options4 = {
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: '股票型港股基金',
            value: 97,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '偏股型FOF基金',
            value: 69,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '股票型主动基金',
            value: 69,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '灵活配置型FOF基金',
            value: 30,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '混合基金',
            value: 30,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '偏债型FOF基金',
            value: 15,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '债券型指数基金',
            value: 7,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '固收+盘金',
            value: 15,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          },
          {
            name: '纯债基金',
            value: 7,
            label: {
              formatter: (params) => {
                return `${params.name}\n\n投资吸引力: ${params.value}`
              }
            }
          }
        ]
      }
    ]
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
  }
  .item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 5px;
  }
  .box-card {
    margin: 20px;
  }
</style>
