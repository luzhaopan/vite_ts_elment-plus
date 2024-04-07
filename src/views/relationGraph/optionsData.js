const firstUpObj = {
  backgroundColor: '#fff',
  borderWidth: 2,
  borderColor: '#D7715F',
  color: '#D7715F',
  align: 'center',
  width: 100,
  padding: 10,
  borderRadius: 5
}
const firstDownObj = {
  backgroundColor: '#fff',
  borderWidth: 2,
  borderColor: '#69BAB0',
  color: '#69BAB0',
  align: 'center',
  width: 100,
  padding: 10,
  borderRadius: 5
}
var data = {
  value: 1000,
  label: {
    formatter: ['{first|A股-胜率}'].join('\n'),
    rich: {
      first: {
        backgroundColor: '#2E7BFE',
        color: '#fff',
        align: 'center',
        width: 100,
        padding: 10,
        borderRadius: 5
      }
    }
  },
  children: [
    {
      value: 230,
      collapsed: true,
      label: {
        formatter: ['{first|中国-信用环境  ⇧}'].join('\n'),
        rich: {
          first: firstUpObj
        }
      },
      children: [
        {
          label: {
            formatter: ['{first|中国-信用环境   ⇧}'].join('\n'),
            rich: {
              first: firstUpObj
            }
          }
        },
        {
          label: {
            formatter: ['{first|中国-物价  ⇩}'].join('\n'),
            rich: {
              first: firstDownObj
            }
          }
        }
      ]
    },
    {
      value: 440,
      collapsed: true,
      label: {
        formatter: ['{first|中国-信用数量  ⇧}'].join('\n'),
        rich: {
          first: firstUpObj
        }
      }
    },
    {
      value: 600,
      label: {
        formatter: ['{first|中国-资金利率  ⇩}'].join('\n'),
        rich: {
          first: firstDownObj
        }
      },
      collapsed: true,
      children: [
        {
          label: {
            formatter: ['{first|中国-信用环境   ⇧}'].join('\n'),
            rich: {
              first: firstUpObj
            }
          }
        },
        {
          label: {
            formatter: ['{first|中国-物价  ⇩}'].join('\n'),
            rich: {
              first: firstDownObj
            }
          }
        }
      ]
    }
  ]
}
const relationoption = {
  series: [
    {
      roma: true,
      type: 'tree',
      data: [data],
      top: '1%',
      left: '17%',
      bottom: '1%',
      right: '20%',
      symbolSize: 15,
      initialTreeDepth: 1,
      edgeShape: 'polyline',
      label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        padding: 5,
        fontSize: 14,
        formatter: '{b|{b}}\n{per|cpu:20%}  {per|mem: 10%}'
      }
    }
  ]
}

export { relationoption }
