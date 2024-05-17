<template>
  <div class="container">
    <div class="toolbar">
      <el-input v-model="searchText" placeholder="搜索" style="width: 200px" />
      <div class="toolbar-switch">
        <el-switch
          v-model="tableType"
          active-color="#409eff"
          inactive-color="#dcdfe6"
          @change="tableTypeSwitch"
        >
        </el-switch>
        <span v-if="!tableType">表级</span>
        <span v-else>字段</span>
      </div>
      <div class="toolbar-switch">
        <el-switch
          v-model="nodeType"
          active-color="#409eff"
          inactive-color="#dcdfe6"
          @change="nodeTypeSwitch"
        >
        </el-switch>
        <span v-if="!nodeType">穿透</span>
        <span v-else>原始</span>
      </div>
      <div>
        <span>上游层级：</span>
        <el-select
          style="width: 80px"
          v-model="selectedUplevel"
          placeholder="请选择"
        >
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <span>下游层级：</span>
        <el-select
          style="width: 80px"
          v-model="selectedDownlevel"
          placeholder="请选择"
        >
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </div>
      <el-radio-group v-model="selectedRadio" class="ml-4">
        <el-radio label="json">投影</el-radio>
        <el-radio label="form">过滤</el-radio>
        <el-radio label="file">关联</el-radio>
      </el-radio-group>
      <el-button type="primary" @click="loadData">加载血缘</el-button>
    </div>
    <el-divider border-color="#dcdcdc" border-style="dashed" />
    <div style="height: calc(100vh - 260px)" v-loading="loading">
      <RelationGraph
        ref="graphRef"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
        :on-canvas-click="onCanvasClick"
      >
        <template #graph-plug>
          <div style="position: absolute; z-index: 700; right: 20px; top: 0">
            <el-button @click.stop="toggleExpandAll()">
              <span v-if="!isExpandAll">全部展开字段</span>
              <span v-else>返回</span>
            </el-button>
          </div>
        </template>
        <template #node="{ node }">
          <div class="item" v-if="!tableType">
            <div class="title">
              <span>{{ node.text }}</span>
            </div>
            <div
              v-if="isExpandAll"
              :class="{
                'node-content': true,
                'exp-hight': node.data.isExpand,
                'hide-hight': !node.data.isExpand
              }"
            >
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div>{{ node.data.name }}</div>
              <div class="btn" @click.stop="toggleExpand(node)">
                <span v-if="!node.data.isExpand">展开</span>
                <span v-else>收起</span>
              </div>
            </div>
          </div>
          <div class="item" v-else>
            <div class="title">{{ node.text }}</div>
            <div class="node-content">
              {{ node.data.name }}
            </div>
          </div>
        </template>
      </RelationGraph>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import RelationGraph, {
    RGJsonData,
    RGOptions,
    RGNode,
    RGLine,
    RGLink,
    RGUserEvent,
    RelationGraphComponent
  } from 'relation-graph-vue3'
  import { nodes, lines } from './data.js'

  const loading = ref(false)
  const isExpandAll = ref(false)
  const searchText = ref('')
  const tableType = ref(false)
  const nodeType = ref(false)
  const selectedUplevel = ref(3)
  const selectedDownlevel = ref(3)
  const selectedRadio = ref('json')

  const options = [
    {
      label: 1,
      value: 1
    },
    {
      label: 2,
      value: 2
    },
    {
      label: 3,
      value: 3
    },
    {
      label: 4,
      value: 4
    },
    {
      label: 5,
      value: 5
    }
  ]

  const graphRef = ref<RelationGraphComponent | null>(null)
  const graphOptions: RGOptions = {
    layouts: [
      {
        label: 'Center',
        layoutName: 'tree',
        from: 'left',
        min_per_height: 500,
        min_per_width: 500,
        centerOffset_x: 0,
        centerOffset_y: 0
      }
    ],
    defaultJunctionPoint: 'lr',
    disableDragNode: true, // 是否禁用图谱中节点的拖动
    defaultNodeShape: 1, // 默认的节点形状，0:圆形；1:矩形
    defaultNodeWidth: 300,
    defaultNodeBorderWidth: 0, // 默认的节点边框粗细（像素）
    defaultNodeBorderColor: '#333', // 默认的节点边框颜色
    defaultNodeFontColor: '#333', // 默认的节点文字颜色
    // disableNodeClickEffect: true, // 是否禁用节点默认的点击效果（选中、闪烁）
    defaultLineShape: 6, // （1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）
    defaultLineColor: '#333', // 默认的线条颜色
    defaultLineMarker: {
      markerWidth: 30,
      markerHeight: 30,
      refX: 3,
      refY: 3,
      data: 'M 0 0, V 6, L 4 3, Z'
    }, // 线条箭头样式
    // disableLineClickEffect: true, // 是否禁用线条默认的点击效果（选中、闪烁）
    defaultShowLineLabel: false, // 是否默认显示线条上的文字
    checkedLineColor: 'rgb(116,2,173)', // 当线条被选中时的颜色
    lineUseTextPath: false, // 连线文字沿着连线路径走
    useAnimationWhenRefresh: true, // 当图谱刷新后（调用setJsonData或refresh方法都会触发），使用动画让图居中、缩放
    allowShowMiniToolBar: true, // 是否显示工具栏
    // allowAutoLayoutIfSupport: true // 是否在工具栏中显示【自动布局】按钮
    // placeSingleNode: false // 自动为孤点分配位置（当孤点设置了fixed=true时则不处理）
    // placeOtherGroup: true // 支持展示多个关系网，默认只展示主关系网
    // hideNodeContentByZoom: true, // 是否根据缩放比例隐藏节点内容
    // moveToCenterWhenRefresh: true // 当图谱刷新后（调用setJsonData或refresh方法都会触发），让图谱根据节点居中
    defaultLineTextOffset_x: -8,
    defaultLineTextOffset_y: -1
  }

  // 表类型切换
  const tableTypeSwitch = async (val) => {
    console.log(val)
    loading.value = true
    // const graphInstance = graphRef.value?.getInstance()
    // graphInstance.options.defaultShowLineLabel = tableType.value

    // await graphInstance.refresh()
    // graphInstance.zoomToFit()
    graphOptions.defaultShowLineLabel = tableType.value
    const graphInstance = graphRef.value!.getInstance()
    graphInstance.setOptions(graphOptions)
    await graphInstance.refresh()
    loading.value = false
    // await showGraph()
    // nextTick(() => {
    //   const graphInstance = graphRef.value!.getInstance()
    //   graphInstance.setOptions(graphOptions)
    //   graphInstance.refresh()
    //   // showGraph()
    //   // graphInstance.focusRootNode()
    //   // graphInstance.setZoom(54)
    // })
  }

  // 节点类型切换
  const nodeTypeSwitch = (val) => {
    console.log(val)
    // graphInstance.dataUpdated();
  }

  const loadData = () => {
    console.log('loadData')
  }

  const showGraph = async () => {
    const __graph_json_data: RGJsonData = {
      rootId: 'c',
      nodes: nodes,
      lines: lines
    }
    const graphInstance = graphRef.value?.getInstance()
    if (graphInstance) {
      await graphInstance.setJsonData(__graph_json_data)
      await graphInstance.moveToCenter()
      await graphInstance.zoomToFit()
    }
  }

  const onNodeClick = (nodeObject: RGNode, $event: RGUserEvent) => {
    console.log('onNodeClick:', nodeObject)
    // const allChildIds = getAllConnectIds(nodeObject)
    const allChildIds = deepGetAllChildIds(nodeObject)

    const graphInstance = graphRef.value?.getInstance()
    if (graphInstance) {
      for (const node of graphInstance.getNodes()) {
        if (allChildIds.includes(node.id)) {
          node.opacity = 1
          // node.color = 'rgb(116,2,173)'
          // node.borderWidth = 3
          // node.borderColor = 'yellow'
        } else {
          node.opacity = 0.1
          // node.color = nodeObject.color
        }
      }
      for (const link of graphInstance.getLinks()) {
        if (
          allChildIds.includes(link.fromNode.id) &&
          allChildIds.includes(link.toNode.id)
        ) {
          link.relations.forEach((line) => {
            line.color = 'rgb(116,2,173)'
            line.animation = 2
            line.opacity = 1
            line.lineWidth = 3
          })
        } else {
          link.relations.forEach((line) => {
            line.color = ''
            line.animation = undefined
            line.opacity = 0.1
            line.lineWidth = 1
          })
        }
      }
    }
  }

  // 过去关联节点id
  const getAllConnectIds = (node: RGNode, ids: string[] = []): string[] => {
    ids.push(node.id)
    ids.push(node.lot?.parent?.id)
    for (const cNode of node.lot.childs) {
      ids.push(cNode.id)
    }
    return ids
  }

  const deepGetAllChildIds = (node: RGNode, ids: string[] = []): string[] => {
    if (ids.includes(node.id)) return ids
    ids.push(node.id)
    ids.push(node.lot?.parent?.id)
    for (const cNode of node.lot.childs) {
      deepGetAllChildIds(cNode, ids)
    }
    return ids
  }

  const onCanvasClick = ($event: RGUserEvent) => {
    console.log('onCanvasClick:')
    const graphInstance = graphRef.value?.getInstance()
    if (graphInstance) {
      for (const node of graphInstance.getNodes()) {
        node.opacity = 1
        // node.color = undefined
      }
      for (const link of graphInstance.getLinks()) {
        link.relations.forEach((line) => {
          line.color = undefined
          line.animation = undefined
          line.opacity = 1
          line.lineWidth = 1
        })
      }
    }
  }

  const onLineClick = (
    lineObject: RGLine,
    linkObject: RGLink,
    $event: RGUserEvent
  ) => {
    console.log('onLineClick:', lineObject)
  }

  const toggleExpandAll = () => {
    isExpandAll.value = !isExpandAll.value
    // const graphInstance = graphRef.value?.getInstance()
    // if (graphInstance) {
    //   for (const node of graphInstance.getNodes()) {
    //     node.data.isExpand = !node.data.isExpand
    //   }
    // }
  }

  const toggleExpand = (node) => {
    node.data.isExpand = !node.data.isExpand
    // const graphInstance = graphRef.value!.getInstance()
    nextTick(() => {
      // graphInstance.doLayout()
      // graphInstance.clearChecked()
      // onCanvasClick(node)
    })
  }

  onMounted(() => {
    showGraph()
  })
</script>

<style lang="scss" scoped>
  .container {
    background-color: #fff;
  }
  .toolbar {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .toolbar-switch {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 30px;
      span {
        margin-left: 10px;
      }
    }
  }
  .item {
    cursor: pointer;
    border: 1px solid #333;
    border-radius: 6px;
    font-size: 24px;
    position: relative;
  }
  .title {
    color: #333;
    text-align: center;
    padding: 10px 0;
  }
  .node-content {
    border-bottom: #efefef solid 1px;
    background-color: #fff;
    color: #333;
    padding: 10px 0 40px;
    text-align: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    height: 320px;
    box-shadow: 2px 4px 10px #909090;
    div {
      margin: 8px 0;
    }
    .btn {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      background-color: #ececec;
      font-size: 20px;
    }
  }
  .hide-hight {
    overflow: hidden;
  }
  .exp-hight {
    overflow: auto;
  }
  ::v-deep(.c-rg-line-text) {
    font-size: 20px;
  }
</style>
