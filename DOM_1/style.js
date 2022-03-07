"use strict"

// Propiedad style

// Sirve para leer y modificar los estilos de un elemento
// Lo ideal es tener las clases creadas en css y ponerselas y quitarselas a los elementos. 
// Sin embargo podemos hacer cambios puntuales en js usando style

const title = document.querySelector("h1")

// leer estilos

console.log(title.style);

console.log(title.style.color);

console.log(title.style.backgroundColor);

console.log(window.getComputedStyle(title).backgroundColor);

// Añadir/modificar estilos

title.style.color = "white"
title.style.backgroundColor = "black"
title.style.textDecoration = "underline"

// Varios estilos a la vez. Lo cambio todo.

title.style.cssText = "backgound: cyan; text-decoration: line-through; font-family: sans-serif"

// Como style es un atributo, exactamente lo mismo de antes se puede hacer con setAttribute

title.setAttribute("style", "background: red")