"use strict"


// local storage
// almacena información en el propio navegador

// Guardar cosas en el local storage
// Si la clave no existe, la añade. Si existe la cambia

localStorage.setItem("clave", "valor")

function handleClick(){
    const num = Math.round(Math.random()* 10)

    localStorage.setItem("num", num)
}

const button = document.querySelector("button")
button.addEventListener("click", handleClick)

// El valor siempre tiene que ser un string
// Utilizamos JSON

const user = {
    username: "Zoe",
    id: 24
}
localStorage.getItem("user", JSON.stringify(user))

// Leer un valor

console.log(localStorage.getItem("clave"));

// Si es´ta en JSON, tengo que convertirlo a JS para usarlo

const userGuardado = localStorage.getItem("user")
const userObj = JSON.parse(userGuardado)

console.log(userObj.name);


// sesion storage
// Sirve para almacenar información mientras este abierto el navegador
// Se usa igual que localStorage

function handleClickSession(){
    const num = Math.round(Math.random()* 10)

    sessionStorage.setItem("num", num)
}


button.addEventListener("click", handleClickSession)