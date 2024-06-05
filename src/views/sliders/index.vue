<template>
  <div class="c_card">
    <Switchs
      style="margin: 10px 0; height: 30px"
      :tabs-data="switchOptions"
      @handle-change="handleChange"
    />
    <div class="basic">
      <div v-for="(item, index) in list" :key="index" class="slider-demo-block">
        <span class="demonstration">{{ item.name }}</span>
        <Slider v-model:value="item.value" :color="item.color" :sign="index" />
      </div>
    </div>
    <!-- <div class="slider-demo-block" v-for="{ item, index } in list" :key="index">
      <span class="demonstration">{{ item.name }}</span>
      <Slider v-model:value="item.value" :color="item.color" :sign="index" />
    </div> -->
    <!-- <div class="slider-demo-block">
      <span class="demonstration">通货膨胀：</span>
      <Slider v-model:value="inflation" color="#0ddaa7" sign="1" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">货币政策：</span>
      <Slider v-model:value="currency" color="#f9ce5a" sign="2" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">信贷活动：</span>
      <Slider v-model:value="credit" color="#5ab2f9" sign="3" />
    </div> -->
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import Switchs from './components/Switchs.vue'
  import Slider from './components/Slider.vue'

  const switchOptions = reactive([
    {
      id: 0,
      name: '宏观',
      value: 't1',
      active: true
    },
    {
      id: 1,
      name: '中观',
      value: 't2',
      active: false
    }
  ])

  const list = ref([
    {
      name: '1111：',
      type: 'growth',
      color: 'linear-gradient(270deg, #FF9C12 0%, rgba(253,114,25,0.32) 100%)',
      value: 3
    },
    {
      name: '2222：',
      type: 'growth',
      color: '#0ddaa7',
      value: -1
    },
    {
      name: '3333：',
      type: 'currency',
      color: '#f9ce5a',
      value: 2
    },
    {
      name: '4444：',
      type: 'credit',
      color: '#5ab2f9',
      value: 1
    }
  ])

  const growth = ref(0)
  const inflation = ref(-2)
  const currency = ref(3)
  const credit = ref(2)

  const handleChange = (val) => {
    console.log(val.id, 'val')
  }
</script>

<style lang="scss" scoped>
  .c_card {
    background: #fff;
  }

  .slider-demo-block {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
  .demonstration {
    font-size: 14px;
    // color: var(--el-text-color-secondary);
    line-height: 44px;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
  }
  .slider {
    flex: 1;
  }
  .slider-demo-block .demonstration + .el-slider {
    flex: 1;
  }
</style>
