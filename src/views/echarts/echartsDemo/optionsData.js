const seriesData = [
  {
    type: 'scatter',
    name: 'seriesName',
    data: [
      [1.3916, 2.7816, '上证综指', 'seriesName'],
      [2.1905, -2.2052, '中小板指', 'seriesName'],
      [1.8921000000000001, 0.0243, '创业板指', 'seriesName'],
      [1.559, -0.42440000000000005, '沪深300指数', 'seriesName'],
      [1.7209999999999999, 5.4881, '中证500指数', 'seriesName'],
      [2.0269, 4.2208000000000006, '中证1000指数', 'seriesName'],
      [0.0495, 0.48, '证金债指数', 'seriesName']
    ],
    symbolSize: 30,
    label: {
      show: true,
      position: 'bottom',
      distance: 10,
      formatter: '{@[2]}'
    },
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(25, 100, 150, 0.5)',
      shadowOffsetY: 5,
      color: {
        colorStops: [
          {
            offset: 0,
            color: '#738CD3'
          },
          {
            offset: 1,
            color: '#95ADE4'
          }
        ],
        x: 0.4,
        y: 0.3,
        r: 1,
        type: 'radial',
        global: false
      }
    }
  }
]
const scatterOptions = {
  color: ['#607BCB'],
  tooltip: {
    show: true,
    trigger: 'item',
    axisPointer: {
      type: 'cross',
      snap: true
    },
    showContent: false,
    enterable: true
  },
  grid: {
    top: '10',
    left: '60',
    right: '15',
    bottom: '50'
  },
  xAxis: {
    name: '预期资产波动率(%)',
    nameLocation: 'center',
    nameGap: 20,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#60636C'
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    name: '预期资产收益率(%)',
    nameLocation: 'center',
    nameGap: 40,
    nameTextStyle: {
      color: '#000'
    },
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed' // 虚线
      },
      show: true // 隐藏
    },
    axisLabel: {
      show: true,
      color: '#60636C'
    },
    axisLine: {
      lineStyle: {
        color: '#E4E7F4'
      }
    },
    axisTick: {
      show: false
    }
  },
  series: seriesData
}

