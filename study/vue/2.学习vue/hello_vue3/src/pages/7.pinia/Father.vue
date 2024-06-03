<template>
    <div class="father">
        <h3>父元素</h3>
        <Child></Child>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Child from './Child.vue'
 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
         font-size: 30px;
         height: 100px;
         text-align: center;
         line-height: 100px;
     }
     
 
 </style>