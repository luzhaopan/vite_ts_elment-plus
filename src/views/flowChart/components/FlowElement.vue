<template>
  <div class="flow-element">
    <div>
      <div class="tab">基础</div>
      <FlowElementList
        :nodeList="commonNodes"
        :belongTo="NodeTypeEnum.Common_Node_Type"
        @setDragInfo="setDragInfo"
      />
    </div>
    <div>
      <div class="tab">高级</div>
      <FlowElementList
        :nodeList="highNodes"
        :belongTo="NodeTypeEnum.High_Node_Type"
        @setDragInfo="setDragInfo"
      />
    </div>
    <div>
      <div class="tab">泳道</div>
      <FlowElementList
        :nodeList="laneNodes"
        :belongTo="NodeTypeEnum.Lane_Node_Type"
        @setDragInfo="setDragInfo"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import FlowElementList from './FlowElementList.vue'
  import { commonNodes, highNodes, laneNodes } from '../config/nodes'
  import { IDragInfo } from '../type/flow'
  import { NodeTypeEnum } from '../type/enums'

  const emits = defineEmits(['setDragInfo'])

  // 设置dragInfo
  function setDragInfo(info: IDragInfo) {
    emits('setDragInfo', info)
  }
</script>

<style lang="scss" scoped>
  .flow-element {
    background-color: #001529;
    position: relative;
    // z-index: 10000;
    box-shadow: 3px 0 10px #999;
    height: 100%;
    .tab {
      background-color: #002752;
      border-top: 1px dashed #0960bd;
      border-bottom: 1px dashed #0960bd;
      border-left: 2px solid #0960bd;
      text-align: center;
      margin-bottom: 10px;
      font-size: 12px;
      height: 26px;
      line-height: 22px;
      color: #fff;
      width: 100%;
    }
  }
</style>
