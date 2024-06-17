<template>
  <el-row style="margin-top: 10px">
    <!-- <el-col :span="4" class="left">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col> -->
    <el-col :span="24" style="margin-top: 10px; padding: 0 15px">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div></div>
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <!-- <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <div class="btn">文件导入</div>
          </el-upload> -->

          <div class="btn select">负荷预测</div>
          <div class="btn">数据保存</div>
          <!-- <div class="btn" @click="dialogVisible = true">数据管理</div> -->
          <!-- <div class="btn">系统帮助</div> -->
          <!-- <div class="btn">关闭</div> -->
        </div>
      </div>
      <div style="display: flex; align-items: center; background: #fff">
        <div class="title">
          分析类型：
          <select>
            <option value="volvo">日负荷分析</option>
            <option value="saab">周负荷分析</option>
          </select>
        </div>
        <div class="title">
          预测算法：
          <select>
            <option value="volvo">BP神经网络</option>
            <option value="saab">PSO神经网络</option>
          </select>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between">
        <div style="flex: 1; margin-bottom: 15px">
          <table class="table">
            <tr>
              <td>单位</td>
              <td>
                <select>
                  <option value="volvo1">地区负荷</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>时间</td>
              <td>
                <input type="date" />
              </td>
            </tr>
          </table>
        </div>
        <div>
          <button type="button" class="btn1">数据清洗</button>
          <button type="button" class="btn1">网络训练</button>
          <button type="button" class="btn1">测试</button>
          <!-- <button type="button" class="btn1">开始预测</button> -->
          <!-- <div class="btn1">数据清洗</div>
          <div class="btn1">网络训练</div>
          <div class="btn1">测试</div>
          <div class="btn1">开始预测</div> -->
        </div>
      </div>
      <div class="title">预测结果</div>
      <el-row :gutter="20">
        <el-col :span="24" class="result">
          <div>最大相对误差：<input class="input1" :value="obj.value1" /></div>
          <div style="margin-left: 10px">
            最小相对误差：<input class="input1" :value="obj.value2" />
          </div>
          <div style="margin-left: 10px">
            平均相对误差：<input class="input1" :value="obj.value3" />
          </div>
          <div style="margin-left: 10px">
            均方根误差：<input class="input1" :value="obj.value4" />
          </div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: center; margin: 10px">负荷预测值</div>
          <div class="table1">
            <el-table :data="tableData" height="320" style="width: 100%">
              <el-table-column prop="date" label="整点时刻" />
              <el-table-column prop="name" label="预测值(kw)" />
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: center; margin: 10px">日负荷曲线</div>
          <LineEcharts />
        </el-col>
      </el-row>
    </el-col>
    <el-dialog
      v-model="dialogVisible"
      title="警告"
      width="30%"
      :before-close="handleClose1"
    >
      <span>请检查日期的输入是否符合要求！</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            style="background-color: #0d8369; color: #fff"
            @click="dialogVisible = false"
          >
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </el-row>
</template>

<script setup lang="ts">
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting
  } from '@element-plus/icons-vue'
  import LineEcharts from './lineEcharts/index.vue'
  import { ref } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { Plus } from '@element-plus/icons-vue'

  const dialogVisible = ref(false)

  const handleClose1 = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }

  import type { UploadProps } from 'element-plus'

  const imageUrl = ref('')

  const obj = {
    value1: '5.5879%',
    value2: '0.1853%',
    value3: '1.8749%',
    value4: '2.3216%'
  }

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
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const tableData = [
    {
      date: '00：00',
      name: ''
    },
    {
      date: '01：00',
      name: ''
    },
    {
      date: '02：00',
      name: ''
    },
    {
      date: '03：00',
      name: ''
    },
    {
      date: '04：00',
      name: ''
    },
    {
      date: '05：00',
      name: ''
    },
    {
      date: '06：00',
      name: ''
    },
    {
      date: '07：00',
      name: ''
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
