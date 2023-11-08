<template>
  <el-tabs size="small" v-model="activeKey">
    <!-- 流程属性 -->
    <el-tab-pane name="flow-attr">
      <template #label>
        <span>
          <component :is="'ClusterOutlined'" />
          流程属性
        </span>
      </template>
      <el-form :model="flowData">
        <el-form-item label="流程id">
          <el-input v-model="flowData.attr.id" disabled />
        </el-form-item>
        <el-form-item label="流程名称">
          <el-input v-model="flowData.attr.workName" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="flowData.attr.remark" />
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <!-- 节点属性 -->
    <el-tab-pane name="node-attr">
      <template #label>
        <span>
          <component :is="'ProfileOutlined'" />
          节点属性
        </span>
      </template>
      <el-form :model="currentSelect">
        <el-form-item label="类型">
          <el-tag color="purple">{{ currentSelect.type }}</el-tag>
        </el-form-item>
        <el-form-item label="id">
          <el-input v-model="currentSelect.id" disabled />
        </el-form-item>
        <el-form-item label="名称" v-if="isAllowChange(currentSelect.type)">
          <el-input
            placeholder="请输入节点名称"
            v-model="currentSelect.nodeName"
            @input="nodeNameChange"
          />
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <!-- 连线属性 -->
    <el-tab-pane name="link-attr">
      <template #label>
        <span>
          <component :is="'BranchesOutlined'" />
          连线属性
        </span>
      </template>
      <el-form :model="currentSelect">
        <el-form-item label="id">
          <el-input v-model="currentSelect.id" disabled />
        </el-form-item>
        <el-form-item label="源节点">
          <el-input v-model="currentSelect.sourceId" disabled />
        </el-form-item>
        <el-form-item label="目标节点">
          <el-input v-model="currentSelect.targetId" disabled />
        </el-form-item>
        <el-form-item label="文本">
          <el-input v-model="currentSelect.label" @input="linkLabelChange" />
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
  import { ref, watch, unref, PropType } from 'vue'
  import { NodesType, INode, ILink } from '../type/flow'
  import { CommonNodeTypeEnum } from '../type/enums'

  const props = defineProps({
    plumb: {
      type: Object,
      default: () => ({})
    },
    flowData: {
      type: Object as any,
      default: () => ({})
    },
    select: {
      type: Object as PropType<INode | ILink>,
      default: () => ({})
    }
  })

  const emits = defineEmits(['update:select'])

  const currentSelect = ref<any>(props.select)

  const activeKey = ref<string>('flow-attr')

  // 修改节点名称
  const nodeNameChange = (e) => {
    // console.log(e);
    ;(currentSelect.value as INode).nodeName = e ?? ''
  }

  // 是否可以修改节点名称
  function isAllowChange(type: NodesType) {
    return ![
      CommonNodeTypeEnum.START,
      CommonNodeTypeEnum.END,
      CommonNodeTypeEnum.GATEWAY,
      CommonNodeTypeEnum.EVENT
    ].includes(type as CommonNodeTypeEnum)
  }

  // 修改连接文本
  function linkLabelChange(e) {
    let label = e.target.value ?? ''
    ;(currentSelect.value as ILink).label = label
    let conn = props.plumb.getConnections({
      source: (unref(currentSelect) as ILink).sourceId,
      target: (unref(currentSelect) as ILink).targetId
    })[0]
    let link_id = conn.canvas.id
    let labelHandle = (e: Event) => {
      e.stopPropagation()
      currentSelect.value = props.flowData.linkList.find(
        (l: ILink) => l.id === link_id
      )
    }

    if (label !== '') {
      conn.setLabel({
        label: label,
        cssClass: `linkLabel ${link_id}`
      })
      // 添加label点击事件
      document
        .querySelector('.' + link_id)
        ?.addEventListener('click', labelHandle)
    } else {
      // 移除label点击事件
      document
        .querySelector('.' + link_id)
        ?.removeEventListener('click', labelHandle)

      let labelOverlay = conn.getLabelOverlay()
      if (labelOverlay) conn.removeOverlay(labelOverlay.id)
    }
  }

  watch(
    () => props.select,
    (val) => {
      currentSelect.value = val
      if (!unref(currentSelect)?.type) {
        activeKey.value = 'flow-attr'
      } else if (unref(currentSelect)?.type === 'link') {
        activeKey.value = 'link-attr'
      } else {
        activeKey.value = 'node-attr'
      }
    },
    { deep: true }
  )

  watch(
    () => currentSelect.value,
    (currentSelect) => {
      emits('update:select', currentSelect)
    }
  )
</script>
