"use strict";

console.log("Ejercicios bucles");

// Bucle de 0 100 con incrementos de 10

for(let i = 0; i <= 100; i+=10){
    console.log(i);
}

// Bucle que vaya de 50 a 20 de uno en uno

for(let i = 50; i >= 20; i --){
    console.log(i);
}

// Bucle de 0 a 10 y nos diga sin son pares o impares

for(let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i, " par");
    } else {
        console.log(i, " impar");
    }
}
/* const restoDivision = i % 2;
const esPar = restoDivision === 0;
if(esPar){
    console.log(i, " par");
}else {
    console.log(i, " impar");
}

} */