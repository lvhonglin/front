<template>
    <div class="main">
        <h3>我是child1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>书籍：{{ book }}本</h4>
        <button @click="minusHouse($parent)">干掉父亲一套房产</button>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Child1'
     }
 </script>
 <script lang="ts" setup>
     import { ref } from 'vue';
     //数据
     let toy=ref('奥特曼')
     let book=ref(3)
    function minusHouse(v:any){
        v.house--
    }

     defineExpose({toy,book})
 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
         text-align: center;

     }
     
 
 </style>