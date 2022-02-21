"use strict";

// Crear una función que reciba un número y que me devuelva si es true si es par y false si es impar

function isEven(num){
    return num % 2 === 0
}

console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(99));

function esPar(num){
    if(isEven(num)){
        return "si"
    } else {
        return "no"
    }
}

console.log(esPar(4));
console.log(esPar(5));

//Función que reciba dos números (dividento y divisor) y devuelva true si el primero es divisible entre el segungo, y false si no. 

function esDivisible(numA, numB){
    return numA % numB === 0
    }
console.log(esDivisible(10, 2));
console.log(esDivisible (8, 3));



// Función que reciba un número y devuelva true si es primo y falso si no (Un número es primo si no se puede dividir entre ningun número del dos al anterior a si mismo (ej: 5 no es divisible entre ningún número de 2 a 4))

// función que reciba dos números y saque por consola todos los números promos comprendidos entre ellos (ej. de 5 a 15 debería salir, 5, 7, 11 y 13)