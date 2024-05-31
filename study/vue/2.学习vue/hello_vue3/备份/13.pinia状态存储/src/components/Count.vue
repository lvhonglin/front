<template>
    <div class="count">
        <h2>当前求和为：{{sum}}，放大10倍：{{ bigSum }}</h2>
        <h3>欢迎来到：{{ school }}，坐落于：{{ address }}</h3>
        <!-- .number表示转成number -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Count'
     }
 </script>
 <script lang="ts" setup>
    import {ref} from 'vue'
    import useCountStore from '../store/count'
    import { storeToRefs } from 'pinia';
    const countStore=useCountStore()
    let {sum,school,address,bigSum}=storeToRefs(countStore)

    //数据

    let n=ref(1) //n是用户选择的数字

    function add(){
        // 第一种修改方式
        // countStore.sum+=n.value
        // countStore.school="尚硅谷"
        // countStore.address="北京"
        // 第二种修改方式
        // countStore.$patch({
        //     sum:888,
        //     school:"尚硅谷",
        //     address:'北京'
        // })
        // 第三种修改方式
        countStore.increment(n.value)
    }
    function sub(){
        countStore.sum-=n.value
    }
 </script>
 
 <style scoped>
     
    .count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;

    }
    select,button{
        margin: 0 5px;
        height: 25px;
    }
 </style>