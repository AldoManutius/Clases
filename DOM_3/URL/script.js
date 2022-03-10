"use strict";

// La interfaz URL nos permite usar métodos específicos para URL

// Crear una nueva URL

const url = new URL(`https://es.wikipedia.org/wiki/JavaScript#Sintaxis_y_sem%C3%A1ntica`)

// Enlace entero href
console.log(url.href);
//Protocolo
console.log(url.protocol);
// Servidor
console.log(url.hostname);
// La ruta dentro del servidor
console.log(url.pathname);
// El apartado
console.log(url.hash);
// La query de búsqueda
// En este caso no hay. Más en searchParams
console.log(url.search);