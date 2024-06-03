<template>
    <div class="main">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <button @click="emit('send-toy',toy)">测试</button>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import { ref } from 'vue';
     import { defineEmits } from 'vue';
     let toy=ref('奥特曼')
    //  声明事件
     const emit=defineEmits(['send-toy'])


 </script>
 
 <style scoped>
 
     .main{
        margin-top: 10px;
         border: 1px solid black;
         color: white;
         background: gray;
         font-size: 30px;
         text-align: center;

     }
     
 
 </style>