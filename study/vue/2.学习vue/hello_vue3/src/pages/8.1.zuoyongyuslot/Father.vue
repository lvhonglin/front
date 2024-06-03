<template>
    <div class="father">
        <h3>父元素</h3>
        <div class="content">
            <Game>
                <template v-slot:s1="data" >
                    <span>
                        <ul>
                            <li v-for="y in data.youxi" :key="y.id">{{ y.name }}</li>
                        </ul>
                    </span>
                </template>
                
            </Game>
            <Game>
                <template #s2="data">
                    <span>
                        <ol>
                            <li v-for="y in data.youxi" :key="y.id">{{ y.name }}</li>
                        </ol>
                    </span>
                </template>
                
            </Game>
        </div>
    </div>
 </template>
 
 <script lang="ts">
     export default{
         name:'Father'
     }
 </script>
 <script lang="ts" setup>
     import Game from './Game.vue'
     import { ref,reactive } from 'vue';
    //  let games=reactive([
    //     {id:'1',name:'英雄联盟1'},
    //     {id:'2',name:'英雄联盟2'},
    //     {id:'3',name:'英雄联盟3'},
    //     {id:'4',name:'英雄联盟4'}
    //  ])
     
 </script>
 
 <style scoped>
     .content{
        display: flex;
        justify-content: space-evenly;
     }
     
     img{
        width: 100%;
     }
     
 
 </style>