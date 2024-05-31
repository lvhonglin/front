<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>
<script lang="ts">
    export default{
        name:'Person'        
    }
</script>

<script lang="ts" setup>
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
    let sum=ref(0)
    function add(){
        sum.value+=1
    }
    //创建
    console.log("创建")
    //挂载
    onBeforeMount(()=>{
        console.log("挂载前")
    })
    onMounted(()=>{
        console.log("挂载后")
    })
    onBeforeUpdate(()=>{
        console.log("更新前")
    })
    onUpdated(()=>{
        console.log("更新后")
    })
    onBeforeUnmount(()=>{
        console.log("卸载前")
    })
    onUnmounted(()=>{
        console.log("卸载后")
    })
</script>

<!-- scoped标识只作用当前的.vue的样式，不会影响其他的 -->
<style scoped>

    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 10px;
      
    }
   
</style>