<template>
    <div class="father">
        <h3>父元素</h3>
        <h4>汽车：{{ car }}</h4>
        <h4>子给的玩具：{{ toy }}</h4>
        <Child :car="car" :sendToy="getToy"></Child>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Child from './Child.vue'
     import {ref} from 'vue'
     //数据
     let car=ref('奔驰')
     let toy=ref('')
     //方法
     function getToy(value:any){
        console.log('父',value)
        toy.value=value
     }
     
 </script>
 
 <style scoped>
     
     
 
 </style>