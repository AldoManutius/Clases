"use strict";

const miArr = [0, 1, 2, 3, 4, 5]
const arr2 = [9, 10]

// Push
// Añadir un elmento final de un array

console.log("Push");

// miArr.push(5)

console.log(miArr);

miArr.push(6, 7, 8)

// Devuelve la nueva longitud

console.log("Devuelve la nueva longitud:", miArr.push(6, 7, 8));

console.log(miArr);

/* miArr.push(arr2)

console.log(miArr); */

// Podemos usar Sprad para sacar los elementos de dentro de un Array. 

console.log("Spread");


miArr.push(...arr2)

console.log(miArr);

// De esa forma podemos hacer una copia poco profunda del array como haciamos con los objetos. 

const arrCopia = [...miArr]

arrCopia[1] = 25

console.log(arrCopia);
console.log(miArr);

// Unshift
// Añadir elementos al principio
// ¡ojo! esto modifica el índicede todos los demás elementos

console.log("unshift");
miArr.unshift("hola");
miArr.unshift("a", "b");
miArr.unshift(...arr2);
console.log(miArr);
console.log("Devuelve la nueva longitud:", miArr.unshift(...arr2));

// POP
// Elimina el último elmento y lo devuelve

console.log("pop");
console.log(miArr.pop());
console.log(miArr);

console.log(miArr.pop());
console.log(miArr);

// Shift
// Elimina el primer elemento y lo devuelve
// ¡ojo! esto modifica el índicede todos los demás elementos

console.log("shift");
console.log(miArr.shift());
console.log(miArr);

console.log(miArr.shift());
console.log(miArr);

// Splice
// Elimina o sustituye elementos del array
// Hay que indicar donde empieza, cuantos objetos elimina (opcional, sino se indica va hasta el final) y que introducimos (opcional)
// Devuelve el trozo que quitamos
// Devuelve un Array

console.log("Splice");

console.log(miArr.splice(6, 3, "algo"));
console.log(miArr);

console.log(miArr.splice(8));
console.log(miArr);

// Si le decimos que elmine 0 elementos, podemos usarlo para insertar cosas por el medio

console.log("Splice solo para añadir cosas");
console.log(miArr.splice(2, 0, "Caracola"));
console.log(miArr);

// Si iniciamos con un número negativo, cuenta desde el final, pero sigue eliminado hacia adelante

miArr.splice(-3, 2);
console.log(miArr.splice(-3, 2));
console.log(miArr);

// Slice
// Devuelve un trozo del arry, pero SIN MODIFICAR el original
// Indica el principio (incluido) y el final (no incluido)
// Devuelve un Array

console.log("slice");
console.log(miArr.slice(1, 4));
console.log(miArr);

// Join
// Lo contrario al método de string slipt
// Devuelve un string concatenando todos los elementos. Se puede añadir un separador

const stringArr = ["h", "o", "l", "a"];

console.log("join");
console.log(stringArr);
console.log(stringArr.join());
console.log(stringArr.join("-"));
console.log(stringArr.join(" "));
console.log(stringArr.join(""));

// Index
// Devuelve el índice del elemento de búsqueda
// Tiene que ser el elemento exacto

console.log("indexOf");
console.log(miArr);
console.log(miArr.indexOf("a"));

const indexNuevo = miArr.indexOf("a");

// Gracias a esto podemos modificar elementos sabiendo el elemento pero no su índice. 

console.log(indexNuevo);
console.log(miArr[indexNuevo]);

miArr[indexNuevo] = "Nuevo"
console.log(miArr);

// Lastindexof
// Igual que indexOf, pero devuelve la última vez que aparece

console.log("lastIndexOf");

miArr.push(9);
console.log(miArr);

console.log(miArr.lastIndexOf(9));

// Reverse
// Le da vuelta al array, modificando el original

console.log("Reverse");
console.log(stringArr);
stringArr.reverse();

console.log(stringArr);

// Includes
// Devuelve true si el array contiene el elemento y false si no

console.log("includes");
console.log(miArr.includes(9));
console.log(miArr.includes("a"));
