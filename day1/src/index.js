// const {mult} = require("./calc")
import{mult,add} from "./calc";
import ("./index.css");
import img from './image.png'
console.log(add(5,2))
console.log(mult(5,2));

const display = document.getElementById("display");

const displayText = document.createElement("div")
display.appendChild(displayText);

const text = document.getElementById("text");
const typetext = document.createElement('textarea')

document.querySelector("#button").addEventListener("click",() =>{
    displayText.innerHTML = typetext.value
    console.log("k")
})

text.append(typetext)


const logo= document.querySelector("#logo");
console.log("shubha")
const pngimage= document.createElement("img");
pngimage.setAttribute("src", img)
pngimage.setAttribute("class", "imglogo")

logo.append(pngimage)