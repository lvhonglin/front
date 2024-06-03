<template>
    <div class="father">
        <h3>父元素</h3>
        <h4>孩子给我的玩具：{{ toy }}</h4>
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
     import emitter  from '../../utils/emitter.ts'
    import { ref } from 'vue';
    let toy=ref('')
    emitter.on('sendToy',function(toy2:any){
        toy.value=toy2
    })
 </script>
 
 <style scoped>
     
     
 
 </style>