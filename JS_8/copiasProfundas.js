"use strict";

const user = {
    name: "Zoe",
    pet: {
        name: "Nymeria",
    }
}

// Esto hace una copia del objeto sino del puntero
// El objeto es el mismo

const user2 = user;
user2.lastName = "Porta"

console.log(user);

// Con spread puedo hacer una copia poco profunda
// os objetos o arrays que contenga, son los mismos

const user3 = {...user}
user3.name = "Pepe"

user3.pet.species = "Cat"

console.log(user);

// Con JSON puedo hacer copias profundas
// Lo que copia es texto plano

const userJSON = JSON.stringify(user);
const user4 = JSON.parse(userJSON)

user4.name = "Pepe"
user4.pet.name = "Buffy"

console.log(userJSON);
console.log(user);
console.log(user4);

// No se puede convertir a JSON un objeto circular

const homer = {
    name: "Homer",
}

const bart = {
    name: "Bart",
    father: homer
}

homer.son = bart
console.log(homer);

// const homerJSON = JSON.stringify(homer)