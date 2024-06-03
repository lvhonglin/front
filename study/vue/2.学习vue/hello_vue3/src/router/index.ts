//创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
//第二步：创建路由器
// 引入要呈现的组件
import Props from '../pages/1.props/Father.vue'
import Event from '../pages/2.event/Father.vue'
import Bus from '../pages/3.bus/Father.vue'
import Model from '../pages/4.model/Father.vue'
import AttrsListeners from '../pages/5.attrsListeners/Father.vue'
import RefChildrenParent from '../pages/6.refChildrenParent/Father.vue'
import Pinia from '../pages/7.pinia/Father.vue'
import Slot from '../pages/8.slot/Father.vue'
import Provide from '../pages/9.provide-inject/Father.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/props',
            component: Props
        },
        {
            path:'/event',
            component: Event
        },
        {
            path:'/bus',
            component: Bus
        },
        {
            path:'/model',
            component: Model
        },
        {
            path:'/attrs',
            component: AttrsListeners
        },
        {
            path:'/ref',
            component: RefChildrenParent
        },
        {
            path:'/pinia',
            component: Pinia
        },
        {
            path:'/slot',
            component: Slot
        },
        {
            path:'/provide',
            component:Provide
        },
        {
            // 默认重定向
            path:'/',
            redirect:'/props'
        }
    ]
})
export default router