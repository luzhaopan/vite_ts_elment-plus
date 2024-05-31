<template>
  <div>
    <div style="height: calc(100vh - 60px)">
      <RelationGraph
        ref="graphRef"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      >
        <template #canvas-plug>
          <!--- You can put some elements that are not allowed to be dragged here --->
        </template>
        <template #node="{ node }">
          <div
            v-if="node.id === 'a'"
            style="width: 100px; background-color: #bbbbbb"
          >
            <!---------------- if node a ---------------->
            <div class="c-table-title">{{ node.text }}</div>
            <div class="list">
              <div class="item" id="a-r1-c1">a-r2-c2</div>
              <div class="item" id="a-r3-c2">a-r3-c2</div>
              <div class="item" id="a-r4-c21">a-r4-c21</div>
              <div class="item" id="a-r4-c22">a-r4-c22</div>
              <div class="item" id="a-r4-c23">a-r4-c23</div>
              <div class="item" id="a-r2-c2">a-r2-c2</div>
              <div class="item" id="a-r4-c24">a-r4-c24</div>
            </div>
          </div>
          <div
            v-else-if="node.id === 'b'"
            style="background-color: #bbbbbb; width: 400px"
          >
            <!---------------- if node b ---------------->
            <div class="c-table-title">{{ node.text }}</div>
            <table class="c-data-table">
              <tr>
                <th><div id="b-r1-c1">b-r1-c1</div></th>
                <th><div id="b-r1-c2">b-r1-c2</div></th>
                <th><div id="b-r1-c3">b-r1-c3</div></th>
              </tr>
              <tr>
                <td><div id="b-r2-c1">b-r2-c1</div></td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td><div id="b-r3-c1">b-r3-c1</div></td>
                <td><div id="b-r3-c2">b-r3-c2</div></td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>xxxx</td>
                <td>xxxx</td>
                <td><div id="b-r4-c3">b-r4-c3</div></td>
              </tr>
            </table>
          </div>
          <div
            v-else-if="node.id === 'c'"
            style="background-color: #bbbbbb; width: 400px"
          >
            <!---------------- if node c ---------------->
            <div class="c-table-title">{{ node.text }}</div>
            <table class="c-data-table">
              <tr>
                <th><div id="c-r1-c1">c-r1-c1</div></th>
                <th><div id="c-r1-c2">c-r1-c2</div></th>
              </tr>
              <tr>
                <th><div id="c-r2-c1">c-r2-c1</div></th>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td><div id="c-r4-c1">c-r4-c1</div></td>
                <td><div id="c-r4-c2">c-r4-c2</div></td>
              </tr>
            </table>
          </div>
          <div
            v-else-if="node.id === 'd'"
            style="background-color: #bbbbbb; width: 300px"
          >
            <!---------------- if node d ---------------->
            <div class="c-table-title">{{ node.text }}</div>
            <table class="c-data-table">
              <tr>
                <th><div id="d-r1-c1">d-r1-c1</div></th>
                <th>Column 2</th>
              </tr>
              <tr>
                <td><div id="d-r2-c1">d-r2-c1</div></td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>xxxx</td>
                <td><div id="d-r4-c2">d-r4-c2</div></td>
              </tr>
            </table>
          </div>
          <div v-else class="rg-center-items" style="height: 100%">
            <!---------------- if other nodes ---------------->
            <div style="width: 100%">{{ node.text }}</div>
          </div>
        </template>
      </RelationGraph>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import RelationGraph from 'relation-graph-vue3'
  import type {
    RGOptions,
    RGJsonData,
    RGNode,
    RGLine,
    RGLink,
    RGUserEvent,
    RelationGraphComponent
  } from 'relation-graph-vue3'
  import { onMounted, ref } from 'vue'
  const graphRef = ref<RelationGraphComponent>()
  const graphOptions = {
    debug: false,
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    allowShowDownloadButton: true,
    defaultJunctionPoint: 'border',
    placeOtherNodes: false,
    placeSingleNode: false,
    graphOffset_x: -200,
    graphOffset_y: 100,
    defaultLineMarker: {
      markerWidth: 20,
      markerHeight: 20,
      refX: 3,
      refY: 3,
      data: 'M 0 0, V 6, L 4 3, Z'
    },
    layout: {
      layoutName: 'fixed'
    }
    // You can refer to the parameters in "Graph" for setting here
  }
  const showGraph = async () => {
    const __graph_json_data: RGJsonData = {
      rootId: 'a',
      nodes: [
        { id: 'a', text: 'A区内配矿', nodeShape: 1, x: -500, y: -200 },
        { id: 'b', text: 'B区内洗选贸易企业', nodeShape: 1, x: 0, y: -400 },
        { id: 'c', text: 'C区内电场焦化企业', nodeShape: 1, x: 500, y: -200 },
        { id: 'd', text: 'D区外企业', nodeShape: 1, x: 0, y: 0 }
      ],
      lines: [],
      elementLines: [
        {
          from: 'a-r1-c1',
          to: 'b-r1-c1',
          text: '',
          lineShape: 6,
          color: 'rgba(29,169,245,0.76)',
          lineWidth: 3
        },
        {
          from: 'a-r2-c2',
          to: 'b-r2-c1',
          text: '',
          lineShape: 6,
          color: 'rgba(29,169,245,0.76)',
          lineWidth: 3
        },
        {
          from: 'a-r3-c2',
          to: 'b-r3-c1',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'a-r3-c2',
          to: 'd-r2-c1',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'a-r3-c2',
          to: 'c-r4-c1',
          text: '',
          lineShape: 5,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'b-r1-c3',
          to: 'c-r1-c1',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'd-r4-c2',
          to: 'c-r4-c2',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'd-r2-c1',
          to: 'c-r4-c2',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'd-r2-c1',
          to: 'b-r4-c3',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        },
        {
          from: 'b-r3-c2',
          to: 'c-r2-c1',
          text: '',
          lineShape: 6,
          color: 'rgba(159,23,227,0.65)',
          lineWidth: 3
        }
        // { from: 'el-1', to: 'el-2', text: 'Line Text', lineShape: 6, color: 'red', lineWidth: 4, showEndArrow: false },
        // { from: 'el-1', to: 'd-1', text: 'Line Text', lineShape: 6, color: 'red', lineWidth: 4, showEndArrow: false },
      ]
    }
    const graphInstance = graphRef.value!.getInstance()
    await graphInstance.setJsonData(__graph_json_data)
    await graphInstance.moveToCenter()
    await graphInstance.zoomToFit()
  }
  const onNodeClick = (nodeObject: RGNode, $event: RGUserEvent) => {
    console.log('onNodeClick:', nodeObject)
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
  ::v-deep(.relation-graph) {
    .rel-node-shape-1 {
      overflow: hidden;
    }
  }
  .c-data-table {
    background-color: #ffffff;
    border-collapse: collapse;
    width: 100%;
  }
  .c-table-title {
    color: #333333;
  }
  .c-data-table td,
  .c-data-table th {
    border: 1px solid #bbbbbb;
    color: #333333;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .c-data-table td div,
  .c-data-table th div {
    background-color: #1da9f5;
    color: #ffffff;
    border-radius: 5px;
  }
  .item {
    background: #1da9f5;
    padding: 5px 0;
    border: 1px solid #fff;
  }
</style>
