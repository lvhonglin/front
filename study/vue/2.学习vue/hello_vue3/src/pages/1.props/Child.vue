<template>
    <div class="main">    
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>父给的车：{{ car }}</h4>
        <button @click="sendToy(toy)">把玩具给父亲</button>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import {ref} from 'vue'
     let toy=ref('奥特曼')
     import { DefineProps } from 'vue';
     defineProps(['car',"sendToy"])
     let props=function fasong(){
        console.log(props)
     }

 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
         font-size: 30px;
         text-align: center;
     }
     button{
        font-size: 30px;
     }
     
 
 </style>