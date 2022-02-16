"use strict"

// ARITMÉTICOS

let numA = 5;
let numB = 3;

//  suma +
console.log("suma:", numA + numB);

// resta -
console.log("resta:", numA - numB);

// multiplicaión *
console.log("multiplicación: ", numA * numB);

// división /
console.log("división:", numA / numB);

// módulo %
// Devuelve el resto de la división
console.log("módulo:", numA % numB);

// potencia **
console.log("potencia:", numA**numB);

console.log(numA);
console.log(numB);

//Si queremos la raiz cuadrada tendremos que recurrir a Math.sqrt(num)

// OPERADORES QUE CAMBIA EL VALOR DE LA VARIABLE

// Incremetar en 1

numA++; numA = numA + 1
console.log("numA++", numA);

// Decrementar en 1

numA--; //numA = numA - 1// vidas --
console.log("numA--", numA);

// Asignar a la variable el resultado de la suma

numA += numB //numA = numA + numB // puntos += moneda
console.log("numA += numB:", numA);

// Asignar a la variable el resultado de la resta

numA -= numB; //numA = numA - numB
console.log("numA -= numB:", numA);

// Existe la equivalencia para el resto de operadores que vimos

// JS sigue el orden de prioridadres de las matemáticas

console.log((3 + 2 * 5));
console.log((3 + 2) * 5);



