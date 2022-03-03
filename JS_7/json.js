"use strict"

// JavaScript Object Notation

// json es un string que representa objetos (u otros valores de JS)

// Convertir elementos a json
// JSON.stringify()

const user = {
    nombre: "Zoe",
    apellido: "Porta"
}

console.log(user);
console.log(typeof user);

const userJSON = JSON.stringify(user);

console.log(userJSON);
console.log(typeof userJSON);

