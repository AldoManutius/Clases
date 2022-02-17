"use strict"

// condición ? valor si se cumple : valor si no se cumple

// se puede asignar el resultado de un ternario directamente a una variable

let edad = 20;

const menorMayor = edad < 18 ? "menor" : "mayor";

console.log(`La persona es ${edad < 18 ? "menor" : "mayor"}`);

let nombre = "Manolo"

// let nombre;

nombre ? console.log("hola " + nombre ) : console.log("Regístrate");;

nombre ? (nombre === "Manolo")
 ? console.log("fuera") 
 : console.log("hola " + nombre)
 :null;
 