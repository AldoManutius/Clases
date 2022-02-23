"use strict";

// Crear una función que reciba un número y que me devuelva si es true si es par y false si es impar

function isEven(num){
    return num % 2 === 0
}

console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(99));
console.log(isEven(134));

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
console.log(esDivisible(20, 5));



// Función que reciba un número y devuelva true si es primo y falso si no (Un número es primo si no se puede dividir entre ningun número del dos al anterior a si mismo (ej: 5 no es divisible entre ningún número de 2 a 4))
// En cuanto sabemos que un número es divisible entre onstorage, sabemo que es primo

function esPrimo(num){
    for(let i = 2; i < num; i++) {
        // console.log(i, esDivisible(num, i));
        if (esDivisible(num, i)) {
            return false; 
        } 
    }
    return true
}

console.log(esPrimo(11));
console.log(esPrimo(20));

// Función que reciba dos números y saque por consola todos los números primos compromendidos entre ellos

function primosInter(numA, numB){
    for(let i = numA; i <= numB; i++){
        if(esPrimo(i)){
            console.log(i);
        }
    }
}

primosInter(5, 10)
primosInter(30, 40)