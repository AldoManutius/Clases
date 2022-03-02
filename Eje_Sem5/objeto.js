"use strict";

const edad = {
    Juan: 26,
    Rosa: 35,
    Pepe: 53,
    Juana: 49,
    Andres: 27,
    Asun: 60,
    Pedro: 12,
    Rebeca: 10,
}

/* for(const nombre in edad){
if(edad[nombre] < 18){
    console.log(`${nombre} es menor de edad`);
} else {console.log(`${nombre} es mayor de edad`);}
} */

function mayorEdad(a){
    for(const nombre in a){
        if(a[nombre] < 18){
            console.log(`${nombre} es menor de edad`);
        } else {console.log(`${nombre} es mayor de edad`);}
        }
}

const miObj = {
    Juan: 56,
    Pedro: 23, 
    Lucia: 56,
    Alberto: 25,
    Ruben: 2,  
    Rosalia: 18, 
    Hugo: 65, 
    JoseLuis: 32, 
    Esmeralda: 23,
    Marina: 10,
}

console.log(mayorEdad(edad));

console.log(mayorEdad(miObj));