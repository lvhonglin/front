import {createApp} from 'vue'
import  app from './App.vue'
//引入路由器
import router from './router'

const app1=createApp(app)
app1.use(router)
app1.mount('#app')