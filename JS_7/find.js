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

// FIND
// Devuelve el primer elemnto del Array para que el callback devuelva true

// Quiero encontrar un  número mayor que 6

console.log(arr.find(num => num > 6));

// ¿Cómo funciona por detrás?

/* function customFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]){
            return arr[i]
        }
    }
} 

console.log(customFind(arr, (num) => num > 8)); */

// Quiero saber la edad de Lupe

const lupe = usuarios.find(user => user.nombre === "Lupe")

console.log(lupe.edad);