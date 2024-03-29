<script lang="tsx">
  import type { ContextMenuItem, ItemContentProps, Axis } from './typing'
  import type { FunctionalComponent, CSSProperties, PropType } from 'vue'

  const prefixCls = 'context-menu'

  const props = {
    width: { type: Number, default: 156 },
    customEvent: { type: Object as PropType<Event>, default: null },
    styles: { type: Object as PropType<CSSProperties> },
    axis: {
      // The position of the right mouse button click
      type: Object as PropType<Axis>,
      default() {
        return { x: 0, y: 0 }
      }
    },
    items: {
      // The most important list, if not, will not be displayed
      type: Array as PropType<ContextMenuItem[]>,
      default() {
        return []
      }
    }
  }

  const ItemContent: FunctionalComponent<ItemContentProps> = (props) => {
    const { item } = props
    return (
      <span
        style="display: inline-block; width: 100%; "
        class="px-4"
        onClick={props.handler.bind(null, item)}
      >
        {item.label}
      </span>
    )
  }

  export default defineComponent({
    name: 'ContextMenu',
    props,
    setup(props) {
      const wrapRef = ref(null)
      const showRef = ref(false)

      const getStyle = computed((): CSSProperties => {
        const { axis, items, styles, width } = props
        const { x, y } = axis || { x: 0, y: 0 }
        const menuHeight = (items || []).length * 40
        const menuWidth = width
        const body = document.body

        const left = body.clientWidth < x + menuWidth ? x - menuWidth : x
        const top = body.clientHeight < y + menuHeight ? y - menuHeight : y
        return {
          ...styles,
          position: 'absolute',
          width: `${width}px`,
          left: `${left + 1}px`,
          top: `${top + 1}px`,
          zIndex: 9999,
          border: '1px solid rgb(0 0 0 / 8%)',
          boxShadow: '0 0 5px rgb(0 0 0 / 8%)'
        }
      })

      onMounted(() => {
        nextTick(() => (showRef.value = true))
      })

      onUnmounted(() => {
        const el = unref(wrapRef)
        el && document.body.removeChild(el)
      })

      function handleAction(item: ContextMenuItem, e: MouseEvent) {
        const { handler, disabled } = item
        if (disabled) {
          return
        }
        showRef.value = false
        e?.stopPropagation()
        e?.preventDefault()
        handler?.()
      }

      function renderMenuItem(items: ContextMenuItem[]) {
        const visibleItems = items.filter((item) => !item.hidden)
        return visibleItems.map((item, index) => {
          const { disabled, label, children, divider = false } = item

          const contentProps = {
            item,
            handler: handleAction
          }

          if (!children || children.length === 0) {
            return (
              <el-menu-item
                disabled={disabled}
                class={`${prefixCls}__item`}
                index={index + ''}
              >
                <ItemContent {...contentProps} />
              </el-menu-item>
            )
          }
          if (!unref(showRef)) return null

          return (
            <el-sub-menu index={label} popper-class={`${prefixCls}__popup`}>
              {{
                title: () => <ItemContent {...contentProps} />,
                default: () => renderMenuItem(children)
              }}
            </el-sub-menu>
          )
        })
      }
      return () => {
        if (!unref(showRef)) {
          return null
        }
        const { items } = props
        return (
          <div class={prefixCls}>
            <el-menu
              mode="vertical"
              ref={wrapRef}
              style={unref(getStyle)}
              default-active=""
              collapse="true"
            >
              {renderMenuItem(items)}
            </el-menu>
          </div>
        )
      }
    }
  })
</script>
<style lang="scss">
  .context-menu {
    .el-menu {
      width: 116px !important;
    }
    .el-menu-item,
    .el-sub-menu {
      line-height: 30px !important;
      height: 30px !important;
    }
    .el-sub-menu .el-sub-menu__title {
      line-height: 30px !important;
      height: 30px !important;
      span {
        overflow: visible !important;
        visibility: visible !important;
        margin-top: -30px;
        margin-left: -5px;
      }
    }
    .el-sub-menu .el-icon {
      display: inline-block !important;
      margin-top: -5px !important;
      margin-right: -18px !important;
    }
    &__item {
      margin: 0px !important;
      span {
        overflow: visible !important;
        visibility: visible !important;
        margin-top: -30px;
      }
      i {
        margin-top: -30px;
      }
      &:hover {
        background-color: #f5f5f5 !important;
      }
    }
    &__popup {
      .el-menu--popup {
        min-width: 116px !important;
        width: 116px !important;
      }
      .el-sub-menu,
      .context-menu__item {
        line-height: 30px !important;
        height: 30px !important;
        span {
          overflow: visible !important;
          visibility: visible !important;
          margin-top: -2px;
        }
      }
    }
  }
</style>
