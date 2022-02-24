"use strict";
// Métodos funcional de arrays

const arr =  [2, 8, 5, 24, 30, 72]

const 

// MAP
// Devuelve un nuevo array igual de largo que el original, lo que haya en cada posición dependerá será lo que devuelva el callback

// Creamos callback
// El primer argumento será cada uno de los elementos array, y el segundo (opcional) será el índice de bucle. 

function mapCB(valor, indice){
    return valor * 2
} 

const arrMap = arr.map(mapCB)

console.log(arrMap);

// ¿Cómo funciona map?
 
function customMap(arr, callback){
    // Crea un nuevo array
    const newArr = [];
    // recorre el array original
    for(let i = 0; i < arr.length; i++){
        // En cada vuelta llama al callback pasando el valor y el indice como argumentos y el resultado lo mete al nuevo array
        newArr.push(callback(arr[i], i))
    }
    // Devuelve un nuevo array
    return newArr
}

console.log(customMap(arr, mapCB));
console.log(customMap([1, 2, 3], mapCB));
 

// Usar map para cosas más complejas

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

function sacarNombres(usuario){
    return usuario.nombre
}

console.log(usuarios.map(sacarNombres)); 
