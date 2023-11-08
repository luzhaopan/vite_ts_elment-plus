<template>
  <div>
    <div v-for="node in nodeList" :key="node.type">
      <el-tooltip :content="node.nodeName" placement="right">
        <div
          class="node-item"
          draggable="true"
          @dragstart="dragNode(node.type, belongTo)"
        >
          <el-icon :size="20">
            <component :is="node.icon" />
          </el-icon>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { PropType } from 'vue'
  import { IElement } from '../type/flow'
  import { NodeTypeEnum } from '../type/enums'

  defineProps({
    nodeList: {
      type: Array as PropType<IElement[]>,
      default: () => []
    },
    belongTo: {
      type: String as PropType<NodeTypeEnum>,
      default: ''
    }
  })

  const emits = defineEmits(['setDragInfo'])

  // 开始拖拽
  function dragNode(type: string, belongTo: string) {
    emits('setDragInfo', {
      type,
      belongTo
    })
  }
</script>

<style lang="scss" scoped>
  .node-item {
    height: 40px;
    // width: 32px;
    color: #fff;
    border-radius: 5px;
    line-height: 32px;
    text-align: left;
    cursor: move;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #0960bd;
      outline: 1px dashed #0960bd;
    }
  }

  .linkLabel {
    background-color: white;
    padding: 1px;
    border: 1px solid #346789;
    border-radius: 5px;
    opacity: 0.8;
    z-index: 3;
  }
</style>
