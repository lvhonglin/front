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
                    // 子集是不用写斜杠的不用写成/detail,
                    // content后面的这个?标识这个字段可传可步传,否则会报错
                    path:'details',
                    component:Details,
                    name:"详情",
                    meta:{showRouterView:true},

                    // 第一种写法:将路由收到的所有params参数作为props传给路由组件
                    // props:true

                    // 第二种写法:可以自己决定将什么作为props传给子组件
                    props(route){
                        return route.query
                    }

                    // 第三种写法:把每一组key-value作为props传给Detail组件
                    // props:{
                    //     id:"mockId",
                    //     title:"mockTitle",
                    //     content:"mockContent"
                    // }
                }
            ]
        },
        {
            // 默认重定向
            path:'/',
            redirect:'/home'
        }
    ]
})
export default router