<template>
  <div class="container">
    <div class="toolbar">
      <el-input
        v-model="searchParams.searchName"
        placeholder="搜索"
        style="width: 200px"
      />
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
          v-model="commonParams.upstreamNum"
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
          v-model="commonParams.downstreamNum"
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
      <el-checkbox v-model="commonParams.projectionType" label="投影" />
      <el-checkbox v-model="commonParams.associationType" label="过滤" />
      <el-checkbox v-model="commonParams.filterType" label="关联" />
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
              <el-icon
                v-if="node.data.croppingFlag"
                @click.stop="toggleCropping(node)"
              >
                <Scissor />
              </el-icon>
            </div>
            <div v-if="node.data.isExpand" class="table-content">
              <el-scrollbar height="350px">
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
                <div>{{ node.data.tabName }}</div>
              </el-scrollbar>
            </div>
            <div class="btn" @click="toggleExpand(node)">
              <div v-if="!node.data.isExpand">
                展开 <el-icon><ArrowDown /></el-icon>
              </div>
              <div v-else>
                收起 <el-icon><ArrowUp /></el-icon>
              </div>
            </div>
          </div>
          <div class="item" v-else>
            <div class="title">
              <span>{{ node.text }}</span>
              <el-icon
                v-if="node.data.croppingFlag"
                @click.stop="toggleCropping(node)"
                ><Scissor
              /></el-icon>
            </div>
            <div class="text-content">
              {{ node.data.tabName }}
            </div>
          </div>
        </template>
      </RelationGraph>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue'
  import RelationGraph, {
    RGJsonData,
    RGOptions,
    RGNode,
    RGLine,
    RGLink,
    RGUserEvent,
    RelationGraphComponent
  } from 'relation-graph-vue3'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { nodes1, lines1, nodes2, lines2 } from './data.js'

  const searchParams = reactive({
    searchType: 1, // 1:表 2:字段
    searchName: '搜索名称'
  })

  const commonParams = reactive({
    showType: 1, // 1 穿透层 2 原始层
    upstreamNum: 3, // 上游层级数
    downstreamNum: 3, // 下游层级数
    projectionType: true, // 是否选择投影 1是
    associationType: false, // 是否选择关联关系	0否1是
    filterType: false, // 是否选择过滤关系	0否1是
    uuid: '22' // 基准节点表id
  })

  const loading = ref(false)
  const isExpandAll = ref(false)
  const tableType = ref(false)
  const nodeType = ref(false)
  const graphInstance = ref()

  const options: any[] = [
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

  const graphData = reactive<any>({
    rootId: 'c',
    nodes: [],
    lines: []
  })

  const graphRef = ref<RelationGraphComponent | null>(null)
  const graphOptions: RGOptions = {
    debug: false,
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
    // defaultNodeHeight: 100,
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
    searchParams.searchType = val ? 2 : 1
    console.log(val, searchParams.searchType)
    loading.value = true
    // graphInstance.options.defaultShowLineLabel = tableType.value
    // graphInstance.zoomToFit()
    graphData.rootId = 'c'
    graphData.nodes = val ? nodes2 : nodes1
    graphData.lines = val ? lines2 : lines1
    graphOptions.defaultShowLineLabel = tableType.value
    graphInstance.value.setOptions(graphOptions)
    // await graphInstance.value.refresh();
    await showGraph()
    loading.value = false
  }

  // 节点类型切换
  const nodeTypeSwitch = (val) => {
    console.log(val)
    commonParams.showType = val ? 2 : 1
    // graphInstance.dataUpdated();
  }

  const loadData = () => {
    console.log('loadData', commonParams)
  }

  // 关系图初始化
  const showGraph = async () => {
    const __graph_json_data: RGJsonData = {
      ...graphData
    }
    graphInstance.value = graphRef.value!.getInstance()
    if (graphInstance.value) {
      await graphInstance.value.setJsonData(__graph_json_data)
      await graphInstance.value.moveToCenter()
      await graphInstance.value.zoomToFit()
    }
  }

  const onNodeClick = (nodeObject: RGNode, $event: RGUserEvent) => {
    console.log('onNodeClick:', nodeObject)
    // const allChildIds = getAllConnectIds(nodeObject)
    const allChildIds = deepGetAllChildIds(nodeObject)

    if (graphInstance.value) {
      for (const node of graphInstance.value.getNodes()) {
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
      for (const link of graphInstance.value.getLinks()) {
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
  // const getAllConnectIds = (node: RGNode, ids: string[] = []): string[] => {
  //   ids.push(node.id);
  //   ids.push(node.lot?.parent?.id);
  //   for (const cNode of node.lot.childs) {
  //     ids.push(cNode.id);
  //   }
  //   return ids;
  // };

  const deepGetAllChildIds = (node: RGNode, ids: string[] = []): string[] => {
    if (ids.includes(node.id)) return ids
    ids.push(node.id)
    if (node.lot?.parent?.id) {
      ids.push(node.lot?.parent?.id)
    }
    for (const cNode of node.lot.childs) {
      deepGetAllChildIds(cNode, ids)
    }
    return ids
  }

  const onCanvasClick = ($event?: RGUserEvent) => {
    if (graphInstance.value) {
      for (const node of graphInstance.value.getNodes()) {
        node.opacity = 1
        // node.color = undefined
      }
      for (const link of graphInstance.value.getLinks()) {
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

  // 展开所有节点
  const toggleExpandAll = () => {
    isExpandAll.value = !isExpandAll.value
    if (graphInstance.value) {
      for (const node of graphInstance.value.getNodes()) {
        node.data.isExpand = isExpandAll.value
      }
    }
    onCanvasClick()
  }

  // 展开节点
  const toggleExpand = (node) => {
    node.data.isExpand = !node.data.isExpand
    // const graphInstance = graphRef.value!.getInstance()
    // nextTick(() => {
    // graphInstance.doLayout()
    // graphInstance.clearChecked()
    // onCanvasClick()
    // });
  }

  const toggleCropping = (node) => {
    ElMessageBox.confirm('确定裁剪该节点？', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
      .then(() => {
        confirmCropping(node)
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  }

  // 裁剪
  const confirmCropping = async (node) => {
    console.log('裁剪', node)
    loading.value = true
    // 方案1
    const newNodes = [...graphData.nodes].filter((n) => n.id != node.id)
    const newLines = [...graphData.lines].filter(
      (n) => n.from != node.id && n.to != node.id
    )
    const pId = node.lot?.parent?.id
    const child = node.targetTo
    for (const c of child) {
      newLines.push({
        from: pId,
        to: c.id,
        text: '',
        fontColor: '#333',
        data: {}
      })
    }
    graphData.nodes = newNodes
    graphData.lines = newLines
    await graphInstance.value.setJsonData({ ...graphData })

    // // 方案2
    // let newRelations: any = [];
    // const pId = node.lot?.parent?.id;
    // const child = node.targetTo;
    // for (const c of child) {
    //   newRelations.push({
    //     from: pId,
    //     to: c.id,
    //     text: '',
    //     fontColor: '#333',
    //     data: {},
    //   });
    // }
    // node.isHide = true;
    // await graphInstance.value.appendJsonData({ ...graphData, lines: newRelations });
    loading.value = false
  }

  onMounted(() => {
    loading.value = true
    setTimeout(() => {
      graphData.rootId = 'c'
      graphData.nodes = nodes1
      graphData.lines = lines1
      showGraph()
      loading.value = false
    }, 500)
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
    display: flex;
    flex-direction: column;
  }
  .title {
    color: #333;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-right: 10px;
    }
  }
  .table-content {
    border-bottom: #efefef solid 1px;
    background-color: #fff;
    color: #333;
    padding: 10px 0;
    text-align: center;
    height: 320px;
    box-shadow: 2px 4px 10px #909090;
    flex: 1;
    div {
      margin: 8px 0;
    }
  }
  .btn {
    background: #f1f1f1;
    font-size: 20px;
    padding: 10px 0 5px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .text-content {
    border-bottom: #efefef solid 1px;
    background-color: #fff;
    color: #333;
    padding: 20px 0;
    text-align: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  ::v-deep(.c-rg-line-text) {
    font-size: 20px;
  }
</style>
