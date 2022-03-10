"use strict"

const url = new URL("https://anapioficeandfire.com/api/characters/?gender=female&culture=northmen")


// El string de la query
console.log(url.search);

// El objeto iterable con los conjuntos clave-valor
const params = url.searchParams
console.log(url.searchParams);

for(const entry of params){
    console.log(entry);
}



// URL search params

// Leer valores

console.log(params.get("gender"));

// Añadir entradas

params.append("name", "Alys Karstark")

// Borrar entradas

params.delete("culture")

// Convertir a string

console.log(params.toString());

const miURL = new URL(window,location)
console.log(miURL.searchParams);

// Crear un URL Search Params

const obj = {
    gender: "male",
    culture: "Braavosi",
}

const objParams = new URLSearchParams(obj)

console.log(objParams.toString());

// window.open(url.protocol+url.hostname+url.pathname + "?" + objParams.toString())

const miURL2 = new URL(window.location)
console.log(miURL2.searchParams.get("color"));