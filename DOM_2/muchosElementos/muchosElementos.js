"use strict"

const namesArr = [ "maria", "pepe", "jose", "julia", "esme"]
const lista = document.querySelector("ul")

// Creamos un fragment
// Es un contenedor "fantasma" Podemos interactuar con el
// Pero no contará como elemento de DM
const fragment = document.createDocumentFragment()

console.log(fragment);
// Recorremos el array
for(const name of namesArr){
    // Por cada elemento del array creamo el correspondiente DOM
    const li = document.createElement("li");
    // Añadimos el contenido
    li.textContent = name; 
    // Añadimos el elemento al fargment
    fragment.append(li)
}

// Cuando haya terminado el bucle y ya esté completo el fragment
// lo añadimos el DOM

lista.append(fragment)