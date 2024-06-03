<template>
    <div class="main2">
        <h3>我是孙子</h3>
        <h4>a:{{ a }}，b:{{ b }}，c:{{ c }}，d:{{ d }}，x:{{ x }}，y:{{ y }}</h4>
        <button @click="updateA(1)">点我给爷爷的a加1</button>
        
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'GrandChild'
     }
 </script>
 <script lang="ts" setup>
     defineProps(['a','b','c','d','x','y',"updateA"])
 </script>
 
 <style scoped>
     .main2{
         border: 1px solid black;
         color: white;
         background: blue;
    
         text-align: center;
    
     }
     button{
        font-size: 30px;
     }
     
 
 </style>