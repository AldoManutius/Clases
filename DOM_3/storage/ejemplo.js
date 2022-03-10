"use strict"
let nombreGuardado = localStorage.getItem("nombre")

if(!nombreGuardado){
    const nombre = prompt("escribe tu nombre")
    
    localStorage.setItem("nombre", nombre)

    nombreGuardado = nombre;

}



const header = document.querySelector("header")

header.innerHTML = `<h1>hola ${nombreGuardado}</h1>`

/////

const input = document.querySelector("input")
window.addEventListener("beforeunload", ()=>{
    localStorage.setItem("input", input.value)
}