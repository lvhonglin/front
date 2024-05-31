<template>
    <div class="person">
        <h1>情况一：监视[ref]定义的基本类型的数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">加1</button>

        <h1>情况二：监视[ref]定义的对象类型的数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>

        <h1>情况三：监视[reactive]定义的对象类型的数据</h1>
        <h2>姓名：{{ person2.name }}</h2>
        <h2>年龄：{{ person2.age }}</h2>
        <button @click="changeName2">修改名字</button>
        <button @click="changeAge2">修改年龄</button>
        <button @click="changePerson2">修改整个人</button>

        <h1>情况四：监视[reactive]定义的对象类型的属性</h1>
        <h2>姓名：{{ person3.name }}</h2>
        <h2>年龄：{{ person3.age }}</h2>
        <h2>汽车：{{ person3.car.c1 }}、{{ person3.car.c2 }}</h2>
        <button @click="changeName3">修改名字</button>
        <button @click="changeAge3">修改年龄</button>
        <button @click="changeC13">修改第一台车</button>
        <button @click="changeC23">修改第二台车</button>
        <button @click="changeC3">修改整个车</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref,watch,reactive,toRefs,toRef} from 'vue'

    // 情况1：监视ref定义的基本类型的数据
    let sum=ref(0)
    function changeSum(){
        sum.value++
    }

    // 监视
    const stopWatch=watch(sum,(newValue,oldValue)=>{
        console.log('sum变化了',oldValue,newValue)
        // 当值大于10的时候结束监视
        if(newValue>=10){
            stopWatch()
        }
    })

    //情况2：监视ref定义的对象类型的数据
    let person=ref({
        name:"张三",
        age:18
    })
    function changeName(){
        person.value.name+="~"
    }
    function changeAge(){
        person.value.age+=1
    }
    function changePerson(){
        person.value={
            name:"李四",
            age:22
        }
    }
    //监视的是对象的地址，若想监视对象内部属性需要手动开启深度监视，就是{deep:true}这个
    // {immediate:true}表示不管数据变化了没，上来就调用一次
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
    },{deep:true,immediate:true})


    //情况3：监视reactive定义的对象类型的数据
    let person2=reactive({
        name:"张三",
        age:18
    })
    function changeName2(){
        person2.name+="~"
    }
    function changeAge2(){
        person2.age+=1
    }
    function changePerson2(){
        Object.assign(person2,{
            name:"李四",
            age:22
        })
    }
    //如果是监视的reactive默认开启了deep:true，并且无法关闭
    watch(person2,(newValue)=>{
        console.log('person变化了',newValue)
    })


     //情况4：监视reactive定义的对象类型的属性
    let person3=reactive({
        name:"张三",
        age:18,
        car:{
            c1:"奔驰",
            c2:"宝马"
        }
    })     
    function changeName3(){
        person3.name+="~"
    }
    function changeAge3(){
        person3.age+=1
    }
    function changeC13(){
        person3.car.c1="奥迪"
    }
    function changeC23(){
        person3.car.c2="大众"
    }
    function changeC3(){
        person3.car={
            c1:"雅迪",
            c2:"艾玛"
        }
    }
    // 监视响应式对象中的某个属性，使用函数式
    // 如果监听属性，最好使用函数式
    // watch(()=>{return person3.age},function(val){
    //     console.log("newValue",val)
    // })
    // 如果要监视多个可以写成如下，需要注意，监听的是数组，那么newValue也是数组
    watch([()=>{return person3.age},()=>{return person3.name}],function(newValue){
        console.log("newValue",newValue)
    })

    // 如果监视对象类型，可以直接写函数，这里的deep表示可以监控到c1和c2的变化
    watch(()=>{return person3.car},function(val){
        console.log("newValue",val)
    },{deep:true})
    let car3=toRef(person3,'car')
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
   
</style>