"use strict"

/* function nombre(
    // Código de la función
) */

function sayHi(){
    console.log("hola");
}

sayHi();
console.log("código sigue...");

sayHi()

// La función siguiente es impura
// Con la misma (ninguna) da cada vez un resultado distinto, además depende de y modifica valores externos

let num = 1;

function duplicar(){
    num = num * 2;
}
 console.log(num);
 duplicar();
 console.log(num);
 duplicar();
 console.log(num);

//  Parametros
// Los parámetros nos valen para pasarle datos a la función que pueden cambiar en cada llamada

/* 
function nombre(parámetro1, parámetro2...) {
    // código
    // aquí podemos usar los parámetros como si fuesen variables, su valor será el de los argumentos (lo que pasamro al llamar a la función)
} */

function sayHiNombre(nombre){
    console.log("hola " + nombre);
}

sayHiNombre("Zoe")

sayHiNombre("Alex")

const nombre = "Berto"

sayHiNombre(nombre);

function duplicarPura(num){
    console.log(num * 2);
}

duplicarPura(2)

duplicarPura(122)

duplicarPura(num);

// Return
// Por lo general queremos que las funciones devuelvan algo. Es decir que si hacemos console log de la llamada nos de un resultado. Para eso utilizamos la sentendica return, indicando el resultado que queremos

function duplicarPura(num){
    return num * 2;
}

const duplicar2 = duplicarPura(2)
console.log(duplicarPura(num));
console.log(duplicarPura(3));

num = duplicarPura(num)

console.log(num);

// Ejemplo básico de función con dos parámetros

function suma(numA, numB){
    return numA + numB;
}

console.log(suma(2, 8));
console.log(suma(1024, 578));

const resultado = suma(7, 9);
console.log(resultado);
