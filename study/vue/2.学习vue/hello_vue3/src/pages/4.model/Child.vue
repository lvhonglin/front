<template>
    用户名：<input type="text" :value="user" @input="updateUsername($event)">
    密码：<input type="text" :value="pwd" @input="updatePassword($event)">
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     defineProps(['user','pwd'])
     const emit=defineEmits(['update:user','update:pwd'])
     function updateUsername(e:Event){
        emit('update:user',e.target.value)
     }
     function updatePassword(e:Event){
        emit('update:pwd',e.target.value)
     }
 </script>
 
 <style scoped>
    
    input{
        border: 2px solid black;
        background-image: linear-gradient(45deg,red,yellow,green);
        height: 30px;
        font-size: 20px;
        color: white;
    }
 </style>