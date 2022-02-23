"use strict";
 
// Arrays
// Son listas ordenadas de elementos de cualquier tipo

const arrVacio = [];

console.log(typeof arrVacio);
console.log(arrVacio);

const arrCopy = arrVacio;

arrCopy[1] = "hola"

console.log(arrVacio);

const miArr = [
    "hola",
    27,
    true,
    [1, 2, 3],
    {nombre: "Alex"},
    function(){console.log("hola");}
]

console.log(miArr);

// Saber la cantidad de elementos de un array

console.log(miArr.length);

// Leer elementos de un array

console.log(miArr[0]);
console.log(miArr[3]);
console.log(miArr[3][1]);
console.log(miArr[miArr.length -1]);
miArr[miArr.length -1]()

const funcionArr = miArr[miArr.length -1]
funcionArr()

// Asignar valores a posiciones del array

miArr[4] = 28;

console.log(miArr);

// Puedo modificar los valores originales 

const miArr2 = [10]

miArr2[0] += 5;

console.log(miArr2);

// Si la posición no existe, se crea (aunque necesite espacios vacios de por medio)

miArr2[5] = 20;
miArr2[miArr2.length] = 25;
miArr2[4] = 333;

console.log(miArr2);