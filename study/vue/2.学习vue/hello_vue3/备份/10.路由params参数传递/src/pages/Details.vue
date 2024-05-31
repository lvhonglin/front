<template>
    <div class="news-list">
        <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Details'
    }
</script>
<script lang="ts" setup>
    import { useRoute } from 'vue-router';
    const route=useRoute()
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