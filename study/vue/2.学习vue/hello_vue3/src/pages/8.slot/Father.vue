<template>
    <div class="father">
        <h3>父元素</h3>
        <div class="content">
            <Category title="热门游戏列表" >
            <ul>
                <li v-for="g in games" :key="g.id">{{ g.name }}</li>
            </ul>
            </Category>
            <Category title="热门游戏列表" ></Category>
            <Category title="热门游戏列表" ></Category>
        </div>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Category from './Category.vue'
     import { ref,reactive } from 'vue';
     let games=reactive([
        {id:'1',name:'英雄联盟1'},
        {id:'2',name:'英雄联盟2'},
        {id:'3',name:'英雄联盟3'},
        {id:'4',name:'英雄联盟4'}
     ])
     let imgUrl='https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
     let videoUrl='https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
 </script>
 
 <style scoped>
     .content{
        display: flex;
        justify-content: space-evenly;
     }
     
 
 </style>