const heatmapData = {
  xAxisData: [
    '前海开源新经济\n灵活配置混合A',
    '前海开源新经济\n灵活配置混合C',
    '前海开源公用事\n业行业股票',
    '前海开源新兴产\n业混合C',
    '前海开源新兴产\n业混合A',
    '前海开源沪港深非\n周期性行业股票A',
    '前海开源沪港深非\n周期性行业股票C',
    '前海开源沪港深智慧\n生活优选灵活配置混合'
  ],
  yAxisData: [
    '前海开源新经济灵活配置混合A',
    '前海开源新经济灵活配置混合C',
    '前海开源公用事业行业股票',
    '前海开源新兴产业混合C',
    '前海开源新兴产业混合A',
    '前海开源沪港深非周期性行业股票A',
    '前海开源沪港深非周期性行业股票C',
    '前海开源沪港深智慧生活优选灵活配置混合'
  ],
  seriesData: [
    [0, 0, 0.57],
    [0, 1, 0.64],
    [0, 2, 0.7],
    [0, 1, -0.76],
    [0, 4, 0.8],
    [0, 5, 0.86],
    [0, 6, 0.9],
    [0, 7, 1],
    [1, 0, 0.57],
    [1, 1, 0.64],
    [1, 2, 0.7],
    [1, 3, 0.76],
    [1, 4, 0.8],
    [1, 5, 0.86],
    [1, 6, 0.9],
    [1, 7, 1],
    [2, 0, 0.57],
    [2, 1, 0.64],
    [2, 2, 0.7],
    [2, 3, 0.86],
    [2, 4, 0.8],
    [2, 5, 0.86],
    [2, 6, 0.9],
    [2, 7, 1],
    [3, 0, 0.97],
    [3, 1, 0.94],
    [3, 2, 0.97],
    [3, 3, 0.6],
    [3, 4, 0.68],
    [3, 5, 0.86],
    [3, 6, 0.9],
    [3, 7, 1],
    [4, 0, 0.97],
    [4, 1, 0.94],
    [4, 2, 0.97],
    [4, 3, 0.6],
    [4, 4, 0.68],
    [4, 5, 0.86],
    [4, 6, 0.9],
    [4, 7, 1],
    [5, 0, -0.67],
    [5, 1, 0.64],
    [5, 2, 0.47],
    [5, 3, -0.3],
    [5, 4, 0.6],
    [5, 5, 0.86],
    [5, 6, 0.9],
    [5, 7, 1],
    [6, 0, 0.97],
    [6, 1, 0.64],
    [6, 2, 0.47],
    [6, 3, 0.23],
    [6, 4, 0.36],
    [6, 5, 0.6],
    [6, 6, 0.9],
    [6, 7, 0.1],
    [7, 0, 0.7],
    [7, 1, 0.64],
    [7, 2, 0.47],
    [7, 3, 0.23],
    [7, 4, 0.36],
    [7, 5, 0.6],
    [7, 6, 0.9],
    [7, 7, 0.1]
  ]
}
let yAxisVal = '' // 定义y轴变量
let xAxisVal = ''
const heatmapOption = {
  tooltip: {
    position: 'top',
    formatter: function (e) {
      return `${yAxisVal}与${xAxisVal}</br>相关性： ${
        (e.data && e.data[2]) || '-'
      } `
    }
  },
  grid: {
    top: '10%',
    left: '12%',
    right: '3%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: heatmapData.xAxisData,
    position: 'bottom', // top
    splitArea: {
      show: true
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      // x轴文字的配置
      show: true,
      interval: 0 // 使x轴文字显示全
    },
    axisPointer: {
      show: true,
      type: 'none',
      trigger: 'item',
      label: {
        show: false,
        formatter(e) {
          xAxisVal = e.value // 重点：获取x轴的值
          return e.value
        }
      }
    }
  },
  yAxis: {
    type: 'category',
    data: heatmapData.yAxisData,
    splitArea: {
      show: true
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      formatter: function (value) {
        var texts = value
        if (texts.length > 8) {
          texts = texts.substr(0, 8) + '...'
        }
        return texts
      }
    },
    axisPointer: {
      type: 'none',
      show: true,
      trigger: 'item',
      splitLine: {
        show: false
      },
      label: {
        show: false,
        formatter(e) {
          yAxisVal = e.value // 重点：获取y轴的值
          return e.value
        }
      }
    }
  },
  visualMap: {
    min: -1,
    max: 1,
    itemWidth: '10',
    itemHeight: '400',
    calculable: true,
    orient: 'vertical',
    right: '1',
    top: 'center',
    inRange: {
      color: [
        '#485FBC',
        '#6679C7',
        '#8998D4',
        '#B7C0E5',
        '#E0E4F4',
        '#F2F3FA',
        '#FDFBF8',
        '#F8F4EC',
        '#F6F0E4',
        '#E9DBBE',
        '#DBC495',
        '#D8BE8A',
        '#D3B77E',
        '#C7A35A'
      ]
    }
  },
  series: [
    {
      name: '相关性',
      type: 'heatmap',
      // progressive: 1000,
      data: heatmapData.seriesData,
      label: {
        show: false
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 10,
        borderRadius: 8
        // shadowOffsetX: 0,
        // shadowOffsetY: 0,
        // shadowColor: 'rgba(0, 0, 0, 1)'
      }
      //   emphasis: {
      //     itemStyle: {
      //       borderColor: '#fff',
      //       borderWidth: 0,
      //       shadowBlur: 1,
      //       shadowColor: 'rgba(0, 0, 0, 0)'
      //     }
      //   }
    }
  ]
}

const lineOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      textStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    top: '15%',
    bottom: '15%',
    left: '10%',
    right: '10%'
  },
  legend: {
    top: '11%',
    // itemGap: 15,
    width: 100,
    right: '12%',
    textStyle: {
      color: '#90979c'
    },
    data: ['total', '市值因子', '市值']
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#E4E7F4'
        },
        onZero: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: '#60636C'
      },
      data: [
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '600519.SH return',
      nameLocation: 'center',
      nameGap: 50,
      position: 'left',
      nameTextStyle: {
        color: '#000'
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#60636C',
        formatter: function (value, index) {
          return value + '%'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#E4E7F4'
        }
      },
      axisTick: {
        show: true
      }
    },
    {
      type: 'value',
      name: '',
      position: 'right',
      nameTextStyle: {
        color: '#000'
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        color: '#60636C',
        formatter: function (value, index) {
          return value
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#E4E7F4'
        }
      },
      axisTick: {
        show: true
      }
    }
  ],
  series: [
    {
      name: 'total',
      type: 'line',
      symbolSize: 10,
      symbol: 'circle',
      itemStyle: {
        color: '#000',
        borderRadius: 0,
        label: {
          show: true,
          position: 'top',
          formatter: function (p) {
            return p.value
          }
        }
      },
      lineStyle: {
        color: '#ffffff00',
        borderRadius: 0,
        label: {
          show: true,
          position: 'top',
          formatter: function (p) {
            return p.value
          }
        }
      },
      data: [
        281.55, -98.35, 214.02, 119.55, 289.57, 296.14, 364.18, 522.69, 306.08,
        152.84, 205.97, 332.79
      ]
    },
    {
      name: '总1',
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      showSymbol: false,
      areaStyle: {},
      data: [
        28.55, 348.35, 234.02, 249.55, 299.57, 286.14, 264.18, 382.69, 386.08,
        452.84, 285.97, 432.79
      ]
    },
    {
      name: '市值因子',
      type: 'bar',
      stack: '总量',
      barMaxWidth: 20,
      barGap: '10%',
      itemStyle: {
        color: '#819cc7',
        label: {
          show: true,
          textStyle: {
            color: '#fff'
          },
          position: 'insideTop',
          formatter: function (p) {
            return p.value
          }
        }
      },
      data: [
        -198.66, -330.81, 151.95, 160.12, 222.56, 229.05, 128.53, 250.91,
        224.47, 473.99, 126.85, 260.5
      ]
    },
    {
      name: '市值',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        color: 'rgba(0,191,183,1)',
        borderRadius: 0,
        label: {
          show: true,
          position: 'top',
          formatter: function (p) {
            return p.value
          }
        }
      },
      data: [
        -82.89, 67.54, 162.07, 89.43, 97.02, 67.09, 165.66, 171.78, 81.61,
        78.85, 79.12, 72.3
      ]
    }
  ]
}

