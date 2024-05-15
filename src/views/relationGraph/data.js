const nodes = [
  {
    id: 'a',
    text: 'dim_trade_info1',
    color: '#008080',
    data: {
      name: 'num1'
    }
  },
  {
    id: 'b',
    text: 'dim_trade_info2',
    color: '#008080',
    data: {
      name: 'num2'
    }
  },
  {
    id: 'c',
    text: 'dim_trade_info1',
    color: '#ff8c00',
    data: {
      name: 'sales_num'
    }
  },
  {
    id: 'd',
    text: 'dim_trade_info1',
    color: '#ffff80',
    data: {
      name: 'amount'
    }
  },
  {
    id: 'e',
    text: 'dim_trade_info2',
    color: '#ffff80',
    data: {
      name: 'amount'
    }
  },
  {
    id: 'f',
    text: 'dim_trade_info3',
    color: '#ffff80',
    data: {
      name: 'amount'
    }
  },
  {
    id: 'g',
    text: 'dim_trade_info4',
    color: '#ffff80',
    data: {
      name: 'amount'
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
