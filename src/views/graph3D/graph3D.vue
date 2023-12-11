<template>
  <div>
    <div id="3d-graph" class="three-graph"></div>
  </div>
</template>

<script lang="ts" setup>
  import ForceGraph3D from '3d-force-graph'
  // import SpriteText from "three-spritetext";
  import {
    CSS2DRenderer,
    CSS2DObject
  } from 'three/addons/renderers/CSS2DRenderer.js'
  import { top5, records } from './data/data.js'

  let Graph = null

  function threeRender() {
    // const gData = createRandomGraph()
    // DOM初始化及数据挂载
    const elm = document.getElementById('3d-graph')
    Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elm)
      .graphData(records)
      .height(750)
      .width(1100)
      .backgroundColor('#000011')
      // 节点样式和标签设置
      .nodeRelSize(7)
      .nodeAutoColorBy('group')
      .nodeThreeObject((node) => {
        const nodeEl = document.createElement('div')
        nodeEl.textContent = node.id
        nodeEl.style.color = node.color
        nodeEl.className = 'node-label'
        return new CSS2DObject(nodeEl)
      })
      .nodeThreeObjectExtend(true)
  }
  // 随机生成一个规模为N的图
  function createRandomGraph(N = 300) {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    }
  }

  onMounted(() => {
    threeRender()
  })
</script>

<style lang="scss" scoped>
  .three-graph {
    width: 100%;
    height: 350px;
  }
  .node-label {
    font-size: 12px;
    padding: 1px 4px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    user-select: none;
  }
</style>
