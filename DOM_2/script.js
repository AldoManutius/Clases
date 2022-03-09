"use strict"

// Crear elementos

const parrafo = document.createElement("p"); 
const parrafo2 = document.createElement("p");
const img = document.createElement("img");
// Se le pasa un nombre de etiqueta
// Si lo quiero añadir contenido, ya vimos como se hace
parrafo.textContent = "Hola"
parrafo2.textContent = "adios"
img.setAttribute("src", "http://source.unsplash.com/300x300")
// Si quiero poner una clase, también vimos como
// Con className reemplazo todo el atributo
parrafo.classList.add("importante")
console.log(parrafo);
// con el método add de classList, añado a mayores de lo que tenga

// Añadir elementos al DOM

// Primero tenemos que sleccionar el elemnto al que se lo quiero añadir

const main = document.querySelector("main")

console.log(main);

// Método antiguo
main.appendChild(parrafo)

// Método moderno
// Añade todos los elementos que queramos al final del padre
main.append(parrafo2, img)

main.append("test")

// Podemos añadir cosas al principio
main.prepend("Esto va al principio del main")

// Si queremos meter cosas en medio de la lista
// Seleccionamos el padre
const lista = document.querySelector("ul")

// Seleccionamos el elmeento que queremos que vaya después

const tercero = lista.querySelector(":nth-child(3)")

// Creamos el elemento que queremos añadir

const newItem = document.createElement("li")
newItem.textContent = "Entre el 2 y el 3"

// Lo añadiomos con inserBefor
lista.insertBefore(newItem, tercero)

// Como borrar elementos

// Método antiguo
// Seleccionar el padre (voy a usar la lista)

// Seleccionamos el elemento que queremos borrar

const ultimo = lista.querySelector(":last-child")

// Le decimos al padre que borre al hijo

lista.removeChild(ultimo)

// Método moderno
// Seleccionamos el elemento que queremos borrar
const primero = document.querySelector("li:first-child")
// Le decimos al elemento que se borre

primero.remove()

