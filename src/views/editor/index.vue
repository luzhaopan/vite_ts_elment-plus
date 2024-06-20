<template>
  <el-row style="margin-top: 10px">
    <el-col :span="24" style="margin-top: 10px; padding: 0 15px">
      <div style="padding: 10px; background-color: #fff">
        <h3 style="">账户管理</h3>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="用户名称" align="center" />
          <el-table-column prop="size" label="部门" align="center" />
          <el-table-column prop="format" label="角色" align="center" />
          <el-table-column
            fixed="right"
            label="操作"
            width="140"
            align="center"
          >
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick">
                修改
              </el-button>
              <el-button link type="primary" size="small" @click="handleClick">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const handleClick = () => {
    console.log('click')
  }
  const tableData = [
    {
      date: '2024-05-03',
      name: '管理员',
      size: '研发部',
      format: '管理员',
      author: '王师傅'
    },
    {
      date: '2024-05-05',
      name: 'lisi',
      size: '技术部',
      format: '普通用户',
      author: '王师傅'
    },
    {
      date: '2024-05-13',
      name: 'zhangsan',
      size: '技术部',
      format: '普通用户',
      author: '王师傅'
    },
    {
      date: '2024-05-14',
      name: 'wangwu',
      size: '技术部',
      format: '普通用户',
      author: '王师傅'
    }
  ]
</script>

<style scoped lang="scss">
  .left {
    height: 100vh;
    background: #fff;
  }
  .btn {
    background: #376c91;
    color: #fff;
    padding: 5px 15px;
    margin: 0 5px;
  }
  .btn1 {
    padding: 2px 15px;
    margin: 0 5px;
  }
  .title {
    color: #376c91;
    font-size: 17px;
    font-weight: 700;
    padding: 15px;
    position: relative;
    background: #fff;
  }
  .title::after {
    display: block;
    content: ' ';
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #376c91, #74b7ec);
    position: absolute;
    top: 44px;
    left: 2px;
  }
  .table {
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;

    td {
      position: relative;
      min-height: 20px;
      padding: 6px 15px;
      font-size: 14px;
      line-height: 20px;
      border: 2px solid #376c91;

      &:nth-child(odd) {
        width: 15%;
        text-align: right;
        background-color: #b7d8ed;
      }
    }
  }
  select {
    height: 25px;
  }
  .select {
    background: #74b7ec;
    color: #fff;
  }
  .table1 {
    background-color: #eee;
    padding: 40px;
  }
  .input1 {
    width: 80px;
  }
  .result {
    display: flex;
    justify-content: left;
    margin: 20px 0 10px;
  }
</style>
