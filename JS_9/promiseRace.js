"use strict"

// Promise.race()
// REcibe un array de promesas y devuelve una única promesa
// Esa promesa se resolverá o rechazará cuando lo haga la primera del array y devolverá lo que devuleva esta 

function generarPromesa(num){
    return new Promise((resolve, reject)=>{
        const random = Math.random()
        setTimeout(() => {
            if(random > 0.5){
                reject(`Rechazada promsea ${num}`)
            }

            resolve(`Resuelta promesa ${num}`)
        }, Math.random() * 5000)
        
    })
}

/* console.log(generarPromesa(2));

generarPromesa(4).then(res => {console.log(res)}) */

const promiseArr = [generarPromesa(1), generarPromesa(2), generarPromesa(3), generarPromesa(4)]

Promise.race(promiseArr).then(res => {console.log(res)}).catch(error => {console.error(error)})