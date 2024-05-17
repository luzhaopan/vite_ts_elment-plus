const nodes = [
  {
    id: 'a',
    text: 'dim_trade_info1',
    color: '#008080',
    data: {
      isExpand: false,
      name: 'num1',
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'b',
    text: 'dim_trade_info2',
    color: '#008080',
    data: {
      isExpand: false,
      name: 'num2',
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'c',
    text: 'dim_trade_info1',
    color: '#ff8c00',
    data: {
      isExpand: false,
      name: 'sales_num',
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'd',
    text: 'dim_trade_info1',
    color: '#ffff80',
    data: {
      isExpand: false,
      name: 'amount',
      croppingFlag: 1 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'e',
    text: 'dim_trade_info2',
    color: '#ffff80',
    data: {
      isExpand: false,
      name: 'amount',
      croppingFlag: 1 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'f',
    text: 'dim_trade_info3',
    color: '#ffff80',
    data: {
      isExpand: false,
      name: 'amount',
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'g',
    text: 'dim_trade_info4',
    color: '#ffff80',
    data: {
      isExpand: false,
      name: 'amount',
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  }
]
const lines = [
  {
    from: 'a',
    to: 'c',
    text: 'num1+num2',
    fontColor: '#333'
  },
  {
    from: 'b',
    to: 'c',
    text: 'num1+num2',
    fontColor: '#333'
  },
  {
    from: 'c',
    to: 'd',
    text: 'amount',
    fontColor: '#333'
  },
  {
    from: 'c',
    to: 'e',
    text: 'amount',
    fontColor: '#333'
  },
  {
    from: 'd',
    to: 'f',
    text: 'amount',
    fontColor: '#333'
  },
  {
    from: 'e',
    to: 'g',
    text: 'amount',
    fontColor: '#333'
  }
]

export { nodes, lines }