const combineOption = {
  legend: [
    {
      show: true,
      icon: 'rect',
      itemWidth: 40,
      itemHeight: 2,
      data: ['中国信用环境指标', '价值板胜率']
    },
    {
      show: true,
      top: '52%',
      icon: 'rect',
      itemWidth: 40,
      itemHeight: 2,
      data: ['价值板-收益率']
    }
  ],
  xAxis: [
    {
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        onZero: false
      },
      data: [
        '2024/3/1',
        '2024/3/2',
        '2024/3/3',
        '2024/3/4',
        '2024/3/5',
        '2024/3/6',
        '2024/3/7',
        '2024/3/8',
        '2024/3/9',
        '2024/3/10'
      ]
    },
    {
      axisTick: {
        show: false
      },
      axisLine: {
        onZero: false
      },
      data: [
        '2024/3/1',
        '2024/3/2',
        '2024/3/3',
        '2024/3/4',
        '2024/3/5',
        '2024/3/6',
        '2024/3/7',
        '2024/3/8',
        '2024/3/9',
        '2024/3/10'
      ],
      gridIndex: 1
    }
  ],
  yAxis: [
    {
      type: 'value',
      // min: 0,
      // max: 100,
      splitNumber: 10,
      splitLine: {
        show: true,
        // interval: 0,
        lineStyle: {
          type: 'dashed'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#777'
        }
      },
      axisLabel: {
        formatter: function (val) {
          return val + '%'
        }
      },
      gridIndex: 0
    },
    {
      type: 'value',
      // min: 0,
      // max: 100,
      splitNumber: 10,
      splitLine: {
        show: true,
        // interval: 0,
        lineStyle: {
          type: 'dashed'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#777'
        }
      },
      axisLabel: {
        formatter: function (val, index) {
          if (index !== 10) {
            return val + '%'
          }
        }
      },
      gridIndex: 1
    }
  ],
  grid: [
    {
      bottom: '50%'
    },
    {
      top: '50%'
    }
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false
    },
    formatter: function (params) {
      var src = params[0].axisValue + '<br>'
      for (var x in params) {
        if (params[x].value !== '-') {
          src +=
            params[x].marker +
            params[x].seriesName +
            '：' +
            params[x].value +
            ' %' +
            '<br>'
        }
      }
      return src
    }
  },
  axisPointer: {
    link: {
      xAxisIndex: 'all'
    }
  },
  series: [
    {
      type: 'line',
      name: '中国信用环境指标',
      smooth: false,
      symbol: 'none',
      markLine: {
        symbol: 'none',
        silent: true,
        // lineStyle: {
        //   type: 'dashed',
        //   color: '#999',
        //   width: 1
        // },
        // label: {
        //   show: true,
        //   position: 'end',
        //   formatter: '',
        //   color: '#f00'
        // },
        data: [
          {
            name: '',
            xAxis: '2024/3/9',
            lineStyle: {
              type: 'dashed',
              color: '#999',
              width: 1
            },
            label: {
              show: true,
              position: 'end',
              formatter: '',
              color: '#f00'
            }
          },
          {
            yAxis: 25,
            label: {
              show: true,
              position: 'end',
              formatter: '历史同位置表现',
              color: 'green'
            },
            lineStyle: {
              type: 'dashed',
              color: 'green',
              width: 1
            }
          },
          {
            yAxis: 70,
            label: {
              show: true,
              position: 'end',
              formatter: '指标阈值警示',
              color: 'red'
            },
            lineStyle: {
              type: 'dashed',
              color: 'red',
              width: 1
            }
          }
          // {
          //     coord: [200, 200],
          // },
        ]
        // animation: false,
      },
      // lineStyle: {
      //   type: 'dotted' // 设置为虚线
      // },
      data: [22, 83, 71, 44, 55, 30, 83, 65, 93, '-']
    },
    {
      type: 'line',
      name: '拥挤度预测值',
      smooth: false,
      symbol: 'none',
      lineStyle: {
        type: 'dashed' // 设置为虚线
      },
      data: ['-', '-', '-', '-', '-', '-', '-', '-', 93, 73]
    },
    {
      type: 'line',
      name: '价值板胜率',
      smooth: false,
      symbol: 'none',
      data: [20, 32, 91, 53, 60, 37, 30, 53, 34, '-'],
      markArea: {
        itemStyle: {
          color: '#e5ffa080' //背景色
        },
        label: {
          color: 'red' //文字颜色
        },
        data: [
          [
            {
              name: '',
              xAxis: '2024/3/3'
            },
            {
              xAxis: '2024/3/4'
            }
          ],
          [
            {
              name: '',
              xAxis: '2024/3/6'
            },
            {
              xAxis: '2024/3/7'
            }
          ]
        ]
      }
    },
    {
      type: 'line',
      name: '价值板-收益率',
      smooth: false,
      symbol: 'none',
      data: [40, 21, 17, 63, -20, 30, 61, 74, 60, '-'],
      xAxisIndex: 1,
      yAxisIndex: 1,
      markArea: {
        itemStyle: {
          color: '#e5ffa080' //背景色
        },
        label: {
          color: 'red' //文字颜色
        },
        data: [
          [
            {
              name: '',
              xAxis: '2024/3/3'
            },
            {
              xAxis: '2024/3/4'
            }
          ],
          [
            {
              name: '',
              xAxis: '2024/3/6'
            },
            {
              xAxis: '2024/3/7'
            }
          ]
        ]
      }
    }
  ]
}

