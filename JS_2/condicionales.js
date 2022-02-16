"use strict";

//  IF
// Si no se cumple no pasa nada

// if(condición){
//  código
//}

if(true){
    console.log("La condición se cumple");
}


let age = 15;

if(age < 18){
    console.log("Es menor de edad");
}

console.log("fin de if");

// IF....ElSE
// Si la condición se cumple se ejecuta el bloque de IF, sino se ejecuta el del ELSE
//Se cumpla o no la condición siempre va a pasar algo

//if(condicion){
    //codigo que se ejecuta si se cumple
//} else {
    //código que se ejectua si no se cumple
//}

if(true){
    console.log("La condición se cumple");
} else {
    console.log("La condición no se cumple");
}

if(age < 18){
    console.log("Es menor de edad");
} else {
    console.log("Mayor de edad");
}

console.log("fin de if....else");

//IF..ELSE IF...ELSE (opcional)
// Si la primera condición se cumple, se ejecuta el primer bloque de código
// Si la primera condiciuón no se cumple, pero la segunda si, se ejecuta el segundo bloque
// Si la primera y la segunda no se cumple, pero la tercerca si, se ejecuta el tercero... y así hasta el infinito
// Que siempre pase algo dependerá si hay un ELSE o no

if(false){
    console.log("primer bloque");
}else if (false){
    console.log("segundo bloque");
}else if(false){
    console.log("tercer bloque");
}else {
    console.log("bloque que se ejecuta sino se cumple nada");
}

if(age < 18) {
    console.log("Es menor de edad");
}else if(age < 21) {
    console.log("No puede beber en USA");
}else {
    console.log("Mayor de edad");
}

console.log("fin de if....else if..else");

// SWITCH
// Toma un valor de referencia, y cuando encuentra coincidencias, ejecuta el código de ahí al siguiente break.

/*
switch(referencia {
    case valor1;
    //código;
    break

    case valor2;
    //código;
    break;

    case valor3;
    case valor4;
    //código
    break

    default://(opcional)
    // código que se ejecutará si no hay ninguna coincidencia
    break
}
*/

const fruta = "granada";

console.log("precio");
switch(fruta){
    case "platano":
    case "puerro":
    console.log(1.5);
    break;

    case "manzana":
    console.log(4.3);
    break;

    case "papaya":
    console.log(9);
    break;

    case "naranja":
    console.log(5);
    break;

    default:
    console.log("Habla con JR");
    break;
}
