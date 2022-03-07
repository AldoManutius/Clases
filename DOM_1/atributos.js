"use strict"

const button = document.querySelector("button")
console.log(button);

// Leer atributos
console.log(button.getAttribute("type"));

// Añadir/modificar atributos

button.setAttribute("disabled", true)
button.setAttribute("class", "clicable")

// Comprobar si tiene el atributo

console.log(button.hasAttribute("class"));
console.log(button.hasAttribute("i"));

if(!button.hasAttribute("class")) {
    button.setAttribute("class", "lo que sea")
}

// Eliminar atributo

button.removeAttribute("disabled")

