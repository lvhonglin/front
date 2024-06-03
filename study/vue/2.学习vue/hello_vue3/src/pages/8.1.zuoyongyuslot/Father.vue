<template>
    <div class="father">
        <h3>父元素</h3>
        <div class="content">
            <Game>
                <ul>
                    <li v-for="g in games" :key="g.id">{{g.name}}</li>
                </ul>
            </Game>
            <Game>
                <ul>
                    <li v-for="g in games" :key="g.id">{{g.name}}</li>
                </ul>
            </Game>
            <Game>
                <ul>
                    <li v-for="g in games" :key="g.id">{{g.name}}</li>
                </ul>
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