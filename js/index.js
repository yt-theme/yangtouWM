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
fileManager.onmouseover=function(e){
  if(e.clientX-fileManager.offsetLeft<4){
    fileManager.style.cursor="w-resize"
  }else{
    fileManager.style.cursor="point"
  }
  fileManagerHeader.onmousedown=function(e){
    let startX=e.clientX-fileManager.offsetLeft
    let startY=e.clientY-fileManager.offsetTop
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
}
//set window size
// fileManager.onmouseover=function(e){
//   if(e.clientX-fileManager.offsetLeft<4){
//     fileManager.style.cursor="w-resize"
//   }else{
//     fileManager.style.cursor="point"
//   }
//   document.onmousedown=function(e){
//     var resizeStartX=e.clientX
//     document.onmousemove=function(e){
//       fileManager.style.left=resizeStartX-e.clientX
//       fileManager.style.width+=resizeStartX-e.clientX
//     }
//   }
// }
//drag
let fileIcon=document.getElementsByClassName("file-1")
for(let i=0;i<fileIcon.length;i++){
  fileIcon[i].onmousedown=function(e){
    let fileIconX=e.clientX
    let fileIconY=e.clientY
    onmousemove=function(e){
      fileIcon[i].style.left=e.clientX
      fileIcon[i].style.top=e.clientY
    }
    onmouseup=function(){
      document.onmousemove=null
      document.onmouseup=null
    }
  }
}
