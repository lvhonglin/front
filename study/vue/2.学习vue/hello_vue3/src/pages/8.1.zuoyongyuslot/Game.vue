<template>
    <div class="main">
        <h2>游戏列表</h2>
        <slot :games="games"></slot>
        <!-- <div>
            <ul>
                <li v-for="g in games" :key="g.id">{{g.name}}</li>
            </ul>
        </div> -->
    </div>
   
   
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
    import { reactive } from 'vue'
    let games=reactive([
        {id:'1',name:'英雄联盟1'},
        {id:'2',name:'英雄联盟2'},
        {id:'3',name:'英雄联盟3'},
        {id:'4',name:'英雄联盟4'}
    ])
 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
         font-size: 15px;
         text-align: center;
      
     }
     
 
 </style>