<template>
  <Editor
    :toolbarConfig="toolbarConfig"
    :editorConfig="editorConfig"
    @change="change"
  />
</template>

<script setup lang="ts">
  import { IDomEditor, IToolbarConfig } from '@wangeditor/editor'
  import Editor from '@/components/Editor/index.vue'

  //编辑器配置
  const toolbarConfig: Partial<IToolbarConfig> = {}

  //编辑器配置
  const editorConfig: any = {
    placeholder: '你好呀',
    readOnly: false, //控制是否只读 默认为false 只读状态可通过 editor.enable() 和 editor.disable() 切换，
    autoFocus: false, //配置编辑器默认是否 focus ，默认为 true
    scroll: false //配置编辑器是否支持滚动，默认为 true 。注意，此时不要固定 editor-container 的高度，设置一个 min-height 即可。
  }

  const change = (editor: IDomEditor) => {
    console.log(editor.getHtml())
  }
</script>
