<template>
    <div>
        <router-view></router-view>
    </div>
   
</template>

<script lang="ts">
    export default{
        name:'App'
    }
</script>
<script lang="ts" setup>
    import { RouterView,RouterLink } from 'vue-router';
</script>

<style scoped>
    

</style>