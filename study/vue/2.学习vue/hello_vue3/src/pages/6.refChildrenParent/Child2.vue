<template>
    <div class="main">
        <div class="child">
            <h3>我是child2</h3>
            <h4>电脑：{{ computer }}</h4>
            <h4>书籍：{{ book }}本</h4>
        </div>
        
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Child2'
     }
 </script>
 <script lang="ts" setup>
    import { ref } from 'vue';
     //数据
     let computer=ref('联想')
     let book=ref(6)
     defineExpose({computer,book})
 </script>
 
 <style scoped>
     .main{
        display: flex;
        color: white;
        background: gray;
        border-top: 1px solid transparent;
        height: 200px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
     }
     h4 h3{
        margin: 0px;
     }
     
     
 
 </style>