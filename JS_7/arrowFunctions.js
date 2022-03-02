"use strict";

// Arrow Functions
// Son funciones normales pero con otra estructura. No tiene nombre de función.

// función normal

function nombre(){
    // codigo
    console.log("Funciones de toda la vida");
}

// funciones anónimas

// Expresión de función

const función = function nombre(){
    // codigo
    console.log("función en una variable");
}


// Dentro de un array u objeto

const arr = [function nombre(){
    console.log("función dentro de un array");
    // codigo
}]

arr[0]();

// Invocada automáticamente

(function nombre(){
    // codigo
    console.log("función invocada inmediatamente");
})()

// Como callbacks

function ejecutarCallback(cb){
    cb()
}

// ejecutarCallback(funcion(){
//     console.log("callback")})

    // Las arrow function son funciones anónimas. lo que significa que las podemos usar en todos los casos anteriors.
    // Sintaxis: (parametros) => /* lo que devuelve*/ (return implicito)
    // Si no le ponto llaves, solo puede ejecutar una línea de código, pero si se las pongo, el return tengo que poner explicitamente

    // Esta función devuelve el string "arrow function"
    const arrow = () => "arrow function"

    console.log(arrow);
    console.log(arrow());

    // Esta función devuelve undefined porque tiene llaves y no tiene return

    const arrow2 = () => {console.log("arrow sin return implícito")
    ;}

    console.log(arrow2());

    // Usamos parámetros

    const suma = (a, b) => a + b
    // = function suma(a, b){ return a + b}

    console.log(suma(2, 5));

