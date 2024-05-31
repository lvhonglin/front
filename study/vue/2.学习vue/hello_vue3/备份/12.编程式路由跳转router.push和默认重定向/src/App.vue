<template>
    <div class="person">
        <!-- 路由组件比如Home.Vue、About.Vue放到views或者pages里，普通组件比如Header放入
        components里 -->
        <Header></Header>
        <!-- 导航区 -->
        <div class="navigate">
            <div>
                <RouterLink replace to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
            </div>
            <div>
                <RouterLink replace to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
            </div>
            <div>
                <RouterLink :to="{path:'/about'}" active-class="xiaozhupeiqi">关于</RouterLink>
            </div>
            <div>
                <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
            </div>
            <div>
                <RouterLink to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
            </div>
            <div>
                <RouterLink :to="{name:'关于页'}" active-class="xiaozhupeiqi">关于</RouterLink>
            </div>
            
            <!-- 也可以替换成 -->
            <!-- <a href="/home" class="active">首页</a>
            <a href="/news">新闻</a>
            <a href="/about">关于</a> -->
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <!-- 此处以后可能要展示各种组件，到底展示哪个组件，需要看路径 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
   import { RouterView ,RouterLink} from 'vue-router';
   import Header from './components/Header.vue'
</script>

<style scoped>
   .person{
        padding-top: 10px;
    }
    .title{
        background: gray;
        height: 80px;
        border-radius: 10px;
        line-height: 80px;
        align-content: center;
        text-align: center;
    }
    .navigate{
        height: 200px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    /* 给a标签设置css属性，就相当于给RouterLink设置css属性 */
    .navigate div{  
        
        height: 60px;
        text-decoration: none;
        background: white;
        width: calc(80% / 3);
        text-align: center;
        vertical-align: middle;
        position: relative
    }   
    .navigate a{
        border-radius: 5px;
        display: block;
        font-size: 30px;
        text-decoration: none;
        height: 50px;
        line-height: 50px;
        background: gray;
        width: 100px;
        color: white;
        position: absolute;
        left: 50%;
        right: 50%;
    
       
    }
    /* .navigate a{  
        
        height: 60px;
        border-radius: 5px ;
        font-size: 30px;
        border: 1px solid black;
        text-decoration: none;
        color: white;
        background: gray;
        width: 200px;
        text-align: center;
        line-height: 60px;
    }    */
    .navigate a.xiaozhupeiqi{
        color: #ffc268;
        background: #64967e;
    }
    .main-content{
        border: 1px solid black;
        height: 300px;
        border-radius: 20px;
        margin: 0px 100px;
        padding: 10px;
    }
</style>