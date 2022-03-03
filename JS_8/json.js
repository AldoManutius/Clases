"use strict";

// JavaScript Object Notation



// Convertir de JSON a JavaScript
// JSON.parse()

const user = {
    name: "Zoe",
    city: "A Coruña",
}

const userJSON = JSON.stringify(user)

console.log(userJSON);
console.log(typeof userJSON);

console.log(user.name);
console.log(userJSON.name);

const userObj = JSON.parse(userJSON)
console.log(userObj);
console.log(userObj.name);