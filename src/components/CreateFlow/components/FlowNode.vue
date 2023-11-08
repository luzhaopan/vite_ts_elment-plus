<template>
  <div
    v-if="
      node.type === CommonNodeTypeEnum.START ||
      node.type === CommonNodeTypeEnum.END ||
      node.type === CommonNodeTypeEnum.EVENT
    "
    class="common-circle-node"
    :id="node.id"
    :class="{
      active: isActive(),
      isStart: node.type === CommonNodeTypeEnum.START,
      isEnd: node.type === CommonNodeTypeEnum.END
    }"
    :style="{
      top: node.y + 'px',
      left: node.x + 'px',
      cursor: setCursor(currentTool.type)
    }"
    @click.stop="selectNode"
    @contextmenu.stop="showNodeContextMenu"
  >
    {{ node.nodeName }}
  </div>

  <div
    v-else-if="
      node.type === CommonNodeTypeEnum.COMMON ||
      node.type === CommonNodeTypeEnum.FREEDOM
    "
    class="common-rectangle-node"
    :id="node.id"
    :class="{ active: isActive() }"
    :style="{
      top: node.y + 'px',
      left: node.x + 'px',
      cursor: setCursor(currentTool.type)
    }"
    @click.stop="selectNode"
    @contextmenu.stop="showNodeContextMenu"
  >
    <component :is="setIcon(node.type)" class="node-icon" />
    {{ node.nodeName }}
  </div>

  <div
    v-else-if="node.type === HighNodeTypeEnum.CHILD_FLOW"
    class="common-rectangle-node child-node"
    :id="node.id"
    :class="{ active: isActive() }"
    :style="{
      top: node.y + 'px',
      left: node.x + 'px',
      cursor: setCursor(currentTool.type)
    }"
    @click.stop="selectNode"
    @contextmenu.stop="showNodeContextMenu"
  >
    <component :is="setIcon(node.type)" class="node-icon" />
    {{ node.nodeName }}
  </div>

  <div
    v-else-if="node.type === CommonNodeTypeEnum.GATEWAY"
    class="common-diamond-node"
    :id="node.id"
    :class="{ active: isActive() }"
    :style="{
      top: node.y + 'px',
      left: node.x + 'px',
      cursor: setCursor(currentTool.type)
    }"
    @click.stop="selectNode"
    @contextmenu.stop="showNodeContextMenu"
  ></div>

  <div
    v-else-if="node.type === LaneNodeTypeEnum.X_LANE"
    class="common-x_lane-node"
    :id="node.id"
    :class="{ active: isActive() }"
    :style="{
      top: node.y + 'px',
      left: node.x + 'px',
      height: node.height + 'px',
      width: node.width + 'px'
    }"
  >
    <div
      class="lane-text-div"
      :style="{ cursor: setCursor(currentTool.type) }"
      @click.stop="selectNode"
      @contextmenu.stop="showNodeContextMenu"
    >
      <span class="lane-text">{{ node.nodeName }}</span>
    </div>
  </div>

  <div
    v-else-if="node.type === LaneNodeTypeEnum.Y_LANE"
    class="common-y_lane-node"
    :id="node.id"
    :class="{ active: isActive() }"
    :style="{
      top: node.y + 'px',
      left: node.x + 'px',
      height: node.height + 'px',
      width: node.width + 'px'
    }"
  >
    <div
      class="lane-text-div"
      :style="{ cursor: setCursor(currentTool.type) }"
      @click.stop="selectNode"
      @contextmenu.stop="showNodeContextMenu"
    >
      <span class="lane-text">{{ node.nodeName }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, watch, onMounted, PropType, reactive } from 'vue'
  import { Resizable } from 'resizable-dom'
  import {
    CommonNodeTypeEnum,
    HighNodeTypeEnum,
    LaneNodeTypeEnum,
    ToolsTypeEnum
  } from '../type/enums'
  import { INode, ILink, ITool, NodesType } from '../type/index'

  const props = defineProps({
    select: {
      type: Object as PropType<INode | ILink>,
      default: () => ({})
    },
    selectGroup: {
      type: Array as PropType<INode[]>,
      default: () => []
    },
    config: {
      type: Object,
      default: () => ({})
    },
    node: {
      type: Object as PropType<INode>,
      default: () => ({})
    },
    plumb: {
      type: Object,
      default: () => ({})
    },
    currentTool: {
      type: Object as PropType<ITool>,
      default: () => ({})
    },
    isEdit: {
      type: Boolean,
      default: true
    }
  })

  const emits = defineEmits([
    'update:select',
    'update:selectGroup',
    'alignForLine',
    'updateNodePos',
    'hideAlignLine',
    'isMultiple',
    'showNodeContextMenu'
  ])

  // 流程配置
  const flowConfig = reactive(props.config)

  // 当前节点信息
  const currentNode = reactive(props.node)

  // 当前选择的节点
  const currentSelect = ref(props.select)

  // 当前选择的节点组
  const currentSelectGroup = ref(props.selectGroup)

  // 设置ICON
  function setIcon(type: NodesType) {
    switch (type) {
      case CommonNodeTypeEnum.COMMON:
        return 'UserOutlined'
      case CommonNodeTypeEnum.FREEDOM:
        return 'SyncOutlined'
      case HighNodeTypeEnum.CHILD_FLOW:
        return 'ApartmentOutlined'
      default:
        return 'ToolOutlined'
    }
  }

  // 设置鼠标样式
  function setCursor(type: ToolsTypeEnum) {
    switch (type) {
      case 'drag':
        return 'move'
      case 'connection':
        return 'crosshair'
      default:
        return 'default'
    }
  }

  // 初始节点拖拽
  function registerNode() {
    props?.plumb?.draggable(currentNode.id, {
      containment: 'parent',
      handle: (e, el: HTMLElement) => {
        // 判断节点类型
        let possibles =
          el?.parentNode?.querySelectorAll(
            '.common-circle-node,.common-rectangle-node,.common-diamond-node,.lane-text-div'
          ) ?? []

        for (let i = 0; i < possibles?.length; i++) {
          if (possibles[i] === el || e?.target?.className === 'lane-text')
            return true
        }

        return false
      },
      grid: flowConfig.defaultStyle.alignGridPX,
      drag: (e) => {
        if (flowConfig.defaultStyle.isOpenAuxiliaryLine) {
          emits('alignForLine', e)
        }
      },
      stop: (e) => {
        currentNode.x = e.pos[0]
        currentNode.y = e.pos[1]

        // 是否为组
        if (currentSelectGroup.value.length > 1) {
          // 更新组节点信息
          emits('updateNodePos')
        }
        // 隐藏辅助线
        emits('hideAlignLine')
      }
    })

    if (
      currentNode.type === LaneNodeTypeEnum.X_LANE ||
      currentNode.type === LaneNodeTypeEnum.Y_LANE
    ) {
      let node = document.querySelector('#' + currentNode.id) as HTMLElement
      new Resizable(
        node,
        {
          handles: ['e', 'w', 'n', 's', 'nw', 'ne', 'sw', 'se'],
          initSize: {
            // 泳道可以缩放的范围
            maxWidth: 1000,
            maxHeight: 1000,
            minWidth: 100,
            minHeight: 50
          }
        },
        () => {
          currentNode.height = Math.ceil(parseInt(node.style.height))
          currentNode.width = Math.ceil(parseInt(node.style.width))
        }
      )
    }
    currentSelect.value = currentNode
    currentSelectGroup.value = []
  }

  // 点击节点
  function selectNode() {
    currentSelect.value = currentNode
    emits('isMultiple', (flag: boolean) => {
      if (!flag) {
        currentSelectGroup.value = []
      } else {
        let f = unref(currentSelectGroup).find((s) => s.id === currentNode.id)
        if (f) {
          props.plumb.addToDragSelection(currentNode.id)
          currentSelectGroup.value.push(currentNode)
        }
      }
    })
  }
  // 节点右键
  function showNodeContextMenu(e: MouseEvent) {
    emits('showNodeContextMenu', e)
    selectNode()
  }
  // 节点是否激活
  function isActive() {
    if (!unref(currentSelect)) {
      return false
    }
    if (unref(currentSelect).id === currentNode.id) return true
    let f = unref(currentSelectGroup).find((n) => n.id === currentNode.id)
    return !!f
  }

  watch(
    () => props.select,
    (val) => {
      currentSelect.value = val
    },
    { deep: true }
  )

  watch(
    () => currentSelect.value,
    (currentSelect) => {
      emits('update:select', currentSelect)
    }
  )

  watch(
    () => props.selectGroup,
    (val) => {
      currentSelectGroup.value = val
    }
  )

  watch(
    () => currentSelectGroup.value,
    (currentSelectGroup) => {
      emits('update:selectGroup', currentSelectGroup)
    }
  )

  onMounted(() => {
    if (!props.isEdit) return
    registerNode() // 不执行此方法时流程图不可编辑
  })
