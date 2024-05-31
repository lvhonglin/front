<template>
    
    <person a="哈哈" b="嘿嘿" :list="personList" :d="person" :e="1+1" :f="ff"></person>
  
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {reactive} from 'vue'
    import {type Persons,type PersonInter } from './types';
    let personList=reactive<Persons>([
        {id:"213123",name:"张三",age:18},
        {id:'23123',name:"张三",age:18},
        {id:'23123',name:"张三",age:18,x:213}
    ])
    let person:PersonInter={id:"123",name:"我的名字",age:11}

    let ff="我是f"
</script>

<style scoped>
   
</style>