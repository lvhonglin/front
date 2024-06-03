<template>
    <div class="father">
        <h3>父元素</h3>
        <h4>a:{{a}}</h4>
        <h4>b:{{b}}</h4>
        <h4>c:{{c}}</h4>
        <h4>d:{{d}}</h4>
        <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"></Child>
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
     let a=ref(1)
     let b=ref(2)
     let c=ref(3)
     let d=ref(4)

     function updateA(value:any){
        a.value+=value
     }
 </script>
 
 <style scoped>
     
 </style>