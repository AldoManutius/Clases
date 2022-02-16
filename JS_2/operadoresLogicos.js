"use strict";

// OPERADORES RELACIONALES

// Evaluan a true o false o NaN
//! Si utilizamos un string en las comparaciones mayor/menor, tendrá en cuenta la longitud.

let numA = 5;
let numB = 3;
let numC = 10;
let numD = 5;

// comparación estricta
console.log(`${numA} === ${numB}?`, numA === numB);
console.log(`${numA} === ${numD}?`, numA === numD);
console.log(`${numA} ==="5"?`, numA === "5");

// Diferneica estricta
console.log(`${numA} !== ${numB}?`, numA !== numB);
console.log(`${numA} !== ${numD}?`, numA !== numD);

//mayor estricto
console.log(`${numA} > ${numB}?`, numA > numB);
console.log(`${numA} > ${numC}?`, numA > numC);
console.log(`${numA} > ${numD}?`, numA > numD);

// menor estricto
console.log(`${numA} < ${numB}?`, numA < numB);
console.log(`${numA} < ${numC}?`, numA < numC);
console.log(`${numA} < ${numD}?`, numA < numD);

//mayor o igual
console.log(`${numA} >= ${numB}?`, numA >= numB);
console.log(`${numA} >= ${numC}?`, numA >= numC);
console.log(`${numA} >= ${numD}?`, numA >= numD);

// menor o igual
console.log(`${numA} <= ${numB}?`, numA <= numB);
console.log(`${numA} <= ${numC}?`, numA <= numC);
console.log(`${numA} <= ${numD}?`, numA <= numD);

// OPERADORES LÓGICOS
// Siempre devuelven booleanos

// Y (&&) -> da true si las dos condiciones se cumplen

console.log(`${numA} > ${numB} Y < ${numC}?`, numA > numB && numA < numC); 
//true Y true = true
console.log(true && true);

console.log(`${numA} > ${numB} Y > ${numC}?`, numA > numB && numA > numC); 
//true Y false = false
console.log(true && false);

console.log(`${numA} < ${numB} Y > ${numC}?`, numA < numB && numA > numC); 
//false Y false = false
console.log(false && false);

// O(||) -> da true si alguna de las condiciones es true.

console.log(`${numA} > ${numB} O < ${numC}?`, numA > numB || numA < numC); 
//true O true = true
console.log(true || true);

console.log(`${numA} < ${numB} O < ${numC}?`, numA < numB || numA < numC); 
//false O true = true
console.log(false || true);

console.log(`${numA} < ${numB} O > ${numC}?`, numA < numB || numA > numC); 
//false O false = false
console.log(false || false);

// Negación -> Devuelve el booleano contrario

console.log(`Contrario de ${numA} > ${numB}?`, !(numA > numB));
console.log("Contrario de true", !true);
console.log("Contrario de false", !false);
console.log("contrario del Contrario de true", !!true);

console.log("Un número es truthy?", !!5);
console.log("El número 0 es truthy?", !!0);
console.log("NaN es truthy?", !!("hola" - 3));
console.log("Un string es truthy?", !!"hola");
console.log("Un string vacio es truthy?", !!"");