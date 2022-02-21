"use strict"

const miObjeto = {
    clave1: "valor1",
    clave2: "valor2",
    clave3: null, 
    clave4: 4, 

};
// Un objeto es un puntero (una referencia a un espacio físico en la memoria)
// Duplicar el objeto solo duplica la referencia, es espacio (y, por lo tanto, el objeto) sigue siendo el mismo
// Lo único que me impide haber usado const es esto: 
// Podría hacerlo si fuese let

// miObjeto = alkjokjnijhneo123408kmdsdfnih

const miObjetoCopia = miObjeto

// miOjetoCopia = alkjokjnijhneo123408kmdsdfnih

miObjetoCopia.clave1 ="nuevo valor"

console.log(miObjeto);

// SPREAD(...)
const arr = [1, 2, 3]
console.log(arr);
console.log(...arr);

//  Copiar objetos (copia poco profunda)

const miObjetoCopiaBien = {...miObjeto}
console.log(miObjetoCopiaBien);

miObjetoCopiaBien.clave2 = "Nueva Clave 2"

console.log(miObjetoCopiaBien);

// con Object.assign podemos hacer algo parecido

const obj1 = {
    a: 1,
    b: 2,
}

const obj2 = {
    c: 3, 
    d: 4, 
}

const nuevoObjeto = {}

Object.assign(nuevoObjeto, obj1, obj2);

console.log(nuevoObjeto);

// Con spread puedo sobreescribir datos durante la propia copia; con assign no podría.