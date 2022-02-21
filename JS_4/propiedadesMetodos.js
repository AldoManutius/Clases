"use strict"

// Propiedades
// Las propiedades son todos los datos que tiene un objeto
//(todo lo que sea objeto.algo)

const miString = "hello World";

// length es una propiedad del objeto String
console.log(miString.length);

// Métodos
// Los métodos son funciones almacenadas dentro de objetos

miString.indexOf("0");

Math.random()

const miObj = {
    sayHi: function (){
        console.log("Hi");
    },
    key1: "value1",
    name: "Zoe", 
    age: 27,
};

miObj.sayHi();

// Métodos de la clase Object

// Object.keys()
// Devuelve un array con las claves del objeto

const claves = Object.keys(miObj)

console.log(claves
);

// Object.values()
// Devuelve un array con los valores del objeto

const valores = Object.values(miObj);
console.log(valores);

// Object.entries()
// Devuelve un array con los pares de las entradas del objeto

const entradas = Object.entries(miObj);
console.log(entradas);
