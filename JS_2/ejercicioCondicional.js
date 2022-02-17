"use strict"

// variables: 2 número y 1 operador (string)
// En base al operador haremos la operación correspondiente con los números
// suma, resta, multiplicación y división

let numA = prompt("Introduce un número");
let operador = prompt ("Introduce el operador (+, -, *, /)");
let numB = prompt("Introduce un número");

if(operador === "+"){
    console.log(+ numA + + numB);
}else if(operador === "-"){
    console.log(numA - numB);
}else if (operador === "*"){
    console.log(numA * numB);
}else if (operador === "/"){
    console.log(numA / numB);
}else if(operador === "**"){
    console.log(numA ** numB);
}

/* Introduciendo una variable vacía, que luego sale por consola después de pasar por switch */

let resultado;

switch (operador){
    case "+":
        resultado = + numA + + numB;
        break;

    case "-":
        resultado = numA - numB;
        break;

    case "*":
        resultado = numA * numB;
        break;

    case "/":
        resultado = numA / numB;
        break;

    default:
        resultado = "desconocido"
        break;
}

console.log(resultado);

// let (algo) = prompt("hola!") Es una función que nos sirve para pedir datos al usuario. Si lo guardamos luego podemos utilizar esos datos. 



switch (operador){
    case "+":
        resultado = + numA + + numB;
        break;

    case "-":
        resultado = numA - numB;
        break;

    case "*":
        resultado = numA * numB;
        break;

    case "/":
        resultado = numA / numB;
        break;

    default:
        resultado = "desconocido"
        break;
}

console.log(resultado);
