"use strict"

// Contraseña

/* function checkPassword(){
   const password = Math.round(Math.random() * 100)
   const intentos = 5
   console.log(password);
   
   for(let i = 0; i < intentos; i++){
      const userNum = +prompt("introduce un número de 0 a 100")
      
      if(userNum === password){
         console.log("Has ganado")
         return;
      }
      
      if(userNum < password){
         console.log("El número introducido es menor que la contraseña");
      }else{
         console.log("El número introducido es mayor que la contraseña");
      }
   }
   
   console.log("Has perdido");
   
} */



console.log((""));
console.log("Extra");

 function generatePassword(min, max){
   return Math.round(Math.random() * (max - min) + min)
}
console.log(generatePassword(0, 100));  

function game(tries, min, max){
   const password = generatePassword(min, max)
   console.log(password);

   for(let i = 0; i < tries; i++){
      const userNum = +prompt(`Introduce un número de ${min } a ${max}`)
      
      if(userNum === password){
         alert("Enhorabuena, has ganado!");
         return      }
         alert (`El número introducido (${userNum}) es ${userNum < password? "menor" : "mayor"} que la contraseña. Te quedan ${tries - i - 1} intentos `)
   }

   alert (`Has perdido! el número era el ${password}`)
}

game(5, 0, 100)






