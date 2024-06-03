<template>
    <div class="main">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <button @click="sendToy">交出玩具</button>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import { onUnmounted, ref } from 'vue';
     import emitter  from '../../utils/emitter.ts'
     let toy=ref("奥特曼")
     function sendToy(){
        emitter.emit('sendToy',toy.value)
    }
    onUnmounted(()=>{
        emitter.off('sendToy')
    })
 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
         font-size: 30px;
       
         text-align: center;
         line-height: 100px;
     }
     button{
        font-size: 30px;
     }
     
 
 </style>