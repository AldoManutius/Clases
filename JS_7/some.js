"use strict";

const arr =  [2, 8, 5, 24, 30, 72]

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
    {
        nombre: "Juan",
        edad: 13
    }
]

// SOME
// Devuelve true si el callback devuelve true para ALGUNO de los elementos del array

// ¿Alguno de los números es mayor que 20?

console.log(arr.some((num) => num > 20));

// Alugno de los número es mayor que 80?

console.log(arr.some((num) => num > 80));

// ¿Cómo funciona por detrás?

function customSome(arr, callback){
    for( let i = 0; i < arr.length; i++){
        console.log(arr[i], callback(arr[i]));
        if(callback(arr[i])){
            return true
        }
    }
    return false
}

console.log(customSome(arr, (num) => num > 20));
console.log(customSome(arr, (num) => num > 80));

// ¿Algún usuario se llama Pepé?

console.log(usuarios.some(user => user.nombre === "Laly"));