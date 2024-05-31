<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <button @click="clear">清空</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
    </div>

</template>

<script lang="ts">
    export default{
        name:'LoveTalk'
    }
</script>
<script lang="ts" setup>
    import useLoveTalk from '../store/loveTalk';
    const talkStore=useLoveTalk()
    import { storeToRefs } from 'pinia';
    let {talkList}=storeToRefs(talkStore)

    // 就类似于watch
    talkStore.$subscribe((mutate,state)=>{
        console.log("保存的数据发生了变化",mutate,state)
        localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })
    function getLoveTalk(){
        talkStore.getATalk()
    }
    function clear(){
        talkStore.clear()
    }
</script>

<style scoped>
    .talk{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

</style>