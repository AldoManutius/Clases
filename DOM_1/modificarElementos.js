"use strict"

// Lo primero es seleccionar el elemento que queremos modificar

const title = document.querySelector("h1")
console.log(title);

// Modificar el texto

title.textContent

console.log(title.textContent);

title.textContent = "He cambiado el título"

setTimeout(() => {title.textContent = "He cambiado el título otra vez"}, 2000)

// Contenido en HTML

const subtitulo = document.querySelector("h2")

subtitulo.textContent = "tiene un <span> Span </span>"

subtitulo.innerHTML = "tiene un <span> Span </span>"

console.log(subtitulo.innerHTML);

// Eliminar el contenido HTML

const section = document.querySelector("section")

console.log(section.innerHTML);

section.innerHTML = ""

// Si usamos outerHTML incluye la propia etiqueta

subtitulo.outerHTML = "<h4>Tiene un <span>span</span></h4>"

const span = document.querySelector("h4 span")
console.log(span);