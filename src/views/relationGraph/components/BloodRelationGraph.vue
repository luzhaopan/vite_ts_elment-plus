<template>
  <div class="h-full w-full my-graph" style="height: 100%">
    <RelationGraph
      ref="graphRef"
      :options="graphOptions"
      :on-node-click="onNodeClick"
      :on-line-click="onLineClick"
      :on-canvas-click="onCanvasClick"
      :on-canvas-selection-end="onCanvasSelectionEnd"
    >
      <template #graph-plug>
        <div v-if="graphData.nodes.length" class="show-all mt-10">
          <el-select
            v-model="layout"
            style="width: 110px; margin-right: 10px; padding-left: 0"
            size="small"
            @change="handleLayoutChange"
          >
            <el-option
              v-for="item in layoutOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button class="mr-2" size="small" @click.stop="toggleExpandAll()">
            <span v-if="!isExpandAll">全部展开字段</span>
            <span v-else>全部收起字段</span>
          </el-button>
          <div class="flex items-center justify-center">
            <span>批量节点选择：</span>
            <el-switch
              v-model="isDisableDragCanvas"
              @change="toggleDisableDragCanvas"
            />
            <el-button
              class="ml-2"
              size="small"
              :disabled="!isDisableDragCanvas"
              @click="toggleBatchCropping"
            >
              批量节点裁剪
            </el-button>
          </div>
        </div>
      </template>
      <template #node="{ node }">
        <TableNodes
          :nodeData="node"
          :graphData="graphData"
          @handleClick="confirmCropping"
          @handleExpand="toggleExpand"
        />
      </template>
    </RelationGraph>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted, watch, nextTick } from 'vue'
  import RelationGraph from 'relation-graph/vue3'
  import type {
    RGJsonData,
    RGOptions,
    RGNode,
    RGLine,
    RGUserEvent,
    RelationGraphComponent
  } from 'relation-graph/vue3'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import TableNodes from './TableNodes.vue'

  import {
    graphOptionsSet,
    layoutMode,
    layoutSet,
    nodeColors,
    lineColors
  } from '../config'

  const props = defineProps({
    tableType: {
      type: Boolean,
      default: false
    },
    relationData: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['update:loading'])

  const colorDic = nodeColors
  const lineColorDic = lineColors
  const layoutOptions = layoutMode
  const layoutDic = layoutSet
  const isExpandAll = ref(false)
  const graphInstance = ref()
  const currentLine = ref()
  const isShowRule = ref(false)
  const layout = ref('vtree')
  const elementLines = ref<any>([])
  const graphData = reactive<any>({
    rootId: '',
    nodes: [],
    lines: [],
    elementLines: []
  })
  const graphRef = ref<RelationGraphComponent | null>(null)
  const graphOptions: RGOptions = graphOptionsSet
  // 默认初始值
  const defaultGraph = () => {
    isShowRule.value = false
    graphData.rootId = 'root-empty'
    graphData.nodes = [{ id: 'root-empty', opacity: 0 }]
    graphData.lines = []
    graphData.elementLines = []
    layout.value = 'vtree'
    isExpandAll.value = false
  }

  // 关系图布局切换
  const handleLayoutChange = async () => {
    emit('update:loading', true)
    for (const node of graphInstance.value.getNodes()) {
      node.data.isExpand = false
    }
    onCanvasClick()
    await showGraph()
    emit('update:loading', false)
  }

  // 关系图初始化
  const showGraph = async () => {
    const __graph_json_data: RGJsonData = {
      ...graphData
    }

    if (graphInstance.value) {
      await graphInstance.value.setOptions({
        ...graphOptions,
        ...layoutDic[layout.value]
      })
      await graphInstance.value.setJsonData(__graph_json_data)
      await graphInstance.value.dataUpdated()
      addElementLink()
      await graphInstance.value.moveToCenter()
      await graphInstance.value.zoomToFit()
    }
  }

  // 添加元素之间的关联连线
  const addElementLink = () => {
    if (elementLines.value.length) {
      graphInstance.value.clearElementLines()
      graphInstance.value.addElementLines(elementLines.value)
    }
  }

  const onNodeClick = (nodeObject: RGNode, $event: RGUserEvent) => {
    // console.log('nodeObject', nodeObject);
    isShowRule.value = false
    // nodeObject.selected = true;
    const nodeId = $event.target.getAttribute('id')
    if (!props.tableType) {
      if (!nodeId) {
        handleNodeHighlight(nodeObject)
      } else {
        // 字段级线高亮处理
        handleFieldHighlight(nodeId)
      }
    } else {
      if (nodeId) {
        handleNodeHighlight(nodeObject)
      }
    }
  }

  // 表级线高亮处理
  const handleNodeHighlight = (nodeObject) => {
    const allChildIds = deepGetAllChildIds(nodeObject)
    // const _all_lines = graphInstance.value.getElementLines();

    const htmlElementLines: any = []
    for (const link of graphInstance.value.getLinks()) {
      if (
        allChildIds.includes(link.fromNode.id) &&
        allChildIds.includes(link.toNode.id)
      ) {
        link.relations.forEach((line) => {
          htmlElementLines.push({
            from: line.from,
            to: line.to,
            lineWidth: 3,
            animation: 2,
            text: line.text,
            color: 'rgba(159,23,227,0.65)'
          })
        })
      } else {
        link.relations.forEach((line) => {
          htmlElementLines.push({
            from: line.from,
            to: line.to,
            lineWidth: 1,
            animation: 0,
            text: line.text,
            color: lineColorDic[line.data.lineageType]
          })
        })
      }
    }
    graphInstance.value.clearElementLines()
    graphInstance.value.addElementLines(htmlElementLines)
  }

  // 字段关联节点、线高亮
  const handleFieldHighlight = (nodeId) => {
    const _all_nodes = graphInstance.value.getNodes()

    const htmlElementLines: any = []
    const ids: any = []
    _all_nodes.forEach((node) => {
      node.data.fieldNames.forEach((item) => {
        if (item === nodeId?.split('?')[1]) {
          if (node.data.isExpand) {
            ids.push(node.id + '?' + item)
          } else {
            ids.push(node.id)
          }
        }
      })
    })
    if (ids.length > 0) {
      for (let i = 0; i < ids.length - 1; i++) {
        htmlElementLines.push({
          from: ids[i],
          to: ids[i + 1],
          lineWidth: 3,
          animation: 2,
          color: 'rgba(159,23,227,0.65)',
          showEndArrow: false
        })
      }
    }

    const links = [...elementLines.value, ...htmlElementLines]
    graphInstance.value.clearElementLines()
    graphInstance.value.addElementLines(links)
  }

  const deepGetAllChildIds = (node: RGNode, ids: string[] = []): string[] => {
    if (ids.includes(node.id)) return ids
    ids.push(node.id)
    // if (node.lot?.parent?.id) {
    //   ids.push(node.lot?.parent?.id);
    // }
    for (const cNode of node.targetFrom) {
      deepGetAllChildIds(cNode, ids)
    }
    return ids
  }

  const onLineClick = (lineObject: RGLine) => {
    // console.log('lineObject', lineObject);
    if (lineObject.opacity != 0) {
      lineObject.lineWidth = 3
      lineObject.animation = 2
      lineObject.color = 'red'
      currentLine.value = lineObject.data
      isShowRule.value = true
    }
    // for (const link of graphInstance.value.getLinks()) {
    //   if (link.relations && link.relations.length) {
    //     const htmlElementLines: any = [];
    //     link.relations.forEach((item) => {
    //       const sqlIds: any = [];
    //       item.data.sqlIds.forEach((o) => {
    //         sqlIds.push(o.sqlId);
    //       });
    //       if (lineObject.data && lineObject.data.sqlIds) {
    //         lineObject.data.sqlIds.forEach((i: any) => {
    //           if (sqlIds.includes(i.sqlId)) {
    //             // item.color = 'red';
    //             // item.animation = 2;
    //             // item.opacity = 1;
    //             // item.lineWidth = 3;
    //             htmlElementLines.push({
    //               from: item.from,
    //               to: item.to,
    //               lineWidth: 3,
    //               animation: 2,
    //               text: item.text,
    //               color: 'red',
    //             });
    //           } else {
    //             item.color = '';
    //             item.animation = undefined;
    //             item.opacity = 0.1;
    //             item.lineWidth = 1;
    //           }
    //         });
    //       }
    //     });
    //     graphInstance.clearElementLines();
    //     graphInstance.addElementLines(htmlElementLines);
    //   }
    // }
  }

  // 画布点击触发
  const onCanvasClick = () => {
    isShowRule.value = false
    clearSelection()
    if (graphInstance.value) {
      addElementLink()
    }
  }

  // 展开节点
  const toggleExpand = (node: any) => {
    // console.log('expand', node);
    node.data.isExpand = !node.data.isExpand
    graphInstance.value.clearElementLines()
    graphInstance.value.addElementLines(elementLines.value)
    // await graphInstance.value.moveToCenter();
    // await graphInstance.value.zoomToFit();
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

  // 是否批量裁剪弹窗提示
  const toggleBatchCropping = () => {
    if (!selectedNodes.value.length) {
      ElMessage({
        message: '请先选择节点.',
        type: 'warning'
      })
      return
    }
    ElMessageBox.confirm('确定批量裁剪所有选中节点？', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
      .then(async () => {
        emit('update:loading', true)
        let allNodes = [...graphData.nodes]
        let allLines = [...graphData.lines]
        let allEleLines = []
        selectedNodes.value.forEach((node) => {
          // 在全量数据中过滤掉当前要要删除的节点及其关联的节点和线
          const newNodes = allNodes.filter((n) => n.id != node.id)
          const newLines = allLines.filter(
            (n) => n.from != node.id && n.to != node.id
          )

          const pId = node.lot?.parent?.id
          const child = node.lot.childs

          for (const c of child) {
            newLines.push({
              from: pId,
              to: c.id,
              text: c.text.slice(0, 8),
              opacity: 0,
              fontColor: c.color,
              data: { ...c.data }
            })
          }

          // 处理elementLines数据
          const eleLines: any = []
          newLines.forEach((item) => {
            eleLines.push({
              from: item.from,
              to: item.to,
              text: item.text.slice(0, 8),
              color: item.color,
              data: {
                ...item.data
              }
            })
          })

          allEleLines = eleLines
          allNodes = newNodes
          allLines = newLines
        })

        elementLines.value = allEleLines
        graphData.nodes = allNodes
        graphData.lines = allLines
        graphData.elementLines = allEleLines

        await graphInstance.value.setJsonData({ ...graphData })
        selectedNodes.value = []
        toggleDisableDragCanvas(false)
        emit('update:loading', false)
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  }

  // 裁剪
  const confirmCropping = async (node: any) => {
    emit('update:loading', true)
    // 方案1
    // 在全量数据中过滤掉当前要要删除的节点及其关联的节点和线
    const newNodes = [...graphData.nodes].filter((n) => n.id != node.id)
    const newLines = [...graphData.lines].filter(
      (n) => n.from != node.id && n.to != node.id
    )
    // const delLines = [...graphData.lines].filter((n) => n.from == node.id || n.to == node.id);

    const pId = node.lot?.parent?.id
    const child = node.lot.childs

    // q: 删除节点之后，其父节点和其子节点重新建立起来的连接关系是什么关系：投影？关联？？？
    // 将当前要删除的节点的父节点id指向其所有关联的子节点建立连接
    for (const c of child) {
      newLines.push({
        from: pId,
        to: c.id,
        text: c.text.slice(0, 8),
        opacity: 0,
        fontColor: c.color,
        data: { ...c.data }
      })
    }

    // 处理elementLines数据
    const eleLines: any = []
    newLines.forEach((item) => {
      eleLines.push({
        from: item.from,
        to: item.to,
        text: item.text.slice(0, 8),
        color: item.color,
        data: {
          ...item.data
        }
      })
    })

    elementLines.value = eleLines

    graphData.nodes = newNodes
    graphData.lines = newLines
    graphData.elementLines = eleLines

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
    emit('update:loading', false)
  }

  const isDisableDragCanvas = ref(false)
  const toggleDisableDragCanvas = (val) => {
    isDisableDragCanvas.value = val
    graphInstance.value.options.disableDragCanvas = val
  }

  // 拖动框选多节点
  const onCanvasSelectionEnd = (t) => {
    // console.log('onCanvasSelectionEnd:', t);
    const n = graphInstance.value.getBoundingClientRect()
    const s = graphInstance.value.getCanvasCoordinateByClientCoordinate({
      x: t.x + n.x,
      y: t.y + n.y
    })
    const i = graphInstance.value.getCanvasCoordinateByClientCoordinate({
      x: t.x + t.width + n.x,
      y: t.y + t.height + n.y
    })
    graphInstance.value.getNodes().forEach((node) => {
      if (graphData.rootId !== node.id) {
        let d = !1
        const c = node.x + node.el.offsetWidth / 2
        const r = node.y + node.el.offsetHeight / 2
        c > s.x && r > s.y && c < i.x && r < i.y && (d = !0),
          (node.selected = d)
      }
    })
    updateSelectedNodes()
  }

  let selectedNodes: any = ref([])
  const updateSelectedNodes = () => {
    selectedNodes.value = []
    graphInstance.value.getNodes().forEach((node) => {
      if (graphData.rootId !== node.id) {
        node.selected && selectedNodes.value.push(node)
      }
    })
    // console.log('select', selectedNodes.value);
  }

  const clearSelection = () => {
    graphInstance.value.getNodes().forEach((node) => {
      node.selected = !1
    })
    updateSelectedNodes()
  }

  // 关系图数据处理
  const handleData = (data) => {
    const { rootId, nodes, lines } = data

    if (rootId) {
      const nodesData: any = []
      const linesData: any = []
      nodes.forEach((item) => {
        nodesData.push({
          id: item.id,
          text: item.tabName,
          color: colorDic[item.tabType],
          data: { ...item, isExpand: false }
        })
      })
      lines.forEach((item) => {
        linesData.push({
          from: item.from,
          to: item.to,
          text: item.text.slice(0, 8),
          color: lineColorDic[item.lineageType],
          opacity: 0,
          data: {
            ...item
          }
        })
        elementLines.value.push({
          from: item.from,
          to: item.to,
          text: item.text.slice(0, 8),
          color: lineColorDic[item.lineageType],
          data: {
            ...item
          }
        })
      })

      graphData.rootId = rootId
      graphData.nodes = nodesData
      graphData.lines = linesData
      // graphData.elementLines = elementLines.value;
      graphData.elementLines = []

      showGraph()
    } else {
      defaultGraph()
    }
  }

  watch(
    () => props.relationData,
    (newVal, _) => {
      if (graphInstance.value) {
        elementLines.value = [] // 避免上一次的数据干扰导致元素id获取不到报错
        nextTick(() => {
          handleData(newVal)
        })
      }
    }
  )

  onMounted(() => {
    graphInstance.value = graphRef.value!.getInstance()
  })
</script>

<style lang="scss" scoped>
  .show-all {
    position: absolute;
    z-index: 700;
    right: 20px;
    top: -10px;
    display: flex;
  }

  ::v-deep(.c-rg-line-text) {
    font-size: 18px;
  }

  ::v-deep(.relation-graph) {
    .rel-map {
      background: none !important;
    }
  }

  .my-graph {
    background: url(@/assets/graph-bg.svg) no-repeat;
    background-size: 1000% 1000%;
  }
</style>
