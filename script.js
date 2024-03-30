const canvas=document.getElementsByClassName('canvas');
const body=document.querySelector('body')
canvas.height=window.innerHeight
canvas.width=window.innerWidth

let thecolor='';
let lineW=5;
let prevX= null;
let prevY= null;
let draw=false;
body.style.backgroundColor="#FFFFFF";
let theInput=document.getElementById('favcolor')
theInput.addEventListener("input",function(){
    thecolor=theInput.value;
    body.style.backgroundColor=thecolor;
},false);

const ctx = canvas.getContext("2d");
ctx.linWidth=lineW


//the function for drawing
document.getElementById("ageInputId").oninput=function(){
    draw=null;
    lineW=document.getElementById('ageInputId').value;
    document.getElementById('ageOutputId').innerHTML=lineW;
    ctx.linWidth=lineW;
}

// the function for color choice
let clrs=document.querySelectorAll('color')
clrs=Array.from(clrs);
clrs.forEach(color =>{
    color.addEventListener("click",function(){
        ctx.strokeStyle=color.dataset.color;
    })
})

//clear buttom
let clearbtm=document.querySelector('.clear')
clearbtm.addEventListener("click",function(){
    ctx.clearReact(0,0,canvas.width,canvas.height)
})

//savebuttom
let savebtm=document.querySelector('.save')
savebtm.addEventListener("click",function(){
    let data=canvas.toDataURL("img/png")
    let a=document.createElement("a")
    a.href=data;
    a.download="sketch.png"
    a.click();
})

//drawing
document.addEventListener("mousedown",(e) => draw=true)
document.addEventListener("mouseup",(e) => draw=false)

document.addEventListener("mousemove",(e)=>{
    if (prevX==null || prevY==null || !draw) {
        prevX=e.clientX
        prevY=e.clientY
        return
    }
    let currentX=e.clientX;
    let currentY=e.clientY

    ctx.beginPath();
    ctx.moveTo(prevX,prevY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    prevX=currentX;
    prevY=currentY;


})