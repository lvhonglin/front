//创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
//第二步：创建路由器
// 引入要呈现的组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Details from '../pages/Details.vue'
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:"主页",
            path:'/',
            component: Home
        },
        {
            name:"主页",
            path:'/home',
            component: Home
        },
        {   
            name:"关于页",
            path:'/about',
            component: About
        },
        {
            name:"新闻页",
            path:'/news',
            component: News,
            children:[
                {
                    // 子集是不用写斜杠的不用写成/detail
                    path:'details',
                    component:Details,
                    name:"详情"
                }
            ]
        },
    ]
})
export default router