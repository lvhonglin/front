<template>
    
    <person v-if="isShow"></person>
  
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref} from 'vue'
    let isShow=ref(true)
</script>

<style scoped>
   
</style>