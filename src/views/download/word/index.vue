<template>
  <div class="h-full">
    ref
    可以处理原始类型的值，对于引用类型的值也不在话下，官方文档是这样解释的。如果给
    ref 函数传递了一个对象，那么这个对象就会通过 reactive()
    这个方法将其转换成具有深层次的响应式对象，也就是内部本质还是调用了 reactive
    方法
  </div>
  <el-button type="primary" @click="exportToWord"> 模版下载 </el-button>
</template>

<script lang="ts" setup>
  import saveAs from 'file-saver'

  const exportToWord = () => {
    // Create a Blob with the file contents
    const name = 'template'
    const content = 'content'
    const blob = new Blob([content], {
      type: 'application/msword;charset=utf-8'
    })
    saveAs(blob, name + '.doc')
  }
</script>

<style scoped>
  .box-card {
    margin-bottom: 18px;
  }
</style>
