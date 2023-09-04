<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      :style="editorStyle"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onChange="handleChange"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script lang="ts" setup>
  import '@wangeditor/editor/dist/css/style.css' // 引入 css
  import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
  import {
    onBeforeUnmount,
    ref,
    unref,
    shallowRef,
    onMounted,
    computed,
    type PropType
  } from 'vue'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  import { ElMessage } from 'element-plus'

  const props = defineProps({
    height: {
      type: String,
      default: '500px'
    },
    editorConfig: {
      type: Object as PropType<IEditorConfig>,
      default: () => {
        placeholder: '请输入内容...'
      }
    }
  })

  const emit = defineEmits(['change'])

  const mode = ref('default')

  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef<IDomEditor>()

  // 内容 HTML
  const valueHtml = ref('')

  // 工具栏配置 自定义编辑器上方的功能菜单
  const toolbarConfig: Partial<IToolbarConfig> = {}

  // 编辑器配置
  const editorConfig = computed((): IEditorConfig => {
    return Object.assign(
      {
        readOnly: false,
        customAlert: (s: string, t: string) => {
          switch (t) {
            case 'success':
              ElMessage.success(s)
              break
            case 'info':
              ElMessage.info(s)
              break
            case 'warning':
              ElMessage.warning(s)
              break
            case 'error':
              ElMessage.error(s)
              break
            default:
              ElMessage.info(s)
              break
          }
        },
        autoFocus: false,
        scroll: true,
        uploadImgShowBase64: true
      },
      props.editorConfig || {}
    )
  })

  const editorStyle = computed(() => {
    return {
      height: props.height,
      'overflow-y': 'hidden'
    }
  })

  // 模拟 ajax 异步获取内容
  onMounted(() => {
    setTimeout(() => {
      valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
  })

  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    const editor = unref(editorRef.value)
    // 销毁，并移除 editor
    editor?.destroy()
  })

  const handleCreated = (editor: IDomEditor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
  }

  // 回调函数
  const handleChange = (editor: IDomEditor) => {
    emit('change', editor)
  }
</script>
