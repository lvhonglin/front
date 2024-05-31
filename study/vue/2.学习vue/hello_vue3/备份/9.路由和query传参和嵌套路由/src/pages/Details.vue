<template>
    <div class="news-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ route.query.title }}</li>
        <li>内容：{{ route.query.content }}</li>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Details'
    }
</script>
<script lang="ts" setup>
    import { toRef } from 'vue';
    import { useRoute } from 'vue-router';
    let route=useRoute()
    import { ToRef } from 'vue';
    let query=toRef(route,'query')
    console.log(route)
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