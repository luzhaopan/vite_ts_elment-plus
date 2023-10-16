<template>
  <div class="header-option">
    <div class="header-option__tools">
      <span v-for="tool in tools" :key="tool.type">
        <el-tooltip :content="tool.nodeName" placement="bottom-start">
          <el-button
            size="small"
            :type="currentTool.type === tool.type ? 'primary' : 'default'"
            @click="selectTool(tool.type)"
          >
            <template #icon>
              <component :is="tool.icon" />
            </template>
          </el-button>
        </el-tooltip>
      </span>
    </div>

    <div class="header-option__buttons">
      <el-tooltip content="生成流程图片" placement="bottom">
        <el-button
          @click="emits('generateFlowImage')"
          class="header-option__button"
          size="small"
        >
          <template #icon>
            <component :is="'Picture'" />
          </template>
        </el-button>
      </el-tooltip>

      <el-popconfirm
        title="确认要重新绘制吗？"
        placement="bottom"
        okText="确认"
        cancelText="取消"
        @confirm="emits('clear')"
      >
        <el-tooltip content="重新绘制" placement="bottom">
          <el-button class="header-option__button" size="small">
            <template #icon>
              <component :is="'Delete'" />
            </template>
          </el-button>
        </el-tooltip>
      </el-popconfirm>

      <el-tooltip :content="flowData.config.showGridText" placement="bottom">
        <el-button
          @click="emits('toggleShowGrid')"
          class="header-option__button"
          size="small"
        >
          <template #icon>
            <component :is="'Cpu'" />
          </template>
          <!-- <component :is="'ReadingLamp'" /> -->
        </el-button>
      </el-tooltip>

      <el-tooltip content="设置" placement="bottom">
        <el-button
          @click="emits('setting')"
          class="header-option__button"
          size="small"
        >
          <template #icon>
            <component :is="'Setting'" />
          </template>
        </el-button>
      </el-tooltip>

      <el-tooltip content="测试" placement="bottom">
        <el-button
          @click="emits('openTest')"
          class="header-option__button"
          size="small"
        >
          <template #icon>
            <component :is="'Cpu'" />
          </template>
        </el-button>
      </el-tooltip>

      <el-tooltip content="快捷键大全" placement="bottom">
        <el-button
          @click="emits('shortcutHelper')"
          class="header-option__button"
          size="small"
        >
          <template #icon>
            <component :is="'Notebook'" />
          </template>
        </el-button>
      </el-tooltip>

      <el-tooltip content="保存流程" placement="bottom">
        <el-button
          @click="emits('saveFlow')"
          class="header-option__button"
          size="small"
        >
          <template #icon>
            <component :is="'Calendar'" />
          </template>
        </el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue'
  import { ITool } from '../type/flow'
  import { ToolsTypeEnum } from '../type/enums'
  import { tools } from '../config/tools'

  defineProps({
    currentTool: {
      type: Object as PropType<ITool>,
      default: () => ({})
    },
    flowData: {
      type: Object,
      default: () => ({})
    }
  })

  const emits = defineEmits([
    'selectTool',
    'generateFlowImage',
    'clear',
    'toggleShowGrid',
    'setting',
    'openTest',
    'shortcutHelper',
    'saveFlow'
  ])

  function selectTool(type: ToolsTypeEnum) {
    emits('selectTool', type)
  }
</script>

<style lang="scss" scoped>
  .header-option {
    background: #fff;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 5px #ddd;
    position: relative;
    z-index: 100;

    &__tools {
      > span {
        margin-right: 6px;
      }
    }

    &__button {
      border: 0;
      margin-left: 8px;
      color: #333;
    }
  }
</style>
