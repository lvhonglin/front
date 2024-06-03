<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>银子：{{ money }}</h4>
        <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
        <Child></Child>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Child from './Child.vue'
     import { ref,reactive,provide } from 'vue';
     let money=ref(100)
    let car=reactive({
        brand:'奔驰',
        price:100
    })
    function updateMoney(value:number){
        money.value+=value
    }
    provide('moneyContext',{money,updateMoney})
    provide('che',car)
 </script>
 
 <style scoped>
     
 </style>