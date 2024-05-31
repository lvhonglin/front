<template>
    <div class="main">我是home</div>
</template>

<script lang="ts">
    export default{
        name:'Home'
    }
</script>
<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const router=useRouter()
    setTimeout(()=>{
        console.log('3秒钟跳转到新闻')
        router.push('/news')
    },3000)
    
    
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