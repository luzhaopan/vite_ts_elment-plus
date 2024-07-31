<template>
  <div class="item">
    <div class="title" :id="nodeData.id">
      <span v-if="nodeData.data.nodeType == 0" color="#fff" size="25">
        icon1
      </span>
      <span v-if="nodeData.data.nodeType == -1" color="#fff" size="30">
        icon2
      </span>
      <span v-if="nodeData.data.nodeType == 1"> icon3 </span>
      <div class="cursor-pointer" style="max-width: 280px; margin: 0 10px">
        {{ nodeData.text }}
      </div>
      <span
        v-if="
          nodeData.data.croppingFlag && graphData.rootId != nodeData.data.id
        "
        @click.stop="toggleCropping(nodeData)"
      >
        icon4
      </span>
    </div>
    <table v-show="nodeData.data.isExpand" class="c-data-table">
      <template v-for="item in nodeData.data.fieldNames" :key="item">
        <tr>
          <td>
            <div class="cursor-pointer" :id="nodeData.id + '?' + item">
              {{ item }}
            </div>
          </td>
        </tr>
      </template>
    </table>
    <div class="btn">
      <div
        v-if="!nodeData.data.isExpand"
        class="cursor-pointer"
        @click.stop="toggleExpand(nodeData)"
      >
        <span>展开</span>
      </div>
      <div v-else class="cursor-pointer" @click.stop="toggleExpand(nodeData)">
        <span>收起</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ElMessage, ElMessageBox } from 'element-plus'
  defineProps({
    nodeData: {
      type: Object,
      default: () => ({})
    },
    graphData: {
      type: Object,
      default: () => ({})
    }
  })

  const emit = defineEmits(['handleClick', 'handleExpand'])

  // const dialog = useDialog();

  // 展开节点
  const toggleExpand = (node: any) => {
    // console.log('expand', node);
    emit('handleExpand', node)
  }

  // 是否裁剪弹窗提示
  const toggleCropping = (node: any) => {
    ElMessageBox.confirm('确定裁剪该节点？', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
      .then(() => {
        emit('handleClick', node)
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  }
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
  .table-content {
    border-bottom: #efefef solid 1px;
    background: #fff !important;
    color: #333;
    padding: 10px 0;
    text-align: center;
    height: 280px;
    box-shadow: 2px 4px 10px #909090;
    transition: all 0.5s;
    flex: 1;
    div {
      margin: 8px 0;
    }
  }
  .btn {
    background: #f9f9f9;
    font-size: 20px;
    padding: 10px 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 100px;
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

  .show-all {
    position: absolute;
    z-index: 700;
    right: 20px;
    top: -10px;
    display: flex;
  }

  .c-data-table {
    background-color: #ffffff;
    border-collapse: collapse;
    width: 100%;
  }
  .c-data-table td,
  .c-data-table th {
    border: 1px solid #f4f4f4;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
  }
  .c-data-table td div,
  .c-data-table th div {
    // background-color: #1da9f5;
    color: #000;
    width: 95%;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px;
  }
</style>
