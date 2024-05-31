import {ref,reactive,onMounted} from 'vue'
//使用npm i axios安装
import axios from 'axios';
export default function(){
    // https://dog.ceo/api/breed/pembroke/images/random
    let dogList=reactive(new Array<string>())
    // 这么写也行
    // let dogList=reactive([])
    async function getDog(){
        try{
            let result= await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log(result.data)
            dogList.push(result.data.message)
        }catch(error){
            alert(error)
        }
    } 

    //使用hook也可以使用钩子
    onMounted(()=>{
        getDog()
    })
    //向外部提供东西
    return {dogList,getDog}
}
