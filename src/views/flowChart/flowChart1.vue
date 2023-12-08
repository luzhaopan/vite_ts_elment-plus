<template>
  <div style="height: 100%">
    <!-- 不可编辑流程图 -->
    <CreateFlow
      ref="createdFlow"
      :is-edit="true"
      :template-data="flowData"
      @hander-change="save"
    />
  </div>
</template>

<script lang="ts" setup>
  import CreateFlow from '@/components/CreateFlow/index.vue'
  import { data1 } from './mock'

  const flowData = reactive({
    nodeList: [],
    linkList: [],
    attr: {
      id: ''
    },
    config: {
      showGrid: true,
      showGridText: '隐藏网格',
      showGridIcon: 'EyeOutlined'
    },
    status: '3'
  })

  // 流程图数据处理
  const handerData = (obj: any) => {
    if (!Object.keys(obj).length) return
    const { nodeList, linkList, config, attr, status } = obj

    let nodeList1 = []
    let linkList1 = []
    nodeList.forEach((item) => {
      nodeList1.push({
        ...item,
        x: parseInt(item.x) < 3000 ? parseInt(item.x) + 3000 : parseInt(item.x),
        y: parseInt(item.y) < 3000 ? parseInt(item.y) + 3000 : parseInt(item.y)
      })
    })
    linkList.forEach((item) => {
      linkList1.push({ ...item })
    })
    flowData.nodeList = nodeList1
    flowData.linkList = linkList1
    flowData.attr = { ...attr }
    flowData.config = { ...config }
    flowData.status = status
  }

  const save = (val: Object) => {
    console.log(val)
  }

  onMounted(() => {
    handerData(data1)
  })
</script>
