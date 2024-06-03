<template>
    <div class="main">
        <h3>子组件</h3>
        <h4>a:{{a}}</h4>
        <h4>其他:{{$attrs}}</h4>
        <GrandChild v-bind="$attrs"></GrandChild>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Child'
     }
 </script>
 <script lang="ts" setup>
    import GrandChild from './GrandChild.vue'
    // 只接收a
    defineProps(['a'])
     
 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
       
         text-align: center;
 
     }
     
 
 </style>