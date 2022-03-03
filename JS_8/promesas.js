"use strict";

// PROMESAS
// Una promesa es un respuesta que aun no tenemos
console.log("Promesas");

// Crea promesa

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(4)
    }, 2000 )
    
})

console.log(myPromise);
console.log(myPromise + 4);

// Como trabajar con una promesa (fulfilled)
// Método .then()

// recibeun callback que se ejecuta cuando la promsea se resuelve

myPromise.then((res)=>{
    console.log(myPromise)
    console.log(res+4);
    })

    // Rechazar una promesa (rejected)

    const rejectPromise = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            reject("hubo un error")
        }, 2000)
    })

//Atrapar una promesa rechazada
// Método .catch(
    // REcibe un callback que ejecuta cuanta la promesa se rechaza

    rejectPromise.then((res)=> {
        console.log(res);}).catch((error)=>{
            console.error(error);
        })

setTimeout(()=> {
    console.log("Rechazada", rejectPromise);
}, 4000)

// Combinando then y catch

const myPromise2 = new Promise(
    (resolve, reject) =>{
        setTimeout(()=> {
            const num = Math.random()
            console.log(num);
    
            if(num >= 0.5){
            resolve("Todo salió bien")
            }
        
        reject("Algo salió mal")    

        }, 3000)
    }
)

myPromise2.then(res=> {console.log(res)}).catch(error=>{console.error(error)})