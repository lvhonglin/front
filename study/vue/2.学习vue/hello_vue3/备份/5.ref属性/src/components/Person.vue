<template>
    <div class="person">
        <h1>中国</h1>
        <!-- ref表示给，带有ref属性的打一个标识，然后使用let title2=ref()能够获取到对应的元素 -->
        <!-- 通过ref获取不会受到其他.vue的影响，比如其他也定义了一个title2不会有干扰 -->
        <!-- 如果ref放在html标签拿的是html元素,如果放在组件上获取的是组件的实例 -->
        <!-- 为什么不用id,而用ref,因为如果用id的话会有问题，因为如果引了其他的vue或者其他vue引了自身，使用id会有问题 -->
        <h2 ref="title2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出h2这个元素</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref,defineExpose} from 'vue'
    let title2=ref()
    function showLog(){
        console.log(title2.value)

        // 等同于document.getElement.innerText=""
        title2.value.innerText="上海"
    }
    let a=ref(0)
    let b=ref(1)
    let c=ref(2)
    // 将当前a,b,c暴露给外部,其他的.vue可以通过<person ref="ren"></person>,let ren=ref(),rem.value.a引用
    defineExpose({a:a,b:b.value,c:c.value})
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