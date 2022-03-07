"use strict";

// Escribir una función que reciba un número
// Obtener la información de la casa que se corresponda con el número y a partir de ahí, sacar el Nombre del LORD

// Puede haber errores:
// Que lo introducido no sea un número
// Qué el número no se corresponda con ninguna casa
// Que la casa no tenga lord actualmente

//  Hay que gestionar los errores

const urlBase = "https://anapioficeandfire.com/api/houses/"

console.log("Winter is comming");

async function getData(url){
    const data = await fetch(url);
    const info = await data.json()

    return info
}

getData(urlBase).then(res => {console.log(res);})

async function theCurrentLord(num){
    const info = await getData(urlBase + num);

    const {name, words, currentLord} = info

    const houseinfo = await getData(currentLord[0])

}

theCurrentLord(378)

