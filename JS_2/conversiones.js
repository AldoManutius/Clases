"use strict";

// Conversión de string a número

// ParseInt convierte a entenro, elimina los decimales

console.log(parseInt("4"));
console.log(parseInt("4.5"));

// Si queremos convertir con decimales

console.log(parseFloat("8.6"));
console.log(parseFloat("9"));

// La forma más sencilla es añadir un + delante

console.log(+"3.2");

// ¿Qué pasa si el string no se puede convertir a número?

console.log(+"hola");
console.log(typeof +"hola");

// Comprobar si va a devolver Nan

console.log(isNaN("hola"));
console.log(isNaN("7"));

let num; //const num =prompt("Introduce un número");

console.log(num);
console.log(typeof num);
console.log(isNaN(num));

// De número a String

console.log(4.58.toString());
console.log(typeof (4.58).toString());

//Cambio de tipo de una variable
// Lo cambiamos sin más

let miVariable = 4;
console.log(typeof miVariable);

miVariable = "hola";
console.log(typeof miVariable);

// Coerción de tipos
//JS hace automaticamente las conversiones que considere

console.log("85"- 3);
console.log("hola" - 3);
console.log("Tengo " + 27 +  " años");

//Si se usa +, prima la concatenación sobre la coerción de tipos

console.log("2" + 2);
console.log(2 + 2 + "2");
console.log(2 + "2" + 2 + 2);
