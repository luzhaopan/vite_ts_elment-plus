<template>
  <div class="detail-box">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <div class="demo-collapse">
      <el-collapse accordion>
        <el-collapse-item title="节点详情" name="1">
          <div>数据资产图谱平台</div>
          <div>数据资产图谱平台</div>
        </el-collapse-item>
        <el-collapse-item title="节点详情" name="2">
          <div>数据资产图谱平台</div>
          <div>数据资产图谱平台</div>
        </el-collapse-item>
        <el-collapse-item title="节点详情" name="3">
          <div>数据资产图谱平台</div>
          <div>数据资产图谱平台</div>
        </el-collapse-item>
        <el-collapse-item title="节点详情" name="4">
          <div>数据资产图谱平台</div>
          <div>数据资产图谱平台</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// 弹框详情
const isCollapse = ref(true)
</script>

<style lang="scss" scoped>
.detail-box {
  padding: 10px;
  width: 280px;
  height: 360px;
  background: #0c1636;
  border-radius: 2px;
  padding: '2px';
  border: 2px solid #185184;
  color: #fff;
}
:deep(.el-collapse-item__header) {
  background: transparent;
  color: #fff;
  border-bottom: none;
}
:deep(.el-collapse) {
  border: none;
}
:deep(.el-collapse-item__wrap) {
  background: transparent;
  border-bottom: none;
}
:deep(.el-collapse-item__content) {
  color: #fff;
}
:deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
  background: #0c1636;
  color: #fff;
  border-radius: 2px;
  border: 2px solid #185184;
}
</style>
