<template>
    <div class="person">
        <ul>
            <li v-for="tmp in list" :key="tmp.id"> {{ tmp.name }}-{{ tmp.age }}</li>

        </ul>
    </div>

    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
</template>
<script lang="ts">
    export default{
        name:'Person'        
    }
</script>

<script lang="ts" setup>
    import {type PersonInter,type Persons} from '../types'
    
    let person:PersonInter={
        id:"asdasd",
        name:"张三",
        age:60
    }
   
    let personList:Persons=[
        {id:'dasd',name:"张三",age:60}
    ]
    import { defineProps } from 'vue';
    
    // 接收a，同时将props保存起来
    let x=defineProps(['a','b','d','e','f','list'])
    console.log(x)

    // 用泛型约束，只收取一个Persons的类型，如果传入的不是则控制台会有提示
    // defineProps<{list:Persons}>()
    
    //如果list后面加了？，标识Persons长度是空，不会报错
  

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