import * as echarts from 'echarts'
var dataArr = 0.15
const gaugeChartsoption = {
  backgroundColor: '#fff',
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },

  series: [
    {
      name: '最外部进度条',
      type: 'gauge',
      radius: '54%',
      startAngle: 210,
      endAngle: -30,
      z: 10,
      splitNumber: 100,
      axisLine: {
        lineStyle: {
          color: [
            [
              0.3,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#61ffb4'
                },

                {
                  offset: 1,
                  color: '#9af48a'
                }
              ])
            ],

            [
              0.7,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#c8fd99'
                },
                {
                  offset: 1,
                  color: '#f9d854'
                }
              ])
            ],
            [
              1,
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#eca649'
                },

                {
                  offset: 1,
                  color: '#ff6b45'
                }
              ])
            ]
          ],
          //color: [
          //  [1, '#33507A']
          // [0.3, '#67e0e3'],
          //[0.7, '#37a2da'],
          // [1, '#fd666d']
          // ],
          width: 20,
          shadowColor: 'rgba(145,207,255,.5)',
          shadowBlur: 6,
          shadowOffsetX: 0
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      itemStyle: {
        show: false
      },
      detail: {
        show: false
      },
      title: {
        //标题
        show: false
      },
      data: [
        {
          name: 'title',
          value: dataArr
        }
      ],
      pointer: {
        show: false
      },
      animationDuration: 4000
    },
    {
      name: '内部进度条',
      type: 'gauge',
      //center: ['50%', '50%'],
      radius: '49%',
      z: 4,
      min: 0, //最小刻度
      max: 1, //最大刻度
      startAngle: 210,
      endAngle: -30,
      splitNumber: 100,
      axisLine: {
        lineStyle: {
          color: [
            [
              0.3,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#ccc'
                },

                {
                  offset: 1,
                  color: '#7bffb9'
                }
              ])
            ],

            [
              0.7,
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#ccc'
                },
                {
                  offset: 1,
                  color: '#f9d854'
                }
              ])
            ],
            [
              1,
              new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: '#ccc'
                },

                {
                  offset: 1,
                  color: '#ff6b45'
                }
              ])
            ]
          ],
          width: 170
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      itemStyle: {
        show: false
      },
      detail: {
        formatter: function (value) {
          if (value !== 0) {
            var num = Math.round(value)
            return 0.15 //parseInt(num).toFixed(0) + ''
          } else {
            return 0
          }
        },
        offsetCenter: [0, 55],
        textStyle: {
          padding: [0, 0, 0, 0],
          fontSize: 30,
          fontWeight: '700',
          color: '#e53443'
        }
      },
      title: {
        //标题
        show: false,
        offsetCenter: [0, 46], // x, y，单位px
        textStyle: {
          color: 'rgba(46, 143, 255, 1)',
          fontSize: 30, //表盘上的标题文字大小
          fontWeight: 700,
          fontFamily: 'PingFangSC'
        }
      },
      data: [
        {
          name: dataArr,
          value: dataArr
        }
      ],
      itemStyle: {
        normal: {
          color: 'red'
        }
      },
      pointer: {
        show: true,
        length: '80%',
        radius: '20%',
        width: 5 //指针粗细
      },
      animationDuration: 4000
    },
    // 内圆
    {
      name: '内圆',
      type: 'pie',
      hoverAnimation: false,
      legendHoverLink: false,
      radius: '5%',
      z: 4,
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 0
        },
        {
          value: 10,

          itemStyle: {
            normal: {
              color: 'red'
            },
            emphasis: {
              color: 'red'
            }
          }
        }
      ]
    },
    // 圆环
    {
      name: '小圆形',
      type: 'pie',
      hoverAnimation: false,
      legendHoverLink: false,
      radius: ['6%', '3%'],
      z: 5,
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 0
        },
        {
          value: 10,

          itemStyle: {
            normal: {
              color: '#595959'
            }
          }
        }
      ]
    },
    {
      name: '外部刻度',
      type: 'gauge',
      //  center: ['20%', '50%'],
      radius: '48%',
      min: 0, //最小刻度
      max: 1, //最大刻度
      z: 10,
      splitNumber: 10, //刻度数量
      startAngle: 210,
      endAngle: -30,
      axisLine: {
        show: false,
        lineStyle: {
          width: 1,
          color: [[1, 'rgba(0,0,0,0)']]
        }
      }, //仪表盘轴线
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,1)',
        distance: 5,
        formatter: function (v) {
          switch (v + '') {
            case '0':
              return '0'
            case '0.1':
              return '0.1'
            case '0.2':
              return '0.2'
            case '0.3':
              return '0.3'
            case '0.4':
              return '0.4'
            case '0.5':
              return '0.5'
            case '0.6':
              return '0.6'
            case '0.7':
              return '0.7'
            case '0.8':
              return '0.8'
            case '0.9':
              return '0.9'
            case '1':
              return '1'
          }
        }
      }, //刻度标签。
      axisTick: {
        show: true,
        splitNumber: 10,

        lineStyle: {
          color: '#42E5FB', //用颜色渐变函数不起作用
          width: 2
        },
        length: 8
      }, //刻度样式
      splitLine: {
        show: true,
        length: 15,
        lineStyle: {
          color: '#42E5FB' //用颜色渐变函数不起作用
        }
      }, //分隔线样式
      detail: {
        show: false
      },
      pointer: {
        show: true
      }
    }
  ]
}

