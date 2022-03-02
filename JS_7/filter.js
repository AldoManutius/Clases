"use strict"

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

// FILTER
// Devuelve un array con los mismos elementos que el original o menos. Recorre cada elemento del array, aplica el callback, y si da true añade el elemento al nuevo array y si da false, no

function esPar(num){
    return num % 2 === 0
}

console.log(esPar(4));

const pares = arr.filter(esPar)

console.log(pares);

// Arrow function

const paresArrow = arr.filter((num) => num % 2 === 0)

console.log(paresArrow);

// Versión Arrow

const adultos = usuarios.filter((usuario) => usuario.edad >= 18)

// Versión sin Arrow

console.log(adultos);

function esAdulto(usuario){
    return usuario.edad >= 18
}

const adultos2 = usuarios.filter(esAdulto)

console.log(adultos2);

// Ejemplo con arrow más complejo (enrevesando totalmente)

const adultos3 = usuarios.filter((usuario) => {
    if(usuario.edad >= 18){
        return true
    } else {
        return false
    }
})

console.log(adultos3);

// ¿Cómo funciona por detrás filter?

function customFilter(arr, callback, index){
    const newArr = [];
    for(let i = 0; i < arr.lenght; i++){
        if(callback(arr[i], i){
            newArr.push(arr[i])
        })
    }

    return newArr;
}

customFilter(arr, (num) => num > 10)
console.log(customFilter(arr, (num) => num > 10));