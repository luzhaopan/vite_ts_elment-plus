<template>
  <div class="h-full">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>打印</span>
        </div>
      </template>
      <el-button type="primary" @click="printPdf"> Print PDF </el-button>
      <el-button type="primary" class="mr-10px" @click="printTable">
        打印表格
      </el-button>
      <el-button type="primary" @click="printImage">打印图片</el-button>
      <el-button type="primary" @click="printJSON">JSON Printing</el-button>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>打印HTML</span>
        </div>
      </template>
      <div id="printBox">
        <div style="color: red; font-size: 30px">html</div>
        <div>
          <img src="../../assets/vue.svg" alt="" />
        </div>
        <el-table :data="tableData" style="width: 100%; height: 200px">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
        <div style="page-break-after: always"></div>
      </div>
      <el-button type="primary" @click="printHtml"> Print HTML </el-button>
    </el-card>

    <el-card class="box-card">
      <el-link
        href="https://printjs.crabbly.com/"
        target="_blank"
        type="primary"
      >
        https://printjs.crabbly.com/
      </el-link>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
  import printJS from 'print-js'

  const tableData = []

  for (let index = 0; index < 100; index++) {
    tableData.push({
      date: '2016-05-01',
      name: 'Tom',
      address: `No. ${index}, Grove St, Los Angeles`
    })
  }

  const someJSONdata = [
    {
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '111-111-1111'
    },
    {
      name: 'Barry Allen',
      email: 'barry@flash.com',
      phone: '222-222-2222'
    },
    {
      name: 'Cool Dude',
      email: 'cool@dude.com',
      phone: '333-333-3333'
    }
  ]

  function printPdf() {
    printJS('public/pdf.pdf')
    // printJS({ printable: 'public/pdf.pdf', type: 'pdf', showModal: true })
  }

  function printTable() {
    printJS({
      printable: [
        { name: 'soybean', wechat: 'honghuangdc', remark: '欢迎来技术交流' },
        { name: 'soybean', wechat: 'honghuangdc', remark: '欢迎来技术交流' }
      ],
      properties: ['name', 'wechat', 'remark'],
      type: 'json'
    })
  }
  function printImage() {
    printJS({
      printable: ['public/vite.svg', 'public/vite.svg'],
      type: 'image',
      header: 'Multiple Images',
      imageStyle: 'width:100%;'
    })
  }
  function printJSON() {
    printJS({
      printable: someJSONdata,
      properties: ['name', 'email', 'phone'],
      type: 'json',
      header: '<h3 class="custom-h3">My custom header</h3>',
      gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
      gridStyle: 'border: 2px solid #3971A5;'
    })
  }

  function printHtml() {
    setTimeout(function () {
      printJS({
        printable: 'printBox',
        type: 'html',
        scanStyles: false,
        targetStyles: ['*']
      })
    }, 500)
  }
</script>

<style scoped>
  .box-card {
    margin-bottom: 18px;
  }
</style>
