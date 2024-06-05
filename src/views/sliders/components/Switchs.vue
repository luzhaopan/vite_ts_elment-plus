<template>
  <div class="container-switch" style="max-width: 715px">
    <div ref="switch" class="switch">
      <div
        ref="bg"
        class="bg"
        style="transition: all 300ms ease 0s"
        :style="{
          top: bgOffset.offsetTop + 'px',
          width: bgOffset.offsetWidth + 'px',
          left: bgOffset.offsetLeft + 'px'
        }"
      />
      <div
        v-for="item in tabsData"
        :key="item.id"
        ref="options"
        class="switch-item"
        :class="{ active: item.active }"
        @click="handleClick(item)"
      >
        <span class="label">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Switchs",
  props: {
    tabsData: {
      type: Array,
      default: function () {
        return [
          {
            id: 0,
            name: "全部",
            active: true
          }
        ]
      }
    }
  },
  data() {
    return {
      bgOffset: {
        offsetLeft: 0,
        offsetWidth: 0,
        offsetTop: 0
      },
      value: 0
    }
  },
  watch: {
    value() {
      this.$nextTick(function () {
        var e = this.$refs.options[this.value]
        if (e) {
          var i = e.offsetLeft
          var n = e.offsetWidth
          var a = e.offsetTop
          this.bgOffset = {
            offsetLeft: i,
            offsetWidth: n,
            offsetTop: a
          }
        } else {
          this.bgOffset = {
            offsetLeft: 0,
            offsetWidth: 0,
            offsetTop: 0
          }
        }
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getInit()
    })
  },
  methods: {
    getInit() {
      var e = this.$refs.switch
      e.scrollWidth > e.clientWidth && (this.isScroll = !0)
      var i = document.createElement("div")
      i.style.visibility = "hidden"
      i.style.position = "absolute"
      i.style.zIndex = "-9999"
      i.style.top = "-9999px"
      i.appendChild(this.$el.cloneNode(!0))
      document.body.appendChild(i)
      var n = i.querySelectorAll(".switch-item")[this.value]
      if (n) {
        var a = n.offsetLeft
        var s = n.offsetWidth
        var o = n.offsetTop
        this.bgOffset = {
          offsetLeft: a,
          offsetWidth: s,
          offsetTop: o
        }
        setTimeout(() => {
          this.$refs.bg.style.transition = "all ease 300ms"
        }, 0)
      }
      document.body.removeChild(i)
    },
    handleClick(item) {
      this.value = item.id
      this.tabsData.forEach((ele) => {
        if (ele.id === item.id) {
          ele.active = true
        } else {
          ele.active = false
        }
      })
      this.$emit("handle-change", item)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-switch {
  position: relative;
  display: inline-block;
  max-width: 100%;
  height: 44px;
  background-color: #f4f6fb;
  border-radius: 24px;
  .switch {
    display: inline-flex;
    align-items: center;
    height: 100%;
    position: relative;
    overflow-x: auto;
    padding: 4px 6px;
    width: 100%;
    .bg {
      position: absolute;
      background: linear-gradient(90deg, #7897e0, #435ebe);
      box-shadow: 0 6px 12px 0 rgb(24 38 78 / 20%);
      border-radius: 20px;
      height: calc(100% - 8px);
    }
    .switch-item {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 14px;
      height: 100%;
      padding: 0 20px;
      cursor: pointer;
      transition: color 0.3s ease;
      white-space: nowrap;
      .label {
        display: flex;
        align-items: center;
      }
    }
    .active {
      color: #fff;
    }
  }
}
</style>
