<template>
    <div class="news-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Details'
    }
</script>
<script lang="ts" setup>
    import { DefineProps } from 'vue';
    defineProps(['id','title','content'])
</script>

<style scoped>
    .news-list{
        padding: 10px;
    }
    li{
        list-style-type: none;
        margin-top: 10px;
    }

    
</style>