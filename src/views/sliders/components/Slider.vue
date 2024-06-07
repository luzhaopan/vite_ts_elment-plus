<template>
  <div class="progress-contaioner">
    <el-slider
      :model-value="value"
      :class="`slider${props.sign}`"
      :max="max"
      :min="min"
      @input="handleChange"
    />
  </div>
</template>

<script setup>
  import { nextTick, onMounted } from 'vue'

  const props = defineProps({
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 3
    },
    min: {
      type: Number,
      default: -3
    },
    color: {
      type: String,
      default: '#FF9C12'
    },
    sign: {
      type: String,
      default: '0'
    }
  })

  const emit = defineEmits(['update:value'])

  // 预设滑动条颜色数组
  // const sliderBarColors = [
  //   "linear-gradient(270deg, #FF9C12 0%, rgba(253,114,25,0.32) 100%)",
  //   "linear-gradient(270deg, #FFD570 0%, rgba(255,161,101,0.32) 100%)",
  //   "linear-gradient(270deg, #FF6600 0%, rgba(253,114,25,0.32) 100%)"
  // ]

  // 预设滑块颜色数组
  // const sliderButtonColors = ["#FF9C12", "#FCD270", "#F86402"]

  const computedBarColor = () => {
    const sliderBar = document.querySelector(
      `.slider${props.sign} .el-slider__bar`
    )
    const sliderButton = document.querySelector(
      `.slider${props.sign} .el-slider__button`
    )
    sliderBar.style.background = props.color
    sliderButton.style.borderColor = props.color
    sliderButton.style.setProperty('--slider-color', props.color)
  }

  const handleChange = (val) => {
    emit('update:value', val)
  }

  onMounted(() => {
    nextTick(() => {
      computedBarColor()
    })
  })
</script>

<style scoped lang="scss">
  .progress-contaioner {
    /*声明一个变量*/
    --slider-color: #0000;

    width: 100%;
    height: 100%;
  }

  :deep(.slider-demo-block .el-slider) {
    margin-top: 0.44rem;
    margin-bottom: 1.63rem;
    height: 0.25rem;

    /* 滑动条颜色 */
    .el-slider__bar {
      // background: linear-gradient(270deg, #ff9c12 0%, rgba(253, 114, 25, 0.32) 100%);
      border-radius: 0.13rem;
    }

    /* 滑块颜色 */
    .el-slider__button {
      // border-color: #ff9c12;
      background: rgba(79, 49, 7, 0.48);

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--slider-color);
      }
    }

    /* 滑动轨颜色 */
    .el-slider__runway {
      background-color: rgba(47, 47, 47, 0.6);
    }
  }

  .progress-info {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    font-size: 0.75rem;
  }
  .proportion-maximums {
    color: rgba(255, 255, 255, 0.5);
  }
  .proportion-unit {
    font-size: 0.5rem;
    margin-left: 0.25rem;
  }
</style>
