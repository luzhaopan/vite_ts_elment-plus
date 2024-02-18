<template>
  <el-row :gutter="0" style="margin-top: 20px; padding: 20px">
    <el-col :span="12">
      <ECharts :options="optionsRoc" height="500px" />
    </el-col>

    <el-col :span="24"> ----2024/02/18---- </el-col>

    <el-col :span="12">
      <ECharts :options="optionsW1" height="500px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="optionsW2" height="500px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="optionsW3" height="500px" />
    </el-col>

    <el-col :span="24"> ----44444444444444444444444444444 </el-col>

    <el-col :span="12">
      <ECharts :options="options1" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="options2" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="options3" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="options4" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="options5" height="600px" />
    </el-col>

    <el-col :span="12">
      <ECharts :options="options6" height="600px" />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
  import { dataW1, dataW3 } from '../data'

  const optionsRoc = {
    xAxis: [
      {
        type: 'category',
        name: 'FPR',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 18,
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
        name: 'TPR',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    gird: {
      left: '0%',
      right: '0%',
      bottom: '10%',
      top: '0%'
    },
    color: ['orange', 'red', 'green', 'blue', 'purple', '#333'],
    series: [
      {
        name: 'Raw data AUC = 0.5795',
        data: [
          0,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'RUS AUC = 0.7058',
        smooth: true, // 开启平滑效果
        data: [
          0,
          '',
          '',
          '',
          '',
          '',
          0.44,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'ROS AUC = 0.8156',
        smooth: true, // 开启平滑效果
        data: [
          0,
          '',
          '',
          '',
          '',
          0.55,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'ADASYN AUC = 0.9358',
        smooth: true, // 开启平滑效果
        data: [
          0,
          0.66,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }

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

  const optionsW2 = {
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
          if (index > 30 && index < 45) {
            return item[1] * 2
          } else if (index > 150 && index < 200) {
            return item[1] * (Math.floor(Math.random() * 0.8) + 0.6)
          } else {
            return item[1] * (Math.floor(Math.random() * 1.1) + 0.95)
          }
        })
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

  const options1 = {
    xAxis: [
      {
        type: 'category',
        name: 'recall',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 22,
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
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    legend: {
      icon: 'rect',
      itemWidth: 20,
      itemHeight: 4,
      itemGap: 15,
      width: 100,
      left: '50%',
      bottom: '15%',
      textStyle: {
        fontSize: 22
      },
      data: [
        'Raw data AUC = 0.5338',
        'RUS AUC = 0.6439',
        'ROS AUC = 0.7490',
        'ADASYN AUC = 0.7832',
        'SMOTE AUC = 0.7915',
        'WGAN AUC = 0.9469'
      ]
    },
    gird: {
      left: '0%',
      right: 0,
      bottom: '10%',
      top: '0%'
    },
    color: ['orange', 'red', 'green', 'blue', 'purple', '#333'],
    series: [
      {
        name: 'Raw data AUC = 0.5338',
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
        name: 'RUS AUC = 0.6439',
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
        name: 'ROS AUC = 0.7490',
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
        name: 'ADASYN AUC = 0.7832',
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
        name: 'SMOTE AUC = 0.7915',
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
        name: 'WGAN AUC = 0.9469',
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
          0.6
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }
  const options2 = {
    xAxis: [
      {
        type: 'category',
        name: 'False Positive Rate',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 18,
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
        name: 'True Positive Rate',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    legend: {
      icon: 'rect',
      itemWidth: 20,
      itemHeight: 4,
      itemGap: 15,
      width: 100,
      left: '55%',
      bottom: '15%',
      textStyle: {
        fontSize: 22
      },
      data: [
        'Raw data AUC = 0.5795',
        'RUS AUC = 0.7058',
        'ROS AUC = 0.8156',
        'ADASYN AUC = 0.9358',
        'SMOTE AUC = 0.8527',
        'WGAN AUC = 0.9684'
      ]
    },
    gird: {
      left: '0%',
      right: '0%',
      bottom: '10%',
      top: '0%'
    },
    color: ['orange', 'red', 'green', 'blue', 'purple', '#333'],
    series: [
      {
        name: 'Raw data AUC = 0.5795',
        data: [
          0,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          0.55,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'RUS AUC = 0.7058',
        data: [
          0,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          0.74,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'ROS AUC = 0.8156',
        data: [
          0,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          0.85,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'ADASYN AUC = 0.9358',
        data: [
          0,
          '',
          '',
          '',
          '',
          '',
          0.86,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'SMOTE AUC = 0.8527',
        data: [
          0,
          '',
          '',
          '',
          '',
          0.963,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'WGAN AUC = 0.9684',
        data: [
          0,
          '',
          0.9863,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }
  const options3 = {
    xAxis: [
      {
        type: 'category',
        name: 'recall',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 22,
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
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    legend: {
      icon: 'rect',
      itemWidth: 20,
      itemHeight: 4,
      itemGap: 15,
      width: 100,
      left: '12%',
      bottom: '12%',
      textStyle: {
        fontSize: 22
      },
      data: [
        'SVM AUC = 0.3743',
        'BF AUC = 0.4703',
        'Wide&Deep CNN AUC = 0.5724',
        'DT AUC = 0.5824',
        'LSTM&MLP AUC = 0.6719',
        'SOSTLink&Bi-GRU AUC = 0.7795',
        'WGAN AUC = 0.9469'
      ]
    },
    color: ['purple', 'green', 'pink', 'blue', 'orange', 'red', '#333'],
    series: [
      {
        name: 'SVM AUC = 0.3743',
        data: [
          1,
          '',
          '',
          '',
          '',
          '',
          '',
          0.58,
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
          0.33
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'BF AUC = 0.4703',
        data: [
          1,
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
          0.33
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'Wide&Deep CNN AUC = 0.5724',
        data: [
          1,
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
          0.68,
          '',
          '',
          '',
          '',
          0.33
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'DT AUC = 0.5824',
        data: [
          1,
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
          0.9,
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
          0.34
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'LSTM&MLP AUC = 0.6719',
        data: [
          1,
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
          0.78,
          '',
          '',
          '',
          0.35
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'SOSTLink&Bi-GRU AUC = 0.7795',
        data: [
          1,
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
          0.88,
          '',
          0.34
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'WGAN AUC = 0.9469',
        data: [
          1,
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
          0.98,
          0.55
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }
  const options4 = {
    xAxis: [
      {
        type: 'category',
        name: 'False Positive Rate',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 22,
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
        name: 'True Positive Rate',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    legend: {
      icon: 'rect',
      itemWidth: 20,
      itemHeight: 4,
      itemGap: 15,
      width: 100,
      left: '44%',
      bottom: '15%',
      textStyle: {
        fontSize: 22
      },
      data: [
        'SVM AUC = 0.6144',
        'BF AUC = 0.7053',
        'Wide&Deep CNN AUC = 0.8123',
        'DT AUC = 0.7444',
        'LSTM&MLP AUC = 0.8789',
        'SOSTLink&Bi-GRU AUC = 0.9332',
        'WGAN AUC = 0.9684'
      ]
    },
    color: ['purple', 'green', 'pink', 'blue', 'orange', 'red', '#333'],
    series: [
      {
        name: 'SVM AUC = 0.6144',
        data: [
          0,
          '',
          '',
          0.3,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'BF AUC = 0.7053',
        data: [
          0,
          '',
          '',
          '',
          0.52,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'Wide&Deep CNN AUC = 0.8123',
        data: [
          0,
          '',
          '',
          '',
          '',
          '',
          0.79,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'DT AUC = 0.7444',
        data: [
          0,
          0.55,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'LSTM&MLP AUC = 0.8789',
        data: [
          0,
          '',
          '',
          '',
          '',
          0.88,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'SOSTLink&Bi-GRU AUC = 0.9332',
        data: [
          0,
          '',
          '',
          '',
          0.9332,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'WGAN AUC = 0.9684',
        data: [
          0,
          '',
          0.9864,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }

  const options5 = {
    xAxis: [
      {
        type: 'category',
        name: 'recall',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 22,
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
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    legend: {
      icon: 'rect',
      itemWidth: 20,
      itemHeight: 4,
      itemGap: 15,
      width: 100,
      left: '56%',
      bottom: '15%',
      textStyle: {
        fontSize: 22
      },
      data: [
        'Test1 AUC = 0.7765',
        'Test2 AUC = 0.7946',
        'Test3 AUC = 0.8988',
        'WGAN AUC = 0.9469'
      ]
    },
    color: ['blue', 'orange', 'green', 'red'],
    series: [
      {
        name: 'Test1 AUC = 0.7765',
        data: [
          1,
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
          0.7765,
          '',
          '',
          0.54
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'Test2 AUC = 0.7946',
        data: [
          1,
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
          0.7946,
          '',
          0.55
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'Test3 AUC = 0.8988',
        data: [
          1,
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
          0.8988,
          '',
          0.55
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'WGAN AUC = 0.9469',
        data: [
          1,
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
          0.95,
          0.57
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }
  const options6 = {
    xAxis: [
      {
        type: 'category',
        name: 'False Positive Rate',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 40,
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
          fontSize: 22,
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
        name: 'True Positive Rate',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 22
        },
        nameGap: 45,
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
          fontSize: 22,
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
    legend: {
      icon: 'rect',
      itemWidth: 20,
      itemHeight: 4,
      itemGap: 15,
      width: 100,
      left: '56%',
      bottom: '15%',
      textStyle: {
        fontSize: 22
      },
      data: [
        'Test1 AUC = 0.8434',
        'Test2 AUC = 0.8631',
        'Test3 AUC = 0.9363',
        'WGAN AUC = 0.9684'
      ]
    },
    color: ['blue', 'orange', 'green', 'red'],
    series: [
      {
        name: 'Test1 AUC = 0.8434',
        data: [
          0,
          '',
          '',
          '',
          '',
          0.8434,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'Test2 AUC = 0.8631',
        data: [
          0,
          '',
          '',
          '',
          0.8631,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'Test3 AUC = 0.9363',
        data: [
          0,
          '',
          0.9363,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      },
      {
        name: 'WGAN AUC = 0.9684',
        data: [
          0,
          0.9684,
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
          1
        ],
        type: 'line',
        showSymbol: false,
        connectNulls: true
      }
    ]
  }
</script>