const seriesData11 = [
  {
    name: '相对强度',
    sales: 1,
    services: 6,
    colors: '#95D0F6'
  },
  {
    name: '总资产增长率',
    sales: 4,
    services: 7,
    colors: '#1F1BC0'
  },
  {
    name: '对数市值',
    sales: 4,
    services: 3,
    colors: '#539B0A'
  },
  {
    name: '销售毛利率',
    sales: 6,
    services: 2.4,
    colors: '#4675A2'
  },
  {
    name: '股本收益率',
    sales: 3.3,
    services: -2.5,
    colors: '#E7878E'
  },
  {
    name: '对数标准差',
    sales: 2.1,
    services: 3.7,
    colors: '#F0AC58'
  },
  {
    name: '预期分红市值比',
    sales: 4.1,
    services: -7.4,
    colors: '#B0A2F7'
  }
]
const series11 = seriesData11.map(function (item, index, array) {
  return {
    name: item['name'],
    value: [item['sales'], item['services']],
    itemStyle: {
      color: item['colors']
    }
  }
})

const scatterChartsoption = {
  tooltip: {
    trigger: 'item',
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1
      }
    },
    formatter: function (obj) {
      if (obj.componentType == 'series') {
        return (
          '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
          obj.name +
          '</div>' +
          '<span>' +
          '111' +
          '</span>' +
          ' : ' +
          obj.data.value[0] +
          '<br/>' +
          '<span>' +
          '222' +
          '</span>' +
          ' : ' +
          obj.data.value[1] +
          '%'
        )
      }
    }
  },
  label: {
    show: true,
    position: 'bottom',
    formatter: function (params) {
      return params.name
    },
    emphasis: {
      show: true,
      position: 'bottom'
    }
  },
  xAxis: {
    name: '因子暴露',
    type: 'value',
    scale: true,
    axisLine: {
      lineStyle: {
        color: '#3259B8'
      }
    }
  },
  yAxis: {
    name: '因子收益',
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} %'
    },
    axisLine: {
      lineStyle: {
        color: '#3259B8'
      }
    }
  },
  series: [
    {
      type: 'scatter',
      data: series11,

      symbolSize: 20,
      // markLine: {
      //     label: {
      //         normal: {
      //             formatter: function (params) {
      //                 if (params.dataIndex == 0) {
      //                     return params.value + "元";
      //                 } else if (params.dataIndex == 1) {
      //                     return params.value + "%";
      //                 }
      //                 return params.value;
      //             }
      //         }
      //     },
      //     lineStyle: {
      //         normal: {
      //             color: "#626c91",
      //             type: 'solid',
      //             width: 1,
      //         },
      //         emphasis: {
      //             color: "#d9def7"
      //         }
      //     },
      //     data: [{
      //         xAxis: avg.salesAvgLine,
      //         name: '营业额平均线',
      //         itemStyle: {
      //             normal: {
      //                 color: "#b84a58",
      //             }
      //         }
      //     }, {
      //         yAxis: avg.servicesAvgLine,
      //         name: '服务能力平均线',
      //         itemStyle: {
      //             normal: {
      //                 color: "#b84a58",
      //             }
      //         }
      //     }]
      // },

      markArea: {
        silent: true,
        data: [
          [
            {
              name: '正收益，正暴露',
              itemStyle: {
                color: '#FEF3F4'
              },
              label: {
                show: true,
                position: 'insideTopRight',
                fontStyle: 'normal',
                color: '#ccc',
                fontSize: 20
              },
              coord: [6, 9]
            },
            {
              coord: [0, 0]
            }
          ],
          [
            {
              name: '正收益，负暴露',
              itemStyle: {
                color: '#F9FEF7'
              },
              label: {
                show: true,
                position: 'insideTopLeft',
                fontStyle: 'normal',
                color: '#ccc',
                fontSize: 20
              },
              coord: [0, 9]
            },
            {
              coord: [3.5, 0]
            }
          ],
          [
            {
              name: '负收益，正暴露',
              itemStyle: {
                color: '#F9FEF7'
              },
              label: {
                show: true,
                position: 'insideBottomRight',
                fontStyle: 'normal',
                color: '#ccc',
                fontSize: 20
              },
              coord: [6, -9]
            },
            {
              coord: [3.5, 0]
            }
          ],

          [
            {
              name: '负收益，负暴露',
              itemStyle: {
                color: '#FEF3F4'
              },
              label: {
                show: true,
                position: 'insideBottomLeft',
                fontStyle: 'normal',
                color: '#ccc',
                fontSize: 20
              },
              coord: [-9, -9]
            },
            {
              coord: [3.5, 0]
            }
          ]
        ]
      }
    }
  ]
}

export {
  scatterOptions,
  heatmapOption,
  lineOption,
  combineOption,
  gaugeChartsoption,
  scatterChartsoption
}
