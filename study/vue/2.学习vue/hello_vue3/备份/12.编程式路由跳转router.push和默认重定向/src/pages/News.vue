<template>
     <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/details/${item.id}/${item.title}/${item.content}`">{{item.title}}</RouterLink> -->
                <button @click="showNewDetails(item)">查看新闻</button>
                <!-- 第二种写法 -->
                <RouterLink :to="{
                    name:'详情',
                    query:{
                        id:item.id,
                        title:item.title,
                        content:item.content
                    }
                }">{{item.title}}</RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <!-- 这个v-if和v-else是当路由未渲染时的默认展示,需要在index.ts对应的路由
            加上 meta:{showRouterView:true}, -->
            <RouterView v-if="$route.meta.showRouterView"></RouterView>
            <div v-else class="default-background">
                <h2>当RouterView没有被渲染时的默认展示</h2>
            </div>
        </div>
     </div>
</template>

<script lang="ts">
    export default{
        name:'News'
    }
</script>
<script lang="ts" setup>
    import {reactive} from 'vue'
    const newsList=reactive([
        {id:"1",title:"很好的抗癌食物",content:"西兰花"},
        {id:"2",title:"如何一夜暴富",content:"学it啊"},
        {id:"3",title:"震惊，万万没想到",content:"明天是周一"},
        {id:"4",title:"好消息"},
        ])
    import { RouterView,RouterLink } from 'vue-router'
    import { useRouter } from 'vue-router';
    var router=useRouter()
    function showNewDetails(news:any){
        //RouterLink的to里面怎么写,这个push的参数就怎么写
        router.push({
            name:'详情',
            query:{
                id:news.id,
                title:news.title,
                content:news.content
            }
        })
    }
</script>

<style scoped>
    .news{
        display: flex;
        height:300px;
    }
    .news-content{
        margin-left:100px ;
        border: 1px solid red;
        width: 60%;
    }
    ul{
        /* list-style-type: none; */
    }
    a{
        text-decoration: none;
    }
</style>