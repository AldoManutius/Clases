"use strict";

// FETCH
// Es una función para hacer peticiones a otros servidores
// Por lo general, lo haremos con URLs de APIs que nos devuelvan JSON 
// Es una función asíncrona que devuelve una promesa


// Cuando recibimos la respuesta, por lo general vamos a queres extraer el JSON. Para eso usamos el método .json()
// Este método también devuelve una promesa

const apiUrl = "https://anapioficeandfire.com/api/characters/583"

const data = fetch(apiUrl)

// data.then(res =>{res.json().then(res=>console.log(res))})

 async function getData(url){
    const res = await fetch(url);
    const info = await data.json()

    console.log(data);
}

getData(apiUrl) 

async function printInfo(url){
    const info = await getData(url);

    console.log(info.name);
    console.log(info.alianses);
    console.log(info.born);
    console.log(info.allegiances);

}

printInfo(apiUrl)