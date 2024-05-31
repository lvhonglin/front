<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名1：<span>{{ firstName.slice(0,1).toUpperCase() }}{{ firstName.slice(1).toLowerCase() }}-{{ lastName }}</span><br>
        全名2：<span>{{ fullName}}</span><br>
        全名3：<span>{{ fullName}}</span><br>
        全名5：<span>{{ getFullName()}}</span><br>
        全名6：<span>{{ getFullName()}}</span><br>

        <button @click="changeFullName7">按钮</button>
        全名7：<span>{{ fullNameReadWrite}}</span><br>
    </div>
</template>

<script lang="ts">
    export default{
        name:'Person'
        
    }
</script>
<script lang="ts" setup>
    import {ref,computed} from 'vue'
    let firstName=ref('zhang')
    let lastName=ref('san')

    // 这里调用了2次所以会调用两下
    function getFullName(){
        console.log("如果不用计算属性会调用多次")
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1).toLowerCase()+"-"+
        lastName.value
    }

    // 这里调用了2次，但是只会调用1次
    // 这个计算属性是只读的
    let fullName=computed(function(){
        console.log("只要数据发生变化，就会重新计算，如果数据不变化比如firstName和lastName不变就不会重新计算")
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1).toLowerCase()+"-"+
        lastName.value
    })

    // 如果想要修改的话，需要修改计算属性
    // 这个计算属性是支持读写的
    var fullNameReadWrite=computed({get(){
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1).toLowerCase()+"-"+
        lastName.value
    },
    set(val){
        console.log('set',val)
        let [str1,str2]=val.split('-')
        firstName.value=str1
        lastName.value=str2
    }}
)
    function changeFullName7(){
        fullNameReadWrite.value='li-si'
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