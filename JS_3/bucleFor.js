"use strict"

/* 
for(declaracion del contador ; condicion ; modificacion){
    // código que se va a repetir
}

for(let i = 0; i < 10; i++){
    // código que se va a repetir 10 veces en este caso
}
*/

// Este es el bucle más habitual cambiando el número de vueltas
console.log("Bucle más habitual");

let vueltas = 10
// empieza en 0

for(let i = 0; i < vueltas; i++){
    console.log(i);
}
console.log("Bucle más habitual empezando en 1");
// empieza en 1
for(let i = 0; i < vueltas; i++){
    console.log(i + 1);
}
console.log("Bucle decreciente con paso de 2");
// Bucle decreciente con paso de 2
for(let i = vueltas; i >= 0; i -= 2){
    console.log(i);
}

// Parada forzada de un bucle
console.log("Parada forazada de un bucle");

for(let i = 0; i < vueltas; i++){
    if(i === 5) {
        break
    }
    console.log(i);
}

//Saltar vueltas
console.log("Saltar vueltas de un bucle");

for(let i = 0; i < vueltas; i++){
    if(i === 5) {
        continue
    }
    console.log(i);
}