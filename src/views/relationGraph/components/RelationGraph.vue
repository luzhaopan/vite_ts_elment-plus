<template>
  <div>
    <div v-loading="g_loading" style="height: calc(100vh - 60px)">
      <RelationGraph
        ref="graphRef"
        :options="graphOptions"
        :on-node-click="onNodeClick"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import RelationGraph from 'relation-graph/vue3'
  import type {
    RGOptions,
    RGJsonData,
    RelationGraphComponent
  } from 'relation-graph/vue3'

  const graphRef = ref<RelationGraphComponent>()
  const g_loading = ref(true)

  const graphOptions: RGOptions = {
    layout: {
      label: 'Tree',
      layoutName: 'tree',
      layoutClassName: 'seeks-layout-center',
      from: 'left',
      min_per_width: undefined,
      max_per_width: 300,
      min_per_height: 40,
      max_per_height: undefined,
      levelDistance: ''
    },
    defaultExpandHolderPosition: 'right',
    defaultNodeShape: 1,
    defaultNodeWidth: 180,
    defaultNodeHeight: 50,
    defaultLineShape: 4,
    defaultNodeBorderWidth: 0,
    defaultLineColor: 'rgba(0, 186, 189, 1)',
    defaultNodeColor: '#2E7BFE'
  }

  const setGraphData = async () => {
    const __graph_json_data: RGJsonData = {
      rootId: 'a',
      nodes: [
        { id: 'a', text: '价值板（000919）拥挤度预测值：0.05' },
        {
          id: 'b',
          text: '对数市值 ⇧',
          color: '#fff7f2',
          borderWidth: 1,
          borderColor: '#ff5e05',
          fontColor: '#ff5e05'
        },

        {
          id: 'b1',
          text: '预期分红比市值 ⇧',
          color: '#fff7f2',
          borderWidth: 1,
          borderColor: '#ff5e05',
          fontColor: '#ff5e05'
        },
        {
          id: 'b2',
          text: '医药行业  ⇩',
          color: '#FCFEFA',
          borderWidth: 1,
          borderColor: '#38E688',
          fontColor: '#38E688'
        },
        {
          id: 'b3',
          text: '资本支出增长  ⇩',
          color: '#FCFEFA',
          borderWidth: 1,
          borderColor: '#38E688',
          fontColor: '#38E688'
        },
        {
          id: 'b1-1',
          text: '因子收益数值贡献 ⇧',
          color: '#fff7f2',
          borderWidth: 1,
          borderColor: '#ff5e05',
          fontColor: '#ff5e05'
        },
        {
          id: 'b1-2',
          text: '风格暴露数值贡献  ⇩',
          color: '#FCFEFA',
          borderWidth: 1,
          borderColor: '#38E688',
          fontColor: '#38E688'
        }
      ],
      lines: [
        { from: 'a', to: 'b' },
        { from: 'a', to: 'b1' },
        { from: 'a', to: 'b2' },
        { from: 'a', to: 'b3' },
        { from: 'b1', to: 'b1-1' },
        { from: 'b1', to: 'b1-2' }
      ]
    }

    console.log(JSON.stringify(__graph_json_data))
    g_loading.value = false
    const graphInstance = graphRef.value!.getInstance()
    await graphInstance.setJsonData(__graph_json_data)
    await graphInstance.moveToCenter()
    await graphInstance.zoomToFit()
  }
  onMounted(() => {
    setGraphData()
  })
  //节点点击
  function onNodeClick(nodeObject, event) {
    console.log('跳转', nodeObject)
  }
</script>

<style lang="scss" scoped>
  ::v-deep(.relation-graph) {
    .c-node-text {
      padding: 0px;
      place-items: center;
      justify-content: center;
    }
  }
  .c-my-panel {
    width: 600px;
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 10px;
    z-index: 800;
    background-color: #efefef;
    border: #eeeeee solid 1px;
    padding: 10px;
    .c-option-name {
      color: #666666;
      font-size: 14px;
      line-height: 30px;
    }
    .c-simple-configs {
      padding-left: 70px;
      padding-right: 70px;
      & > div {
        line-height: 30px;
        color: #5b05f1;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 5px;
        text-align: center;
        &:hover {
          background-color: #5b05f1;
          color: #ffffff;
        }
      }
    }
  }
</style>
