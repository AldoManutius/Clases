"use strict"


// Seleccionar un elemento (el primero que coincida)
// Podemos seleccionar con etiqueta  con el querySelector
const titulo = document.querySelector("h1")
const subtitulo = document.querySelector("h2")
const tituloEspecial = document.querySelector("#especial")

console.log(titulo);
console.log(subtitulo);
console.log(tituloEspecial);

const pImportante = document.querySelector(".importante")
console.log(pImportante);

const segundoP = document.querySelector("article > p:nth-child(2)")
console.log(segundoP);

// Seleccionar varios elementos (iguales) a la vez (todos lo que coincidan)
// Podemos seleccionar como lo hariamos en CSS

const subtitulos = document.querySelectorAll("h2")
console.log(subtitulos);
const primerosP = document.querySelectorAll("p:first-of-type")
console.log(primerosP);

// Otro método
// Por etiqueta

const titleTag = document.getElementsByTagName("h2")
console.log(titleTag);

// Por ID. (solo devuelve un elemento)

const subEspecial = document.getElementById("especial")
console.log(subEspecial);

// Por Class

const parrafoImportante = document.getElementsByClassName("importante")
console.log(parrafoImportante);


// Movernos por el DOM

// Seleccionar el padre

const article = segundoP.parentElement;
console.log(article);

const hermanoAnterior = segundoP.previousElementSibling;
console.log(hermanoAnterior);

// Seleccionar dentre de elementos
// Una vez tengamos seleccionado el elemento contenedor podemos movernos dentro

const section = document.querySelector("section")
console.log(section);

// Es muy util para seleccionar elementos dentro de otros que ya he seleccionado


const sectionP = section.querySelector("p")
console.log(sectionP);

const span = segundoP.querySelector("span")
console.log(span);