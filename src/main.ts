import { createApp } from 'vue'
import '@/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import { setupStore } from '@/store'
import * as Elicons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css' // 按需引入的弹窗没有样式需单独引入
// import ElementPlus from 'element-plus'

import './permission'

const app = createApp(App)

// 引入状态管理
setupStore(app)

//全局注册elementplus icon
Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key as keyof typeof Elicons])
})

// app.use(ElementPlus)
app.use(router)
app.mount('#app')
