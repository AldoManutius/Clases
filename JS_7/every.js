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


// EVERY
// Devuelve true si el callback devuelve true para TODOS de los elementos del array

// ¿Todos los números son menores de 90?

console.log(arr.every(num => num < 90));

console.log(arr.every(num => num < 30));

// ¿cómo funciona?

function customEvery (arr, callback){
    for(let i = 0; 1 < arr.length; i++){
        console.log(arr[i], callback(arr[i]));
        if(!callback(arr[i])){
        return false
    }
    }
    
    return false
}

console.log(customEvery(arr, (num) => num > 90));
console.log(customEvery(arr, (num) => num > 20));

// ¿Todos mayores de edad?

console.log(usuarios.every((user) => user.edad >= 18));