import {createApp} from 'vue'
import  app from './App.vue'
// 第一步：引入pinia
import { createPinia } from 'pinia'
import router from './router'
const app1=createApp(app)

// 第三步：安装pinia
app1.use(router)
app1.mount('#app')