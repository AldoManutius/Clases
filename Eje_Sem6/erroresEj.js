"use strict";

function validarDNI(dni){
    let letraDNI = dni.substring(8, 9);
    let numDNI = dni.substring(0, 8);
    const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
    let letraCorrecta = letras[num % 23];
    const errorDNI = new Error ("Se ha producido un error")

    if(letraDNI != letraCorrecta){
        console.log("DNI no válido");
    } else {
        console.log("DNI válido"); 

    }

}

validarDNI(45687179-W)