</script>

<style lang="scss" scoped>
  .common-circle-node {
    position: absolute;
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #777;
    border-radius: 50%;
    background-color: #f4f6fc;
    white-space: nowrap;
    box-shadow: 2px 2px 5px #ddd;

    &:hover {
      background-color: #f4f6fcb0;
      z-index: 2;
    }

    &.active {
      outline: 2px dashed #409eff;
      outline-offset: 0;
    }

    &.isStart {
      background-color: #65cf38;
      color: #fff;
    }

    &.isEnd {
      background-color: #f50;
      color: #fff;
    }
  }

  .common-rectangle-node {
    position: absolute;
    height: 40px;
    width: 120px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #777;
    border-radius: 5px;
    background-color: #f4f6fc;
    white-space: nowrap;
    box-shadow: 2px 2px 5px #ddd;

    &:hover {
      background-color: #f4f6fcb0;
      z-index: 2;
    }

    &.active {
      outline: 2px dashed #409eff;
      outline-offset: 0;
    }
  }

  .child-node {
    border: 1px solid #909b6f;
    border-radius: 5px;
    background-color: #d4ef84;
  }

  .common-diamond-node {
    position: absolute;
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #777;
    border-radius: 3px;
    background-color: #f4f6fc;
    transform: rotate(45deg);
    white-space: nowrap;

    &::before {
      position: absolute;
      content: '网关';
      transform: rotate(-45deg);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &:hover {
      background-color: #f4f6fcb0;
      z-index: 2;
    }

    &.active {
      outline: 2px dashed #409eff;
      outline-offset: 0;
    }
  }

  .common-x_lane-node {
    position: absolute;
    text-align: center;
    border: 1px solid #777;
    border-radius: 2px;
    z-index: -1;
    box-shadow: 2px 2px 5px #ddd;

    &.active {
      outline: 2px dashed #409eff;
      outline-offset: 0;
    }

    .lane-text-div {
      width: 18px;
      height: 100%;
      position: absolute;
      display: table;
      border-right: 1px solid #777;
      background-color: #f4f6fc;

      &:hover {
        z-index: 2;
      }

      .lane-text {
        word-wrap: break-word;
        display: table-cell;
        vertical-align: middle;
        font-size: 0.8em;
      }
    }
  }

  .common-y_lane-node {
    position: absolute;
    text-align: center;
    border: 1px solid #777;
    border-radius: 2px;
    z-index: -1;
    box-shadow: 2px 2px 5px #ddd;

    &.active {
      outline: 2px dashed #409eff;
      outline-offset: 0;
    }

    .lane-text-div {
      width: 100%;
      height: 18px;
      position: absolute;
      display: table;
      border-bottom: 1px solid #777;
      background-color: #f4f6fc;

      &:hover {
        z-index: 2;
      }

      .lane-text {
        word-wrap: break-word;
        display: table-cell;
        font-size: 0.8em;
      }
    }
  }

  .node-icon {
    position: absolute;
    top: 3px;
    left: 3px;
  }
</style>
