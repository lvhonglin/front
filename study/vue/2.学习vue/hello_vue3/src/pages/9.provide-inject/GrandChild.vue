<template>
    <div class="main2">
        <h3>我是孙子</h3>
        <h4>银子：{{ money }}</h4>
        <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
        <button @click="updateMoney(1)">修改爷爷money</button>
        <button @click="updateMoney2(1)">修改爷爷money方式2</button>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'GrandChild'
     }
 </script>
 <script lang="ts" setup>
    import { inject } from 'vue';
    let {money,updateMoney}=inject('moneyContext')
    // {brand:'未知',price:0}这个是设置默认值
    let car=inject('che',{brand:'未知',price:0})
    function updateMoney2(m:number){
        money.value++
    }
 </script>
 
 <style scoped>
     .main2{
         border: 1px solid black;
         color: white;
         background: blue;
    
         text-align: center;
    
     }
     button{
        font-size: 30px;
        margin: 10px;
     }
     
 
 </style>