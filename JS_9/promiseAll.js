"use strict"

// Promise.all()
// REcibe un array de promsesas y devuelve una única promesa
// Dicha promseda se resuelve cuando todas las promesas se han resuelto o rechazado
// Se rechaza cuando alguna se ha rechazado
// Devuelve un array con los valores de las promesas

function generarPromesa(num){
    return new Promise((resolve, reject)=>{
        const random = Math.random()
        setTimeout(() => {
             if(random > 0.5){
                reject(`Rechazada promesa ${num}`)
            } 

            resolve(`Resuelta promesa ${num}`)
        }, Math.random() * 5000)
        
    })
}

const promiseArr = [generarPromesa(1), generarPromesa(2), generarPromesa(3), generarPromesa(4)]

console.log(promiseArr);

Promise.all(promiseArr).then(res =>{console.log(res)}).catch(error => {console.error(error)})