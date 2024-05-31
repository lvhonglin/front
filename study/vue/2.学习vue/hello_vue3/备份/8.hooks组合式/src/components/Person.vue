<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>
        <button @click="getDog">再来一只狗</button>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    </div>
</template>
<script lang="ts">
    export default{
        name:'Person'        
    }
</script>

<script lang="ts" setup>
    import useSum from '../hooks/useSum'
    import useDog from '../hooks/useDog'
    const {add,sum}=useSum()
    const {dogList,getDog}=useDog()
    // import {ref,reactive} from 'vue'
    // //使用npm i axios安装
    // import axios from 'axios';

    // //数据
    // let sum=ref(0)
    // // https://dog.ceo/api/breed/pembroke/images/random
    // let dogList=reactive([
    //     'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_3601.jpg'
    // ])
    // function add(){
    //     sum.value+=1
    // }
    // async function getDog(){
    //     try{
    //         let result= await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    //         console.log(result.data)
    //         dogList.push(result.data.message)
    //     }catch(error){
    //         alert(error)
    //     }
    // }
    
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
    img{
        height: 100px;
    }
   
</style>