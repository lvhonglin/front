<template>
     <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/details?id=${item.id}&title=${item.title}&content=${item.content}`">{{item.title}}</RouterLink> -->
                
                <!-- 第二种写法 -->
                <RouterLink :to="{
                    // path:'/news/details',可以这么写
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
            <RouterView></RouterView>
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
        {id:"4",title:"好消息",content:"快过年了"},
        ])
    import { RouterView,RouterLink } from 'vue-router'
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