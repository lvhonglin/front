<template>
    <div class="category">
        <h2>{{title}}</h2>
        <slot></slot>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Category'
     }
 </script>
 <script lang="ts" setup>
     defineProps(['title'])
 </script>
 
 <style scoped>
    .category{
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
        widows: 200px;
        height: 300px;
    }
    h2{
        background-color: orange;
        text-align: center
    }
 </style>