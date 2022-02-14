"use strict"
console.log("hola");

/* Con el objeto math podemos hacer ciertas funciones matemáticas (no operaciones)
p.e. generar un número aleatoria de 0 al 1 (el 1 no incluido) */

//Redondear números

//Redondear al alza: Math.ceil(num)

console.log("ceil(4.8)", Math.ceil(4.8));
console.log("ceil(4.1)", Math.ceil(4.1));

//Redondear a la baja:Math.floor(num)

console.log("floor(4.8)", Math.floor(4.8));
console.log("floor(4.1)", Math.floor(4.1));

//Redondeo normal: Math.round(num)

console.log("round(4.8)", Math.round(4.8));
console.log("round(4.1)", Math.round(4.1));

//¿Cómo redondear con decimales?
//Multiplicamos por 100, redondeamos y dividimos entre 100

let num = 2.5634;
let numX100 = num * 100;
let numRound = Math.round(numX100);
let numDecimal = numRound / 100;

console.log(numDecimal);
console.log(Math.round(num * 100) / 100);

//Números aleatorios

const random = Math.random()

console.log("aleatorio", random);

//Generar números aleatorios del 0 al 10
//Si además queremos que sea entero redondeamos
//Para que sea totalmente aleatoria debería ser Math.floor(Math.random)*((x+1))

console.log("aleatorio de o a 5", Math.round(Math.random()* 5));

//Para sacar un múmero aleatorio dentro de un rango

let min = 5;
let max = 10;

const aleatorioDe5a10 = Math.round(Math.random() * (max - min) + min)

console.log("aleatorio de 5 a 10", Math.round(Math.random() * (max - min)) + min);

console.log("aleatorio guardado", aleatorioDe5a10);

// Math.min y Math.max
//¿Cual es el número más grande de la lista

console.log("más grande", Math.max(2, 7, min, 3 + 4, aleatorioDe5a10));

console.log("más pequeño", Math.min(16, 7, max, 3 + 4, aleatorioDe5a10));

