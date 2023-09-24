<template>
  <div style="display: flex">
    <el-upload
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :before-upload="beforeUploadAction"
      type="file"
      accept=".xlsx"
    >
      <el-button type="primary">upload</el-button>
    </el-upload>
    <el-button style="margin-left: 10px" type="primary" @click="save">
      exportExcel
    </el-button>
  </div>

  <div
    id="luckysheetDom"
    style="
      margin: 0px;
      padding: 0px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 60px;
    "
  ></div>
</template>

<script lang="ts" setup>
  import LuckyExcel from 'luckyexcel'
  import { exportExcel } from './export'

  const fileName = ref<string>('')

  const init = () => {
    //配置项
    const options = {
      container: 'luckysheetDom', //luckysheet为容器id
      title: 'Luckysheet Demo', // 设定表格名称
      lang: 'zh', // 设定表格语言
      showinfobar: false,
      data: [
        {
          name: 'Cell', //工作表名称
          color: '', //工作表颜色
          index: 0, //工作表索引
          status: 1, //激活状态
          order: 0, //工作表的下标
          hide: 0, //是否隐藏
          row: 20, //行数
          column: 18, //列数
          defaultRowHeight: 19, //自定义行高
          defaultColWidth: 73, //自定义列宽
          celldata: [
            {
              r: 0,
              c: 0,
              v: {
                ct: { fa: 'General', t: 'g' },
                m: 'value1',
                v: 'value1'
              }
            },
            {
              r: 0,
              c: 1,
              v: {
                ct: { fa: 'General', t: 'g' },
                m: 'value2',
                v: 'value2'
              }
            }
          ], //初始化使用的单元格数据
          config: {
            merge: {}, //合并单元格
            rowlen: {}, //表格行高
            columnlen: {}, //表格列宽
            rowhidden: {}, //隐藏行
            colhidden: {}, //隐藏列
            borderInfo: {}, //边框
            authority: {} //工作表保护
          },
          scrollLeft: 0, //左右滚动条位置
          scrollTop: 315, //上下滚动条位置
          luckysheet_select_save: [], //选中的区域
          calcChain: [], //公式链
          isPivotTable: false, //是否数据透视表
          pivotTable: {}, //数据透视表设置
          filter_select: {}, //筛选范围
          filter: null, //筛选配置
          luckysheet_alternateformat_save: [], //交替颜色
          luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
          luckysheet_conditionformat_save: {}, //条件格式
          frozen: {}, //冻结行列配置
          chart: [], //图表配置
          zoomRatio: 1, // 缩放比例
          image: [], //图片
          showGridLines: 1, //是否显示网格线
          dataVerification: {} //数据验证配置
        },
        {
          name: 'Sheet2',
          color: '',
          index: 1,
          status: 0,
          order: 1,
          celldata: [],
          config: {}
        }
      ]
    }
    luckysheet.create(options)
  }

  const importExcel = (file: any) => {
    fileName.value = file.name
    //获取文件后缀
    let suffixArr = fileName.value.split('.'),
      suffix = suffixArr[suffixArr.length - 1]
    if (suffix !== 'xlsx') {
      alert('目前只能导入xlsx类型的文件')
      return
    }
    // luckysheet.create({
    //   container: 'luckysheetDom', //luckysheet is the container id
    //   showinfobar: false,
    //   data: exportJson.sheets,
    //   title: exportJson.info.name,
    //   userInfo: exportJson.info.name.creator
    // })
    LuckyExcel.transformExcelToLucky(file, fileCb, errorCb)
  }

  const fileCb = (exportJson: any, luckysheetfile: any) => {
    // 转换后获取工作表数据
    if (exportJson.sheets === null || exportJson.sheets.length === 0) {
      alert('无法读取excel文件的内容，当前不支持xls文件!')
      return
    }
    luckysheet.destroy()
    luckysheet.create({
      container: 'luckysheetDom', //luckysheet is the container id
      showinfobar: false,
      data: exportJson.sheets,
      title: exportJson.info.name,
      userInfo: exportJson.info.name.creator
    })
  }

  const errorCb = (error: any) => {
    console.log(error)
  }

  const beforeUploadAction = (file: any) => {
    importExcel(file)
  }

  const save = () => {
    // let data = luckysheet.toJson()
    // console.log(JSON.stringify(data))
    exportExcel(luckysheet.getluckysheetfile(), fileName.value)
  }

  onMounted(() => {
    init()
    console.log(luckysheet)
    console.log(new LuckyExcel())
  })
</script>
<style scoped lang="scss"></style>
