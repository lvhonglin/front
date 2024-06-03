import mitt from "mitt";
//调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter=mitt()
// //绑定事件
// emitter.on('test1',()=>{
//     console.log("test1被调用了")
// })
// emitter.on('test2',()=>{
//     console.log("test2被调用了")
// })
// //触发事件
// setInterval(()=>{
//     emitter.emit('test1')
//     emitter.emit('test2')
// },1000)
// //解绑
// setTimeout(()=>{
//     emitter.off('test1')

// },3000)
// setTimeout(()=>{
//     //清空所有
//     emitter.all.clear()
// },5000)

export default emitter