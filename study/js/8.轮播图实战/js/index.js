axios.get('./json/bannerTab.json')
.then(function(res){
  tabListShow(res)
})
.catch(function(err){
  console.log(err)
})

function tabListShow(res){
  var tabList=res.data.data
  console.log(tabList)
  var str=''
  for (let i = 0; i < tabList.length; i++) {
   str+='<div class="left_item">'+tabList[i].name+'<svg class="xiangyou" aria-hidden="true"><use xlink:href="#icon-xiangyou1"></use></svg></div>'
  }
  var banner_left=document.getElementsByClassName("banner_left")[0]
  banner_left.innerHTML=str
}
//图片部分逻辑
axios.get('./json/bannerImg.json').then(function(res){
  showBannerImg(res)
}).then(function(err){
  console.log(err)
})

function showBannerImg(res){
  var imgList=res.data.data
  var str=''
  for (let i = 0; i < imgList.length; i++) {
    str+=' <img class="banner_rigt_img" src="'+imgList[i].url+'" alt="" />'
  }
  document.getElementsByClassName('imgs')[0].innerHTML=str

  getDot()
  // 圆点的数据获取
  function getDot(){
    var dotLength=res.data.data.length
    console.log(dotLength)
    var str=''
    for (let i = 0; i < dotLength; i++) {
      str+=' <div class="banner_dot "></div>'
    }
    document.getElementsByClassName('dot_list')[0].innerHTML=str
  }

  //图片的展示设置
  var index=1
  var imgHtml=document.getElementsByClassName('banner_rigt_img')
  for (let i = 0; i < imgHtml.length; i++) {
    if(index==i){
      //opacity表示透明度
      imgHtml[i].style.opacity=1
    }else{
      imgHtml[i].style.opacity=0
    }
  }
  //图片轮播
  var timer=null
  function imgAuto(){
    timer=setInterval(function(){
      index++
      index%=imgHtml.length
      imgShow()
    },2000)
  }
  imgAuto()
  
  //更换图片
  function imgShow(){
    for (let i = 0; i < imgHtml.length; i++) {
      imgHtml[i].style.opacity=0
    }
    imgHtml[index].style.opacity=1

    dotStateChange()
  }

  //圆点选中状态切换
  function dotStateChange(){
    var banner_dot=document.getElementsByClassName('banner_dot')
    for (let i = 0; i < banner_dot.length; i++) {
      // 给标签加入active
      banner_dot[i].classList.remove('active')
    }
    banner_dot[index].classList.add('active')
  }

  // 向左点击和向右点击
  var xiangzuo_pre=document.getElementsByClassName('xiangzuo_pre')[0]
  xiangzuo_pre.onclick=function(){
    index--
    if(index<0){
      index=imgHtml.length-1
    }
    imgShow()
  }

  var xiangyou_next=document.getElementsByClassName('xiangyou_next')[0]
  xiangyou_next.onclick=function(){
    index++
    index%=imgHtml.length
    imgShow()
  }

  //圆点的点击切换
  var banner_dot=document.getElementsByClassName('banner_dot')
  for (let i = 0; i < banner_dot.length; i++) {
    banner_dot[i].onclick=function(){
      index=i
      imgShow()
    } 
  }

  
  // 鼠标悬浮交互
  xiangzuo_pre.addEventListener('mouseover',function(){
    clearInterval(timer)
  })

  xiangzuo_pre.addEventListener('mouseout',function(){
    imgAuto()
  })


}