<template>
  <div class="item">
    <div class="title">
      <n-icon v-if="nodeData.data.nodeType == 0" color="#fff" size="25">
        <DiscOutline />
      </n-icon>
      <n-icon v-if="nodeData.data.nodeType == -1" color="#fff" size="30">
        <ArrowUp />
      </n-icon>
      <n-icon
        v-if="nodeData.data.nodeType == 1"
        color="#fff"
        size="30"
        style="transform: rotateX(180deg)"
      >
        <ArrowUp />
      </n-icon>
      <n-ellipsis style="max-width: 280px">
        {{ nodeData.text }}
      </n-ellipsis>
      <n-icon
        v-if="nodeData.data.croppingFlag && graphData.rootId != nodeData.data.id"
        class="cursor-pointer"
        color="#fff"
        size="30"
        @click.stop="toggleCropping(nodeData)"
      >
        <CutOutline />
      </n-icon>
    </div>
    <div class="text-content flex justify-center">
      <div class="w-4/5 cursor-pointer" :id="nodeData.id">
        {{ nodeData.data.fieldName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDialog } from 'naive-ui';
  import { ArrowUp, DiscOutline, CutOutline } from '@vicons/ionicons5';

  defineProps({
    nodeData: {
      type: Object,
      default: () => ({}),
    },
    graphData: {
      type: Object,
      default: () => ({}),
    },
  });

  const emit = defineEmits(['handleClick']);

  const dialog = useDialog();

  // 是否裁剪弹窗提示
  const toggleCropping = (node: any) => {
    dialog.warning({
      title: '确定裁剪该节点？',
      content: '',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        emit('handleClick', node);
      },
      onNegativeClick: () => {},
    });
  };
</script>

<style lang="scss" scoped>
  .item {
    height: 100%;
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  .title {
    color: #fcfcfc;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0 10px;
    }
  }

  .text-content {
    border-bottom: #efefef solid 1px;
    background-color: #fff;
    color: #333;
    padding: 10px 0;
    text-align: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
</style>
