const graphOptionsSet = {
  debug: false,
  defaultNodeShape: 1, // 默认的节点形状，0:圆形；1:矩形
  defaultNodeWidth: 320,
  defaultNodeBorderWidth: 0, // 默认的节点边框粗细（像素）
  defaultNodeBorderColor: '#333', // 默认的节点边框颜色
  defaultNodeFontColor: '#333', // 默认的节点文字颜色
  // disableNodeClickEffect: true, // 是否禁用节点默认的点击效果（选中、闪烁）
  // defaultLineShape: 6, // （1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）
  defaultLineColor: '#333', // 默认的线条颜色
  defaultLineMarker: {
    markerWidth: 30,
    markerHeight: 30,
    refX: 3,
    refY: 3,
    data: 'M 0 0, V 6, L 4 3, Z',
  }, // 线条箭头样式
  // disableLineClickEffect: true, // 是否禁用线条默认的点击效果（选中、闪烁）
  defaultShowLineLabel: true, // 是否默认显示线条上的文字
  checkedLineColor: 'rgb(116,2,173)', // 当线条被选中时的颜色
  lineUseTextPath: false, // 连线文字沿着连线路径走
  useAnimationWhenRefresh: true, // 当图谱刷新后（调用setJsonData或refresh方法都会触发），使用动画让图居中、缩放
  allowAutoLayoutIfSupport: false, // 是否在工具栏中显示【自动布局】按钮
  // placeSingleNode: false // 自动为孤点分配位置（当孤点设置了fixed=true时则不处理）
  // placeOtherGroup: true // 支持展示多个关系网，默认只展示主关系网
  // hideNodeContentByZoom: true, // 是否根据缩放比例隐藏节点内容
  // moveToCenterWhenRefresh: true // 当图谱刷新后（调用setJsonData或refresh方法都会触发），让图谱根据节点居中
  // defaultLineTextOffset_x: -8,
  // defaultLineTextOffset_y: -1,
  disableLineClickEffect: true,
};

const layoutMode = [
  {
    label: '横向布局',
    value: 'vtree',
  },
  {
    label: '纵向布局',
    value: 'htree',
  },
  {
    label: '中心布局',
    value: 'center',
  },
  // {
  //   label: '自动布局',
  //   value: 'force',
  // },
];

const layoutSet = {
  vtree: {
    layouts: [
      {
        label: 'Center',
        layoutName: 'tree',
        from: 'left',
        min_per_height: 140,
        min_per_width: 500,
        // max_per_width: 300,
        // centerOffset_x: 0,
        // centerOffset_y: 0,
      },
    ],
    defaultJunctionPoint: 'lr',
    defaultLineShape: 6,
    // defaultLineTextOffset_x: -8,
    // defaultLineTextOffset_y: -1,
    disableDragNode: true, // 是否禁用图谱中节点的拖动
  },
  htree: {
    layouts: [
      {
        label: 'Center',
        layoutName: 'tree',
        min_per_height: 500,
        min_per_width: 400,
        max_per_width: 500,
        centerOffset_x: 0,
        centerOffset_y: 0,
      },
    ],
    defaultJunctionPoint: 'tb',
    defaultLineShape: 6,
    disableDragNode: true, // 是否禁用图谱中节点的拖动
  },
  center: {
    layouts: [
      {
        label: 'Center',
        layoutName: 'center',
        distance_coefficient: 3,
      },
    ],
    defaultJunctionPoint: 'border',
    placeOtherGroup: true,
    // hideNodeContentByZoom: true,
    defaultLineShape: 1,
  },
  force: {
    layout: {
      layoutName: 'force',
    },
    defaultJunctionPoint: 'border',
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    // defaultLineShape: 1,
    // defaultNodeShape: 0,
    force_node_repulsion: 3,
    force_line_elastic: 0.01,
  },
};

const nodeColors = ['#409eff', '#03a1a1', '#ff8c00', '#f1f15e'];
const lineColors = ['#727272', '#00ced1', 'rgba(30, 144, 255, 1)'];

export { graphOptionsSet, layoutMode, layoutSet, nodeColors, lineColors };
