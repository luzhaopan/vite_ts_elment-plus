<template>
  <el-row style="margin-top: 10px">
    <el-col :span="24" style="margin-top: 10px; padding: 0 15px">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        "
      >
        <div></div>
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <div class="btn">文件导入</div>
          </el-upload>
        </div>
      </div>
      <div style="padding: 10px; background-color: #fff">
        <h3 style="">数据集加载</h3>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="180"
            align="center"
          />
          <el-table-column
            prop="size"
            label="大小"
            width="180"
            align="center"
          />
          <el-table-column prop="format" label="格式" align="center" />
          <el-table-column prop="author" label="上传人" align="center" />
          <el-table-column prop="date" label="上传日期" align="center" />
          <el-table-column
            fixed="right"
            label="操作"
            width="120"
            align="center"
          >
            <template #default>
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
  import type { UploadProps } from 'element-plus'
  import { ElMessage, ElMessageBox } from 'element-plus'

  const imageUrl = ref('')
  const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
  ) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  }

  const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
      ElMessage.error('Avatar picture must be JPG format!')
      return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('Avatar picture size can not exceed 2MB!')
      return false
    }
    return true
  }
  const handleClick = () => {
    console.log('click')
  }
  const tableData = [
    {
      date: '2024-05-03',
      name: '测试数据集1',
      size: '35700',
      format: 'xlxs',
      author: '王师傅'
    },
    {
      date: '2024-05-05',
      name: '测试数据集2',
      size: '35700',
      format: 'xlxs',
      author: '王师傅'
    },
    {
      date: '2024-05-13',
      name: '测试数据集3',
      size: '35700',
      format: 'xlxs',
      author: '王师傅'
    },
    {
      date: '2024-05-14',
      name: '测试数据集4',
      size: '35700',
      format: 'xlxs',
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
    // background: #376c91;
    // color: #fff;
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
    // background-color: #376c91;
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
