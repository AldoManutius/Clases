"use strict"
const elementos = document.querySelectorAll("li")
console.log(elementos);

// Leer clase

console.log(elementos[2].classList);
// Devuelve un array con todas la clases

// Añadir clases



elementos[7].classList.add("destacado", "rojo", "grande")

// Quitar clases

elementos[7].classList.remove("rojo")

// Poner la clase si no está, quitarla si está

elementos[0].classList.toggle("grande")

elementos[5].classList.toggle("destacado")
elementos[5].classList.toggle("rojo")

// Comprobar si tiene una clase
console.log(elementos[7].classList.contains("rojo"));

// Sustituir una clase por otra

elementos[2].classList.replace("destacado", "rojo")