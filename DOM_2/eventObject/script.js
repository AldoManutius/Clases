"use strict"

const boton = document.querySelector("button")

/* boton.addEventListener("click", (event) => {console.log(event)})

if(event.altKey){
    console.log("click + alt");
}
if(event.ctrlKey){
    console.log("click + cpmtrol");

} */

// target

const elements = document.querySelectorAll("#target li");


function liClickHandle (e){
    console.log("target: ", e.target);
    console.log("current target: ", e.currentTarget);

    // Selecciona exactamente el elemento al que le hacemos click

const item = e.target; 
if(!item.hasAttribute("data-count")){
    item.setAttribute("data-count", 0)
}
const counter = +item.dataset.count + 1

console.log(counter);

item.setAttribute("data-count", counter)

item.textContent = `${counter} clicks`
}

// for(const li of elements){
//     li.addEventListener("click", liClickHandle)
// }

// Gracias a target podemos asisgnarle la función a algún padre

const list = document.querySelector("ul")
list.addEventListener("click", liClickHandle)