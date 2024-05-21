const nodes1 = [
  {
    id: 'a',
    text: 'dim_trade_info1',
    color: '#008080',
    data: {
      uuid: '1120023', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'num1', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'b',
    text: 'dim_trade_info2',
    color: '#008080',
    data: {
      uuid: '119172', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'num2', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'c',
    text: 'dim_trade_info1',
    color: '#ff8c00',
    data: {
      uuid: '112312', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'sales_num', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'd',
    text: 'dim_trade_info1',
    color: '#ffff80',
    data: {
      uuid: '11y322', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 1 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'e',
    text: 'dim_trade_info2',
    color: '#ffff80',
    data: {
      uuid: '1134322', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'amount', // 表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 1 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'f',
    text: 'dim_trade_info3',
    color: '#ffff80',
    data: {
      uuid: '11233', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'g',
    text: 'dim_trade_info4',
    color: '#ffff80',
    data: {
      uuid: '112', // 表id,
      fieldNames: [], //[包含字段的名称],
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  }
]
const lines1 = [
  {
    from: 'a',
    to: 'c',
    text: 'num1+num2',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 1 // [血缘sql id]
    }
  },
  {
    from: 'b',
    to: 'c',
    text: 'num1+num2',
    fontColor: '#333',
    data: {
      lieageType: 1, // 0投影, 1 关联, 2 过滤
      sqlId: 1 // [血缘sql id]
    }
  },
  {
    from: 'c',
    to: 'd',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 2, // 0投影, 1 关联, 2 过滤
      sqlId: 1 // [血缘sql id]
    }
  },
  {
    from: 'c',
    to: 'e',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 0 // [血缘sql id]
    }
  },
  {
    from: 'd',
    to: 'f',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 0 // [血缘sql id]
    }
  },
  {
    from: 'e',
    to: 'g',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 3 // [血缘sql id]
    }
  }
]

const nodes2 = [
  {
    id: 'a',
    text: 'dim_trade_info1',
    color: '#008080',
    data: {
      isExpand: false,
      tabName: 'num1', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'b',
    text: 'dim_trade_info2',
    color: '#008080',
    data: {
      isExpand: false,
      tabName: 'num2', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'c',
    text: 'dim_trade_info1',
    color: '#ff8c00',
    data: {
      isExpand: false,
      tabName: 'sales_num', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'd',
    text: 'dim_trade_info1',
    color: '#ffff80',
    data: {
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 1 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'e',
    text: 'dim_trade_info2',
    color: '#ffff80',
    data: {
      isExpand: false,
      tabName: 'amount', // 表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 1 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'f',
    text: 'dim_trade_info3',
    color: '#ffff80',
    data: {
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'g',
    text: 'dim_trade_info4',
    color: '#ffff80',
    data: {
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  },
  {
    id: 'h',
    text: 'dim_trade_info0',
    color: '#ffff80',
    data: {
      isExpand: false,
      tabName: 'amount', //  表名
      schema: 'scheme', // 所属scheme
      tabType: 0, //表类型 0： 物理表， 1： 临时表， 2： 虚拟表， 3： 文件表
      dbName: '', // 数据库名称
      ownSystem: '', // 所属系统
      fieldName: '', // 字段名称
      nodeType: 0, // 0基准节点 1 下游 - 1 上游节点
      croppingFlag: 0 // 0 不可裁剪 1 可裁剪
    }
  }
]
const lines2 = [
  {
    from: 'a',
    to: 'c',
    text: 'num1+num2',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 1 // [血缘sql id]
    }
  },
  {
    from: 'b',
    to: 'c',
    text: 'num1+num2',
    fontColor: '#333',
    data: {
      lieageType: 1, // 0投影, 1 关联, 2 过滤
      sqlId: 1 // [血缘sql id]
    }
  },
  {
    from: 'c',
    to: 'd',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 2, // 0投影, 1 关联, 2 过滤
      sqlId: 1 // [血缘sql id]
    }
  },
  {
    from: 'c',
    to: 'e',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 0 // [血缘sql id]
    }
  },
  {
    from: 'd',
    to: 'f',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 0 // [血缘sql id]
    }
  },
  {
    from: 'e',
    to: 'g',
    text: 'amount',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 3 // [血缘sql id]
    }
  },
  {
    from: 'e',
    to: 'f',
    text: 'amount3',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 3 // [血缘sql id]
    }
  },
  {
    from: 'c',
    to: 'h',
    text: 'amount3',
    fontColor: '#333',
    data: {
      lieageType: 0, // 0投影, 1 关联, 2 过滤
      sqlId: 3 // [血缘sql id]
    }
  }
]

export { nodes1, lines1, nodes2, lines2 }
