"use strict"

// Reduce
// Devuelve un solo elemento (aunque ese elemento puede ser un array, un objeto o cualquier)
// El callback recibe como parámetros un acumulador, cada valor del array y el índice (opcional)
// El método recibe el callback y inicializador (opcional)
// Si no le pasamos inicializador, el acumulador se igualará al primer elemento del array y se saltará la primera vuelta
// En el acumulador se irá guardando lo devuleva en cada vuelta el callback
// Al final el método devolverá lo que quede en el acumulador

const arr =  [2, 8, 5, 24, 30, 72]

function calcularTotal(acc, currentValue, index){
    console.log(acc, currentValue, index);
    return acc + currentValue

}

console.log(arr.reduce(calcularTotal));

// ¿Cómo funciona?

function customReduce(arr, callback, init){
    let acc = arr[0]
    if(init){
        acc = init
    }

    for(let i = 0; i < arr.length; i++){
    if(i === 0 && !init){
        continue
    }
    acc = callback(acc, arr[i], i)
    }
    return acc
}

console.log((customReduce(arr, calcularTotal)));

const usuarios = [
    {
        nombre: "Alex",
        edad: 38
    },
    {
        nombre: "Jose",
        edad: 31
    },
    {
        nombre: "Lupe",
        edad: 51
    },
    {
        nombre: "Laly",
        edad: 69
    },
    {
        nombre: "Toño",
        edad: 65
    },
]

function totalEdades(acc, usuario){
    return acc + usuario.edad
}

// Al ser un array de objetos y querer sumar números, tenemos que inicilizar el accumulador con un número para que funcione.

console.log(usuarios.reduce(totalEdades, 0));
console.log((customReduce(usuarios, totalEdades, 1);
// Con el custom no funciona porque el 0 cuanta como folsi