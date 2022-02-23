"use strict";



for(let i = 0; i <= 24; i++){
    if(i >= 8 && i <= 20){
        console.log(i, "cucú");
    } else {
        console.log(i);
    }
}

const inicio = 8;
const fin = 22;

let hora = inicio;

while(hora <= fin){
    console.log(hora);
    hora++;
}

for(let i = 0; i <= 24; i++){
    if(i >= inicio && i <= fin) {
        console.log(i);
    }
}

for(let i = inicio; i <= fin; i++){
    console.log(i + "cucú ".repeat(i));
}

for(let i = inicio; i <= fin; i++){
    const cucu = " cucú";
    let frase = i;

    for(let j = 0; j < i; j++){
        frase += cucu;

    }

    console.log(frase);
}

// cucús en base 12

for(let i = inicio; i <= fin; i++){
    const cucu = " cucú"
    let hora = i;
    // let hora = i % 12 || 12;
    if(hora > 12){
        hora -= 12
    }

    console.log(i + cucu.repeat(hora));
}
function reloj(horaInicio, horaFin){
for(let i = horaInicio; i <= horaFin; i++){
    const cucu = " cucú"
    let hora = i % 12 || 12;
    console.log(i + cucu.repeat(hora));
}
}

reloj(2, 7)
reloj(5, 9)