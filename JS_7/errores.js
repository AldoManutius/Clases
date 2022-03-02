"use strict";

// CREAR UN NUEVO ERROR
// Con el constructor new Error()

const miError = new Error("Este es el error por mi")
miError.code = 404;

console.log(miError);
console.log(miError.code);

// Para que funcionene los errores hay que lanzarlso con throw

throw miError

console.log("no llega hasta aquí");