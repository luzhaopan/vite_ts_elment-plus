<template>
  <div>
    <div style="height: calc(100vh - 60px)">
      <RelationGraph
        ref="graphRef"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
        :on-canvas-click="onCanvasClick"
      >
        <template #node="{ node }">
          <div class="item">
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

  const graphRef = ref<RelationGraphComponent | null>(null)
  const graphOptions: RGOptions = {
    debug: false,
    layouts: [
      {
        layoutName: 'tree',
        from: 'left'
      }
    ],
    defaultNodeShape: 1,
    defaultNodeWidth: 200,
    defaultLineShape: 5,
    defaultJunctionPoint: 'lr',
    defaultNodeBorderWidth: 0,
    useAnimationWhenRefresh: true,
    defaultLineColor: '#333'
  }

  const showGraph = async () => {
    const __graph_json_data: RGJsonData = {
      rootId: 'a',
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
    const allChildIds = getAllConnectIds(nodeObject)
    const graphInstance = graphRef.value?.getInstance()
    if (graphInstance) {
      // for (const node of graphInstance.getNodes()) {
      //   if (allChildIds.includes(node.id)) {
      //     node.opacity = 1
      //     node.color = 'rgb(116,2,173)'
      //   } else {
      //     node.opacity = 0.1
      //     node.color = undefined
      //   }
      // }
      for (const link of graphInstance.getLinks()) {
        if (
          allChildIds.includes(link.fromNode.id) &&
          allChildIds.includes(link.toNode.id)
        ) {
          link.relations.forEach((line) => {
            line.color = 'yellow'
          })
        } else {
          link.relations.forEach((line) => {
            line.color = ''
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

  onMounted(() => {
    showGraph()
  })
</script>

<style lang="scss" scoped>
  .item {
    width: 200px;
    cursor: pointer;
    border: 1px solid #333;
    font-size: 24px;
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
    padding: 20px 0;
    text-align: center;
  }
  ::v-deep(.c-rg-line-text) {
    font-size: 24px;
  }
</style>
