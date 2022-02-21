"use strict"

// Spread nos permite sacar de un objeto o array la información que tiene desntro. 

 const user = {
     username:  "Paco",
     email:  "paco@pecas.org",

 }

//  console.log(...user) Esto da error porque console log no es capar de procesar los datos que hay dentro de un objeto (conjunto de clave-valore);

const miObjCopia = {...user};

// Esto es un nuevo objeto que tdentro tiene lo mismo que user

console.log(miObjCopia);

// Cuando hago duplicado, puedo añadir de paso propiedades nuevas

const miObj2 = { username: "Zoe", pet: "gato", ...user}
console.log(miObj2);

const miObj3 = { ...user, username: "Zoe", pet: "gato"}
console.log(miObj3);

// Si el Spread va primero y luego los datos nuevos, los datos que coincidan se reescriben. 
// Si el Spread va al final del nuevo objeto, solo se añade los datos nuevos, sin sobreescribir.
// Si vienen de distintos Spread, pesa más el que viene al final

const obj1 = {
    a: 1,
    b: 1
}

const obj2 = {
    b: 2,
    c: 2
}

console.log({...obj1, ...obj2});
console.log({...obj2, ...obj1});