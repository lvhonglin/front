<template>
   <div class="main">我是about</div>
</template>

<script lang="ts">
    export default{
        name:'About'
    }
</script>
<script lang="ts" setup>
    // 当这个组件是对应路由时回触发onMounted，当路由切换到其他组件的时候
    // 会触发onUnMounted
    import {onMounted,onUnmounted} from 'vue'
    onMounted(()=>{
        console.log("挂载了")
    })
    onUnmounted(()=>{
        console.log("卸载了")
    })
</script>

<style>
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