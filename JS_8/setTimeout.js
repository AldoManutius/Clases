"use strict";

// setTimeout(callback, tiempoMS)

function callback(){
    console.log("hola");
}

setTimeout(callback, 2000)

setTimeout(() => {console.log("caracola")}, 3000 )

function echo(msg) {
    console.log(msg);
}

setTimeout(() => {echo("sin cola")}, 4000)

// Podemos parar un timeout si tiene nombre (clearTimeout)

const alarma = setTimeout(()=>{console.log("Ring, Ring")}, 5000)

setTimeout(()=>{
    const despierto = false;
    
    if(despierto){
        clearTimeout(alarma)
    }

}, 3000)