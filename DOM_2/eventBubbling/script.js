"use strict"

// Event Bubbling
// Por defecto los eventos van pasadno del elemento al padre, al padre del padre... hasta llegar a html

const bubble = document.querySelector("#bubble")

const bubbleLis = bubble.querySelectorAll("li")


function handleListClick(e){
    console.log("has hecho click en la lista");
}

bubble.addEventListener("click", handleListClick)

function handleBubbleLisClick(){
    console.log("has hecho en el elemento");
}

for(const li of bubbleLis){
    li.addEventListener("click", handleBubbleLisClick)
}

// ///////

const sinBubble = document.querySelector("#sinbubble")

const sinBubble = sinBubble.querySelectorAll("li")

sinBubble.addEventListener("click, handleList-click")

function handleSinBubbleLisClick(e){
    e.stopPropagation();
    console.log("has hecho click en el elemento");
}

for(const li of sinBubbleLis)