/*SHAPE*/
//collect the elements
let shape = document.querySelector(".shapeDiv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle  = document.querySelector(".btncircle")
let btntriangle = document.querySelector(".btntriangle")
let btnoval = document.querySelector(".btnoval")

//add an event to each button
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})

btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})

btncircle.addEventListener("click", function(){
    shape.className = "circle"
})

btntriangle.addEventListener("click", function(){
    shape.className = "triangle"
})

btnoval.addEventListener("click", function(){
    shape.className = "oval"
})