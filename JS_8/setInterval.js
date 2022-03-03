"use strict";

// SetInterval(callback, tiempoMS)
// Método que ejecuta el callback cada vez que pasa el tiempo indicado

setInterval(() => {console.log("caracola")}, 1000 )

// Parar un intervalo
// para pararlo necesitamos tener nombre

const intervalo = setInterval(() => {console.log("caracola")}, 1000)

clearInterval(intervalo)

