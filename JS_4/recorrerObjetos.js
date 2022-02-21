"use strict"

/* 
for(const key in objeto){
    // codigo que se repite
} */

const miVariable = "valor 2"

const miObjeto = {
    clave1: "valor1",
    clave2: miVariable,
    clave3: "clave 3",
    otraClave: "otro valor",
}

for (const key in miObjeto){
    // Key es cada clave
    console.log(key);

    // miObjeto[key es cada valor]
    console.log(miObjeto[key]);
}

const user = {
    username: "PepitoPalotes",
    email: "pepito@palotes.com",
    age: 127,
    favoriteColors: ["azul", "negro"],
    pet:{
        name: "Buffy",
        animal: "dog",
        age: 11,
    },  
};

for(const key in user){
    console.log(key);
}

const puntuaciones = {
    azul: 125,
    rojo: 230,
    verde: 89,
}

for (const equipo in puntuaciones){
    console.log(`El equipo ${equipo} ha sacado ${puntuaciones[equipo]} puntos`);
}

// Usando bucle for nomal

const equipos = Object.keys(puntuaciones)
console.log(equipos);
console.log(equipos.length);

for(let i = 0; i < equipos.length; i++){
    const equipo = equipos[i];
    console.log(i, equipos[i]);
    console.log(puntuaciones[equipo]);

    console.log(`El equipo ${equipo} ha sacado ${puntuaciones[equipo]} puntos`);
}
