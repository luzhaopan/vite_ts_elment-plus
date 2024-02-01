<template>
  <div class="portfolio-page">
    <div>Python在线编辑</div>
    <div ref="editorContainer" class="editorContainer" id="codeEditBox"></div>
    <ElRow class="mb-4">
      <ElButton type="primary" @click="handleRun">测试</ElButton>
      <ElButton type="success" @click="handleReset">重置</ElButton>
      <ElButton type="info" @click="handleFormat">格式化代码</ElButton>
      <ElButton type="warning" @click="handleSubmit">发布</ElButton>
      <ElButton type="danger" @click="handleSubmit">保存</ElButton>
    </ElRow>
  </div>
</template>

<script lang="ts" setup>
  import { ElButton, ElRow } from 'element-plus'
  import { nextTick, ref, onMounted, onBeforeUnmount } from 'vue'
  import * as monaco from 'monaco-editor'

  const codeSnippet = ref('33333333333333333')
  const language = ref('python')

  let editorInstance // 实例

  // 初始化editor
  const initEditor = () => {
    // 接口测试数据
    const res = {
      content:
        'array = [1, 2, 3, 4, 5]\nsum = 0\n \nfor num in array:\n    sum += num\n \nprint(sum)  # 输出15',
      questionId: '23286',
      language: '11',
      tagId: 0,
      appId: 5,
      userId: 363614125,
      submitType: 2,
      remark: '{}',
      token:
        'eJyrVgrxCdZLrSjILEpVsjIzMLEwMNABi5WlFilZKRnpGShB*JkpqXklmWmZYGFjM2MzQxNDI1OoZHFmOkhxgWOOt7F*SJpzemB4Vmi6kXOgi1dFpqNziK9vRJhnYrBHsHGqT1FYeGm2LVRjSWYu0F5DcwNTMyNLYyODWgC6hSlO',
      selfInputData: '{1,2,3}',
      selfOutputData: '{3,2,1}'
    }

    codeSnippet.value = res.content

    nextTick(() => {
      editorInstance = monaco.editor.create(
        document.getElementById('codeEditBox'),
        {
          value: codeSnippet.value, // 编辑器初始显示文字
          language: language.value, // 语言支持自行查阅demo
          automaticLayout: true, // 自适应布局
          theme: 'vs-dark', // 官方自带三种主题vs, hc-black, or vs-dark
          foldingStrategy: 'indentation', // 折叠方式  auto | indentation
          colorDecorators: true, // 颜色装饰器
          renderLineHighlight: 'all', // 行亮
          autoIndent: true, // 自动缩进
          selectOnLineNumbers: true, // 显示行号
          minimap: {
            enabled: false
          },
          readOnly: false, // 只读
          fontSize: 16, // 字体大小
          scrollBeyondLastLine: false, // 取消代码后面一大段空白
          overviewRulerBorder: true // 不要滚动条的边框
        }
      )

      // 设置内容
      editorInstance.setValue(codeSnippet.value)

      // 监听值的变化
      editorInstance.onDidChangeModelContent((val) => {
        codeSnippet.value = editorInstance.getValue()
        //console.log(text.value)
      })
    })
  }

  /**
   * 运行代码
   */
  const handleRun = () => {
    // const result = eval(editorInstance.getValue())
    console.log(editorInstance.getValue())

    // 接口保存数据,python使用字符串形式传递到后端，参考牛客网
    /**
 * https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=295&tqId=23286&ru=/exam/company&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Fcompany
 * array = [1, 2, 3, 4, 5]
    sum = 0
    
    for num in array:
        sum += num
    
    print(sum)  # 输出15

    自测运行，提交代码片段到后端，接口返回测试结果给前端展示
    保存提交，提交代码片段到后端，后端处理对应逻辑返回处理结果给前端展示
 */
    const params = {
      content: editorInstance.getValue(),
      content1: editorInstance.getValue() + ''
    }

    console.log(params, params.content === params.content1)
  }

  /**
   * 重置代码
   */
  const handleReset = () => {
    editorInstance.setValue('')
  }

  //设置一个确认按钮，点击时调用接口
  const handleSubmit = () => {
    //loading.value = true
    //调用接口
    // api.submitCode(text.value, route.query.identity).then(res => {
    //     loading.value = false
    //     if (res.data.code == 200) {
    //         msg.value = res.data.data.msg

    //         if (res.data.data.status == 1) {
    //             ElMessage.success(res.data.data.msg)
    //         } else {
    //             ElMessage.warning(res.data.data.msg)
    //         }

    //     } else {
    //         ElMessage.error(res.data.msg)
    //     }
    // })
    const params = {
      content: editorInstance.getValue(),
      content1: editorInstance.getValue() + ''
    }

    console.log(params, params.content === params.content1)
  }

  // 格式化代码
  const handleFormat = () => {
    editorInstance.getAction('editor.action.formatDocument').run()
    editorInstance.setValue(editorInstance.getValue()) //再次设置
    // 需要发送代码到后端，后端返回格式化后的代码
    // 然后通过editorInstance.setValue(formattedCode)来更新编辑器的内容
    // 或者通过editorInstance.getValue()来获取格式化后的代码
  }

  /***
* editor.setValue(newValue)

editor.getValue()

editor.onDidChangeModelContent((val)=>{ //监听值的变化  })

editor.getAction('editor.action.formatDocument').run()    //格式化代码

editor.dispose()    //销毁实例

editor.onDidChangeOptions　　//配置改变事件

editor.onDidChangeLanguage　　//语言改变事件
*/

  onMounted(() => {
    initEditor()
  })

  onBeforeUnmount(() => {
    editorInstance && editorInstance.dispose()
  })
</script>

<style lang="scss" scoped>
  .portfolio-page {
    height: 100vh;
    width: calc(100% - 40px);
    padding: 20px;
  }

  .editorContainer {
    width: 100%;
    height: calc(100% - 160px);
  }

  .el-button {
    width: 120px;
    margin-top: 20px;
  }
</style>
