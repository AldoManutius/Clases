"use strict";

//Saltos de linea en string normales
// secuencia(\+n)

console.log("hola\nmundo", "Salto de String");

//Insertar caracter especiales con \
//por ejemplo comillas

console.log("hola \"mundo\"", "comillas en el String");

//¿Cuanto mide un String

const miString = "Hola mundo";

console.log(miString.length, "longitud de miString");

console.log("Hola Mundo".length, "longitud de Hola Mundo");

//Poner todo en minusculas

console.log(miString.toLowerCase(), "poner todo en minúsculas");

console.log(miString === "hola Mundo");

console.log(miString.toLowerCase() === "hola Mundo".toLocaleLowerCase());

console.log(miString === "Hola mundo");

//Poner todo mayusculas

console.log(miString.toUpperCase(), "Todo en mayúsculas");

//INDEX OF
//¿Cual es la primera posición de una letra?
//Cuenta minúsculas y mayúsculas en cuentas diferentes. Si queremos que los cuente todas juntas hay que transformarla toLowerCase

console.log(miString.indexOf("o"), "empezamos a contar por 0... 1 es la segunda posisión");

// ¿Cual es la primera posición de un conjunto de caracteres?

console.log(miString.indexOf(" mu"));

// ¿Sino no está el caracter/conjunto de caracteres?

console.log(miString.indexOf("na"), "no está");

//Si lo que queremos es el índice de la última aparición

console.log(miString.lastIndexOf("o"), "contando desde atrás")

//Repetir un String

console.log("hola".repeat(3));
console.log("Hola\n".repeat(3));

//Sustituir trozos

//// Solo una vez

console.log(miString.replace("o", "a"), "sustituyendo una cosa solo");

////Todas las veces

console.log(miString.replaceAll("o", "a"), "cambiando varias cosas");
console.log(miString.replaceAll("o", "lalala"));

//CREAR UN ARRAY DE UN STRING

console.log(miString.split()); //un array con solo un elemento (el string)
console.log(miString.split(" "));//Divide el string por los espacios (los elemntos)
console.log(miString.split("")); // un array por cada uno de los caracteres por separado
console.log(miString.split("", 4)); //Solo va a devolver los 4 primeros elementos.

//CORTAR UN TROZO
//El principio está incluido, el final no
console.log(miString.slice(2, 6));

//Si solo le ponemos un dato, va de ahí hasta el final
console.log(miString.slice(6));