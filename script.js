1. //Colour changing APp
 
let element = document.querySelectorAll(".square")
const singleSquare = element.forEach((square)=>{
square.addEventListener('click',function(){
    let color = square.id;
    document.body.style.backgroundColor = color;
})
})
