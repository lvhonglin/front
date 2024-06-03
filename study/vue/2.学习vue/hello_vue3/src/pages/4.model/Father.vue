<template>
    <div class="father">
        <h3>父元素</h3>
        <!-- <input type="text" v-model="username"> -->
        <!-- <input type="text" :value="username" @input="username=(<HTMLInputElement>$event.target).value"> -->

        <!-- v-model用在组件标签上 -->
        <!-- <Child v-model="username"></Child> -->
        <!-- qwe表示将modelValue缓存qwe，将update:modelValue换成update:qwe ,这种方式好处是可以传多个进去-->
        <h4>账号：{{ username }}</h4>
        <h4>密码：{{ password }}</h4>
        <Child v-model:user="username" v-model:pwd="password"></Child>

        <!-- 上面的底层原理是如下 -->
        <!-- <Child :modelValue="username" @update:modelValue="username=$event"></Child> -->
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Child from './Child.vue'
     import { ref } from 'vue';
     let username=ref('zhangsan')
     let password=ref('test@123')
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