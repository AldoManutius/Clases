"use strict"

const arr =  [2, 8, 5, 24, 30, 72]

// SORT
// Ordena el array según lo que devuleve el callback
// El callback recibe cada vez dos elementos del array.
// Si devuelve un número inferior a 0, el primero va delante del segundo
// Si devuelve un número mayor que 0, el segundo va delante
// Si devuelve 0 se queda igual
// Da las vueltas que haga falta hasta que el array esté ordenado
// SORT MODIFICA EL ARRAY ORIGINAL... HAY QUE CREAR UNA COPIA ANTES DE APLICARLO

function deMenorAMayor(a, b){
    return a - b
}

function deMayorAMenor(a, b){
    return b - a
}

console.log(arr.sort(deMenorAMayor));
console.log(arr.sort(deMayorAMenor));

/////////

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

function mayorMenorEdad(userA, userB){
    return userB.edad - userA.edad
}

console.log([...usuarios].sort(mayorMenorEdad));

function menorMayorEdad(userA, userB) {
    return userA.edad - userB.edad
}

console.log([...usuarios].sort(menorMayorEdad));