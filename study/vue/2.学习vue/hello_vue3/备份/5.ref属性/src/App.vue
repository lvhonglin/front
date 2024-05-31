<template>
    <button @click="showLog">测试</button>
    <person ref="ren"></person>
  
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {ref} from 'vue'
    let ren=ref()
    function showLog(){
        console.log(ren.value)
        console.log(ren.value.a)
        console.log(ren.value.b)
        console.log(ren.value.c)
    }
</script>

<style>
   
</style>