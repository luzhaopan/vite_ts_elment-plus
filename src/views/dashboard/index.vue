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
            <option value="volvo">LSTM算法模型</option>
            <option value="saab">改进LSTM算法模型</option>
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
      <el-row :gutter="20" style="background-color: #fff; margin: 0 1px">
        <!-- <el-col :span="24" class="result">
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
        </el-col> -->
        <el-col :span="12">
          <div style="text-align: center; margin: 10px">负荷预测值</div>
          <div class="table1">
            <el-table
              empty-text="暂无数据"
              :data="tableData"
              height="400"
              style="width: 100%"
            >
              <el-table-column prop="date" label="预测日时刻" />
              <el-table-column prop="name" label="真实值(MWh)" />
              <el-table-column prop="name1" label="预测值(MWh)" />
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="text-align: center; margin: 10px">日负荷曲线</div>
          <LineEcharts />
          <!-- <LineEcharts1 /> -->
        </el-col>
      </el-row>
      <div class="title">误差分析</div>
      <el-row :gutter="20" style="background-color: #fff; margin: 0 1px">
        <el-col :span="24" class="result">
          <div>相对误差：<span>0 ~ 0.05</span></div>
          <div style="margin-left: 30px">绝对误差：<span>-600 ~ 800</span></div>
          <!-- <div>相对误差：--</div>
          <div style="margin-left: 30px">绝对误差：--</div> -->
        </el-col>
        <el-col :span="12">
          <ECharts :options="optionsW2" height="500px" />
        </el-col>
        <el-col :span="12">
          <ECharts :options="optionsW4" height="500px" />
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
  import { ref } from 'vue'
  import LineEcharts from './lineEcharts/index.vue'
  import LineEcharts1 from './lineEcharts/index1.vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { dataW1, dataW3 } from './data'
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
  const tableData = []

  const oo4 = [
    13610.33, 17450.15, 21000.53, 22900.94, 13300.65, 15800.84, 20400.67,
    16200.52, 12500.39, 21530.47, 14121.13, 12802.09, 21950.14, 13450.66,
    22200.36, 13253.29, 23086.3, 14680, 12537.27, 19895.31
  ]

  const oo41 = [
    13226.65, 18026.89, 20758.34, 23129.07, 12948.3, 15072.9, 19673.97,
    15874.19, 13021.34, 22407.65, 13424.75, 12285.12, 21090.58, 14103.72,
    23208.56, 13471.77, 23397.04, 13958.65, 12540.72, 19325.48
  ]

  const tableData1 = []

  const dic = [
    '00：00',
    '01：00',
    '02：00',
    '03：00',
    '04：00',
    '05：00',
    '06：00',
    '07：00',
    '08：00',
    '09：00',
    '10：00',
    '11：00',
    '12：00',
    '13：00',
    '14：00',
    '15：00',
    '16：00',
    '17：00',
    '18：00',
    '19：00',
    '20：00',
    '21：00',
    '22：00',
    '23：00'
  ]

  oo4.forEach((item, index) => {
    tableData1.push({
      date: dic[index],
      name: item,
      name1: oo41[index]
    })
  })

  const optionsW2 = {
    tooltip: {
      trigger: 'axis'
    },
    // color: ['blue', 'orange'],
    xAxis: [
      {
        name: 'time(h)',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#000',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 40,
        axisLine: {
          show: true
        },
        splitLine: {
          show: true // 是否显示网格线
        },
        axisTick: {
          show: true // 不显示坐标轴刻度线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18,
          interval: 9
        },
        data: dataW1.map(function (item) {
          return item[0]
        })
      }
    ],
    yAxis: [
      {
        name: 'relative error',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        max: 0.05,
        min: 0,
        nameGap: 55,
        position: 'left',
        splitLine: {
          show: true // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18
        }
      }
    ],
    series: [
      {
        name: '',
        type: 'line',
        lineStyle: {
          color: '#ff5a5a'
        },
        symbol: 'none',
        data: dataW1.map(function (item) {
          return item[1] * (Math.random() * (0.6 - 0.2) + 0.2)
        })
      }
    ]
  }
  const optionsW4 = {
    tooltip: {
      trigger: 'axis'
    },
    // color: ['blue', 'orange'],
    xAxis: [
      {
        name: 'time(h)',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#000',
          fontWeight: '600',
          fontSize: 26
        },
        nameGap: 40,
        axisLine: {
          show: true
        },
        splitLine: {
          show: true // 是否显示网格线
        },
        axisTick: {
          show: true // 不显示坐标轴刻度线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18,
          interval: 9
        },
        data: dataW3.map(function (item) {
          return item[0]
        })
      }
    ],
    yAxis: [
      {
        name: 'absolute error',
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#333',
          fontWeight: '600',
          fontSize: 26
        },
        max: 800,
        // min: 0,
        nameGap: 55,
        position: 'left',
        splitLine: {
          show: true // 是否显示网格线
        },
        axisLine: {
          show: true // 不显示坐标轴线
        },
        axisLabel: {
          color: '#000',
          fontWeight: '600',
          fontSize: 18
        }
      }
    ],
    series: [
      {
        name: '',
        type: 'line',
        lineStyle: {
          color: '#ff5a5a'
        },
        symbol: 'none',
        data: dataW3.map(function (item) {
          return item[1] * (Math.random() * (0.58 - 0.1) + 0.1)
        })
      }
    ]
  }
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
    padding: 10px;
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
