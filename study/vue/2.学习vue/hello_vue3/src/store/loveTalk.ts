import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
export default defineStore('loveTalk',{
    actions:{
        async getATalk(){
            let {data:{content}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 安装随机生成id，npm i nanoid
            this.talkList.unshift({id:nanoid(),title:content})
        },
        clear(){
            this.talkList=[]
        }
    },
    state(){
        return {
            talkList:JSON.parse(localStorage.getItem('talkList'))||[]
        }
    }
})