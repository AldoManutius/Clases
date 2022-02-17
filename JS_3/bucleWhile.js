"use strict"

let tiempo = 10;


while (tiempo > 0) {
    console.log(`Quedan ${tiempo} minutos`);
    
    tiempo --
}

console.log("Se acabao el tiempo");


/* let frase;
let contador = 3; */

/* while (contador > 0){
    contador --;
    frase += prompt("Introduce una frase");
    console.log(frase);
} */

let palabra;
let resultado = "";
while(palabra !== "STOP"){
    palabra = prompt("introduce una palabra para añadir a la cadena o introduce STOP")

    resultado += " " + palabra;
    console.log(resultado);
}

console.log(resultado);

// Do... While
// Siempre ejecuta al menos una vez, como diferencia del whilw

const age = 21;

while(age < 17){
    console.log("esto no se ejecuta nunca");
}

do{
    console.log("esto se ejecuta al menos una vez");
} while (age < 17)