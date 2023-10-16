<template>
  <el-drawer
    title="设置"
    :zIndex="1001"
    placement="right"
    :size="500"
    v-model="settingVisible"
    @close="close"
  >
    <template #footer>
      <div class="setting-btn">
        <div>
          <el-button @click="close">取消</el-button>
        </div>
        <div>
          <el-button @click="setDefault" class="default-btn"
            >恢复默认</el-button
          >
          <el-button type="primary" @click="handleSubmit">确定</el-button>
        </div>
      </div>
    </template>

    <el-form layout="horizontal">
      <el-divider orientation="left">画布</el-divider>
      <el-form-item
        label="缩小比例"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-slider
          :min="0.05"
          :max="0.5"
          :step="0.05"
          :tipFormatter="formatOnceNarrow"
          v-model="settingConfig.containerScale.onceNarrow"
        />
      </el-form-item>
      <el-form-item
        label="放大比例"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-slider
          :min="0.05"
          :max="0.5"
          :step="0.05"
          :tipFormatter="formatOnceEnlarge"
          v-model="settingConfig.containerScale.onceEnlarge"
        />
      </el-form-item>

      <el-divider orientation="left">连线</el-divider>
      <el-form-item
        label="类型"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-select v-model="settingConfig.cls.linkType">
          <el-option label="Bezier" value="Bezier">贝塞尔曲线</el-option>
          <el-option label="Straight" value="Straight">直线</el-option>
          <el-option label="Flowchart" value="Flowchart">流程图线</el-option>
          <el-option label="StateMachine" value="StateMachine"
            >状态线</el-option
          >
        </el-select>
      </el-form-item>
      <el-form-item
        label="颜色"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <div @click="handleColorPicker">
          <color-picker v-model="settingConfig.cls.linkColor" />
        </div>
      </el-form-item>
      <el-form-item
        label="粗细"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-slider
          :min="1"
          :max="10"
          v-model="settingConfig.cls.linkThickness"
        />
      </el-form-item>

      <el-divider orientation="left">其它设置</el-divider>

      <el-form-item
        label="辅助线"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-switch v-model="settingConfig.other.isOpenAuxiliaryLine" />
      </el-form-item>
      <el-form-item
        label="自动对齐水平间距"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-slider
          :min="10"
          :max="800"
          :step="5"
          v-model="settingConfig.other.horizontal"
        />
      </el-form-item>
      <el-form-item
        label="自动对齐垂直间距"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-slider
          :min="10"
          :max="800"
          :step="5"
          v-model="settingConfig.other.vertical"
        />
      </el-form-item>
      <el-form-item
        label="微移距离"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <el-slider :min="1" v-model="settingConfig.other.movePx" />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts" setup>
  import { reactive, watch, ref, unref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { ColorPicker } from 'vue3-colorpicker'
  import 'vue3-colorpicker/style.css'
  import { cloneDeep } from 'lodash-es'
  import { ISettingConfig } from '../type/flow.d.ts'
  import { settingConfig as defaultSettingConfig } from '../config/flow'
  import { setFlowConfig } from '../utils/common'
  import { useCache } from '../hooks/useCache'

  const { wsCache } = useCache()

  const props = defineProps({
    config: {
      type: Object,
      default: () => ({})
    },
    settingVisible: {
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmits(['update:config', 'update:settingVisible'])

  const settingConfig = ref<ISettingConfig>(cloneDeep(defaultSettingConfig))
  console.log('settingConfig', settingConfig)

  const flowConfig = ref(props.config)

  const formItemLayout = reactive({
    labelCol: { span: 7 },
    wrapperCol: { span: 16 }
  })

  function close() {
    emits('update:settingVisible', false)
  }

  // 手动触发resize，修复ColorPicker位置
  function handleColorPicker() {
    const myEvent = new Event('resize')
    window.dispatchEvent(myEvent)
  }

  function formatOnceNarrow(v: number) {
    return `${v * 100}%`
  }

  function formatOnceEnlarge(v: number) {
    return `${v * 100}%`
  }

  function handleSubmit() {
    wsCache.set('settingConfig', unref(settingConfig))
    flowConfig.value = setFlowConfig(unref(flowConfig), unref(settingConfig))
    close()
    ElMessage.success('设置成功')
  }

  // 恢复默认
  function setDefault() {
    settingConfig.value = defaultSettingConfig
  }

  watch(
    () => props.config,
    (config) => {
      flowConfig.value = config
    }
  )

  watch(
    () => flowConfig.value,
    (config) => {
      emits('update:config', config)
    },
    { deep: true }
  )

  watch(
    () => props.settingVisible,
    (visible) => {
      if (visible) {
        settingConfig.value = wsCache.get('settingConfig')
      }
    }
  )
</script>

<style scoped lang="scss">
  .setting-btn {
    display: flex;
    justify-content: space-between;

    .default-btn {
      margin-right: 10px;
    }
  }
</style>
