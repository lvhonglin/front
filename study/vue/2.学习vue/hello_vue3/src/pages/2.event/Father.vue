<template>
    <div class="father">
        <h3>父元素</h3>
       
        <button @click="qwe">点我</button>
        <h4>子给的玩具：{{ toy }}</h4>
        <!-- 给子组件child绑定事件 -->
        <Child @send-toy="getToy"></Child>
        
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
    import { ref } from 'vue';
     import Child from './Child.vue'
     function qwe(){
        
     }
     let toy=ref('')
     function getToy(toy2:any){
        toy.value=toy2
     }
 </script>
 
 <style scoped>
 
 </style>