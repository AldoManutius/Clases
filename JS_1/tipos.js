"use strict";

/* TIPOS DE DATOS PRIMITIVOS */

//Podemos saber el tipo de dato que es un elemento con el typeof

//Números

const num = 2;

console.log(num);
console.log(typeof num);
console.log(typeof 4.5);
console.log(typeof Math.random());

//STRING (cadenas de textos)
//Van siempre entre comillas

const miString = "Hola mundo";

console.log(miString);
console.log(typeof miString, "miString");
console.log(typeof "un texto", "Un texto");
console.log(typeof typeof 4.5, "typeof 4.5");

////Con comillas frances (`) hacemos template string

const miTemplateString = `La frase es:
${miString}`;


// BOOLEANOS
// Son datos con solo dos valores posibles true/false que equivalen a 1 o 0

const verdadero = true;
const falso = false; 

console.log(verdadero);
console.log(typeof verdadero);
console.log(falso);
console.log(typeof falso);

// UNDEFINED
// Es lo que se le asigna a datos sin valor

let valorDesconocido;

console.log(valorDesconocido);
console.log(typeof valorDesconocido);

// NULL
// Representa un valor vacio, pero a propósito. Se asigna conscientemente

const valorVacio = null;

console.log(valorVacio);
console.log(typeof valorVacio);

