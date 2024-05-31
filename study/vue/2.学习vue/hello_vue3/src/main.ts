import {createApp} from 'vue'
import  app from './App.vue'
// 第一步：引入pinia
import { createPinia } from 'pinia'

const app1=createApp(app)
// 第二步：创建pinia
const pinia=createPinia()
// 第三步：安装pinia
app1.use(pinia)
app1.mount('#app')