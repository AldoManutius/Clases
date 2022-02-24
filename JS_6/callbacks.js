"use strict"

// CALLBACKS
// Los callbacks son funciones que pasamos como argumento a otras funciones
// Para entender un callback es fundamental entender la diferencia en las siguientes variables

function sayHi(nombre){
    if(nombre){
        return `Hola ${nombre}`
    }
    return "hola"
}

const var1 = sayHi();

const var2 = sayHi;

console.log(var1); 
// Aquí está el resultado de la función
console.log(var2);
// Aquí está la propia función 

// console.log(var1("pepe")); error: no es una función 

console.log(var2("pepe"));

//Dentro de una función

function suma(a, b){
    return a+b
}
function restar(a, b){
    return a-b
}
function multiplicar(a, b){
    return a*b
}
function dividir(a, b){
    return a/b
}

function calcular(numA, numB, operacion){
    console.log(numA, numB);
    console.log(operacion);
    // devolvemos una llamada a la función operación, pasandole como argumentos los números por lo tanto, devolversmo lo que devuelva la operación
    return operacion(numA, numB)
}
// ¡OJO! la pasamos la función, no la llamada. NO LLEVA PARENTESIS DETRÁs
console.log(calcular(3, 5, suma));

// En este caso suma es un callback

console.log(calcular(10, 2, dividir));
console.log(calcular(4, 5, multiplicar));

// ejemplo

function crearUser(nombre, edad){
    return {
        nombre: nombre,
        edad: edad,
    }
}

console.log(crearUser("Alex", 38));

function crearFrase(nombre, edad, callback){
    const user = crearUser(nombre, edad)
    return `Me llamo ${user.nombre} y tengo ${user.edad} años`
}

console.log(crearFrase("Alex", 27, crearUser));

