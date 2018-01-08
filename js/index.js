//logo mouse
let logo=document.getElementsByClassName("header-logo-container")[0]
logo.onmouseover=function(){
  document.getElementsByClassName("header-logo-list")[0].style.display="block"
}
logo.onmouseout=function(){
  document.getElementsByClassName("header-logo-list")[0].style.display="none"
}
//time
setInterval(function(){
  let date =new Date()
  document.getElementsByClassName("time")[0].innerHTML=date
},1000)
//fileManager
let fileManager=document.getElementsByClassName("file-manager")[0]
let fileManagerHeader=document.getElementsByClassName("file-manager-header")[0]
let fileManagerIcon=document.getElementsByClassName("icon-first")[0]
fileManagerIcon.onclick=function(){
  fileManager.style.display="flex"
}
let fileManagerClose=document.getElementsByClassName("file-manager-header-close")[0]
fileManagerClose.onclick=function(){
  fileManager.style.display="none"

}
//fileManager mouse & move
fileManagerHeader.onmousedown=function(e){
  var startX=e.clientX-fileManager.offsetLeft
  var startY=e.clientY-fileManager.offsetTop
  document.onmousemove=function(e){
    fileManager.style.left=e.clientX-startX+"px"
    fileManager.style.top=e.clientY-startY+"px"
    //window up to max
    if((e.clientY)/document.body.clientHeight<0.06){
      fileManager.style.top='5%'
      fileManager.style.left="0px"
      fileManager.style.width="100vw"
      fileManager.style.height="95%"
    }else{
      fileManager.style.width="60vw"
      fileManager.style.height="30vw"
    }
    //window left right to max
    if(e.clientX/document.body.clientWidth<0.01){
      fileManager.style.top="5%"
      fileManager.style.left="0"
      fileManager.style.width="50vw"
      fileManager.style.height="95%"
    }
    if(e.clientX/document.body.clientWidth>0.99){
      fileManager.style.top="5%"
      fileManager.style.left="50vw"
      fileManager.style.width="50vw"
      fileManager.style.height="95%"
    }
  }
  document.onmouseup=function(){
    document.onmousemove=null
    document.onmouseup=null
  }
}
//fileManager iframe
document.getElementById("file-iframe-input").onfocus=function(){
  document.getElementById("file-iframe").select()
}
document.getElementById("file-iframe-input").onchange=function(e){
    e.preventDefault()
    let fileInputValue="http://"+e.target.value
    document.getElementById("file-iframe").src=fileInputValue
}
document.getElementById("file-iframe-button-mobile").onclick=function(){
  alert("developping")
}
