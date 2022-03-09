"use strict"

// Eventos

// Método antiguo
// Utilizar la porpiedad correspondiente a cada evento

// Seleccionamos el elemento que va a lanzar el evento

const boton = document.querySelector("button")

// Por ejemplo para el evento click, usamos la propiedad .onclick

boton.onclick = () => {console.log("click");}

// al pasar el ratón, usamos la propiedad .onmouseover

boton.onmouseover = function(){
    console.log("Has pasado el ratón");
}

// Método moderno

const boton2 = document.querySelector("button:last-of-type");

// Con función anónima

boton2.addEventListener("click", () => {console.log("click al segundo")})

// Puedo añadir varias reacciones (varios lesteners) al mismo evento
// Función con nombre

const title = document.querySelector("h1")
 const titleHoverHandler = () => {title.style.color = "red"; console.log("pasate por el título") }

 title.addEventListener("mouseover", titleHoverHandler)

 title.addEventListener("mouseleave", () => {title.style.color = "black"})

function boton2clickHandler(){
    console.log("otra cosa");
}


boton2.addEventListener("click", boton2clickHandler)

// Podemos quitar un listener
// Pero el callback necesita tener nombre

boton2.removeEventListener("click", boton2clickHandler)