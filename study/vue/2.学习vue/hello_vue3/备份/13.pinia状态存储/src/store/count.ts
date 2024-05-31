import { defineStore } from "pinia";
export default defineStore('count',{
    //actions里面放置的是一个一个动作方法，用于响应组件中的动作
    actions:{
        increment(n:any){
            console.log("increment被调用了",n)
            // this是当前的store
            if(this.sum==10){
                return
            }
            this.sum+=n
            this.school="尚硅谷"
            this.address="北京"
        }
    },
    state(){
        return {
            sum:1,
            school:"atguigu",
            address:'科技园'
        }
    },
    getters:{
        bigSum(s){
            return s.sum*10
        },
        upperSchool(state){
            return this.school.toUpperCase()
        }
    }
})