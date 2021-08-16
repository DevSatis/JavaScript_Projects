const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red));

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

var orangeElementColor = getBGColor(orange);

orange.addEventListener('mouseenter',() =>{
    center.style.background = orangeElementColor;
});