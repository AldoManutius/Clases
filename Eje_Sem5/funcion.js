"use strict"

const random = Math.random();
let min = 1;
let max = 10;
let contraseña = Math.round(Math.random() * (max - min)) + min

// console.log(Math.round(Math.random() * (max - min)) + min);

console.log(contraseña);

const numUser = prompt ("Introduce un número del 0 al 100")
while(numUser !== contraseña){
    if(numUser === contraseña){
       const respuestaA = prompt ("Contraseña correcta")
    }  if (numUser > contraseña){
       const respuestaMayor = prompt ("La constraseña es mayor. Vuelve a intentarlo")
    } if (numUser < contraseña){
       const respuestMenor = prompt ("La contraseña es menor. Vuelve a intentarlo")
    }
    
} 


