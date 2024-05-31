<template>
    <div class="person">
        <h2>一辆：{{ car.brand }}车，价值：{{ car.price }}万</h2>
        <h2>一辆：{{ car2.brand }}车，价值：{{ car2.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个名字</button>
        <br>
        <button @click="changeCarReactive">修改car,reactive</button>
        <br>
        <button @click="changeCarRef">修改car,ref</button>
        <br>
        <p>学习toRefs</p>
        <h2>一辆：{{ car3.brand }}车，价值：{{ car3.price }}万</h2>
        <button @click="changeToRef">修改汽车价格</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person'
        
    }
</script>
<script lang="ts" setup>
    import {ref,reactive,toRefs,toRef} from 'vue'
    let car=reactive({brand:"奔驰",price:300})
    let car2=ref({brand:"奔驰",price:300})
    let games=ref([{id:"111",name:"王者荣耀"},{id:"222",name:"原神"}])

    console.log(car)
    console.log(games)
    function changePrice(){
        // 如果是reactive定义的话直接.price，如果是ref的话，需要.value.price
        car.price+=10
    }
    
    function changeFirstName(){
        games.value[0].name="流星蝴蝶剑"
    }

    function changeCarReactive(){
        // 如果当前用reactive，如果更新对象需要如下
        Object.assign(car,{brand:"宝马",price:123})
    
    }
    function changeCarRef(){
       
        //如果当前用ref，如果更新对象需要如下
        car2.value={brand:"宝马",price:123} 
    }

    // toRefs就是把car3这个里面的每一个属性，都转成ref对象，
    // 所以brand和price都是ref对象，读写都需要用.value
    let car3=reactive({brand:"奔驰",price:300})
    let {brand:b,price}=toRefs(car3)
    // toRef是只把某一个属性，转成ref对象
    let nl=toRef(car3,'price')
    console.log(nl)
    function changeToRef(){
        b.value+='~'
        price.value++
    }

</script>

<style>

    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 10px;
    }
    li{
        font-size: 20px;
    }
</style>