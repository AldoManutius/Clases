"use strict"

const elemento = document.querySelector("h2");

function addClass(e){
    elemento.classList.add("prueba");
}

elemento.addEventListener("mouseover", addClass);