<template>
  <el-dialog
    title="快捷键大全"
    width="600px"
    :model-value="shortcutVisible"
    @close="close"
  >
    <el-table size="small" row-key="code" :data="dataSource">
      <el-table-column prop="shortcutName" label="功能" />
      <el-table-column prop="codeName" label="快捷键" />
    </el-table>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { shortcutKeys } from '../config/shortcutKeys'
  import { IShortcutKey } from '../type/flow'

  const props = defineProps({
    shortcutVisible: {
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmits(['update:shortcutVisible'])

  const dataSource = ref<IShortcutKey[]>([])

  function close() {
    emits('update:shortcutVisible', false)
  }

  watch(
    () => props.shortcutVisible,
    (visible) => {
      if (visible) {
        dataSource.value = Object.values(shortcutKeys)
      } else {
        dataSource.value = []
      }
    }
  )
</script>
