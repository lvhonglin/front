<template>
    <div class="main">
       
        <GrandChild ></GrandChild>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Child'
     }
 </script>
 <script lang="ts" setup>
    import GrandChild from './GrandChild.vue'
   
     
 </script>
 
 <style scoped>
     .main{
         border: 1px solid black;
         color: white;
         background: gray;
         text-align: center;
 
     }
     
 
 </style>