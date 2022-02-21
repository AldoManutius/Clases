"use strict"

const miObjeto = {
    clave1: "valor1",
    clave2: "valor2",
    clave3: null, 
    clave4: 4, 

};

const user = {
    username: "PepitoPalotes",
    email: "pepito@palotes.com",
    age: 127,
    favoriteColors: ["azul", "negro"],
    pet:{
        name: "Buffy",
        animal: "dog",
        age: 11,
    },  
};

console.log(user);

// Sintaxis de .
// Es literal, hay que escribir la clave tal cual

console.log(miObjeto.clave2);
console.log(user.email);
console.log(user.pet.name);

// Lectura condicional
// Añadimos ? al final de cada elemnento que pueda ser undefine. 

console.log(user.coche);
console.log(user.coche?.modelo);

// Sintaxis de []
// Lo que haya en las llaves se evalua para buscar la clave

console.log(miObjeto["clave2"]);
console.log(miObjeto["clave10"]);
console.log(miObjeto["clave" + 3]);

const clave = "username"
console.log(user[clave]);

// Modificar o añadir claves

user.age = 30;

console.log(user);
miObjeto.clave15 = "valor15";
console.log(miObjeto);

// ¿Son iguales?

const obj1 = {a: 1, b: 2}
const obj2 = obj1;
const obj3 = {...obj1};

console.log(obj1 === obj2);
console.log(obj1 === obj3);




