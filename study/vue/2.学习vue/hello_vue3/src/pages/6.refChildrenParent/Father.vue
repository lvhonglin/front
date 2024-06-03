<template>
    <div class="father">
        <h3>父元素</h3>
        <h4>房产：{{ house }}</h4>
        <button @click="changeToy">修改child1的玩具</button>
        <button @click="changeComputer">修改child2的电脑</button>
        <button @click="getAllChild($refs)">获取所有的子组件实例对象</button>
        <Child1 ref="c1"></Child1>
        <Child2 ref="c2"></Child2>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Child1 from './Child1.vue'
     import Child2 from './Child2.vue'
     import { ref } from 'vue';
     let house=ref(4)
     let c1=ref()
     function changeToy(){
        c1.value.toy="小猪佩奇"
     }
     let c2=ref()
     function changeComputer(){
        c2.value.computer="华为"
     }
     function getAllChild(v:any){
        console.log(v)
        for(let key in v){
            v[key].book+=1
        }
     }
     defineExpose({house})
 </script>
 
 <style scoped>
    button{
        font-size: 20px;
        margin: 5px;
    }
     
 
 </style>