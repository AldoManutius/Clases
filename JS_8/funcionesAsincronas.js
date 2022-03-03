"use strict";
// async... await
// La palabra reservada await indica a la función que debe esperar a tener la respuesta antes de continuar

// La palabra await solo se puede usar en funciones asincronas. Para hacer asincrona una función añadimos async delante de la función.

function por2(num){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            // console.log(num);
            resolve(num * 2)
        }, 1000)
    })
}

async function asincrona(num){
    const res1 = await por2(num)
    const res2 = await por2(res1)
    const res3 = await por2(res2)
    const res4 = await por2(res3)
    console.log(res4);
}

asincrona(8)

// Las funciones asincronas siempre devuleven una promesa
// Podemos usarlas dentro de otras funciones asincornas

async function printRes(){
    const res = await asincrona(4)
    console.log(res);
}

printRes()

// /////
// Promesas rechazadas en funciones asincronas

function myPromise(num){

    return new Promise(
        (resolve, reject)=>{
            const random = Math.random()
            setTimeout(()=>{
                if(random > 0.7){
                    reject("hubo un error en la promesa " + num)
                }
                resolve(random)

        }
    )
}
    )
}

async function myFunction(){
    try{
        const num1 = await myPromise(1)
        console.log(num1);
    
        const num2 = await myPromise(2)
        console.log(num2);
        const num3 = await myPromise(3)
        console.log(num3);
        const num4 = await myPromise(4)
        console.log(num4);

    } catch(e){
        console.error(e)
    }

}

myFunction()