"use strict";

 const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

 function validateDNI(dni){
     try{
      
        // 1-Lo que se ha introducido es un string con 10 caracteres
        if(typeof dni !== "string" || dni.length !== 10){
            throw new Error("Formato inadeacuado")
        }
        
        // 2.- Si separamos por el guión tiene dos partes
        const partes = dni.split("-")
        
        console.log(partes);
        
        if(partes.length !== 2){
            throw new Error("Debe tener un único guión")
        }
        //  Hacemos destructuring de las partes
        
        const [num, letra] = partes
        
        // 3.- La primera parte (antes del guión) son 8 número
        if(num.length !== 8 || isNaN(num)){
            throw new Error("La primera parte deben ser 8 números")
        }

        // 4.- La segunda parte después del guión es un único caracter y no es un número

        if(letra.length !== 1 || !isNaN(letra)){
            throw new Error("La segunda parte debe ser una letra")
        }

        // 5.- Si la letra corresponde a la combinación de números. 
        console.log(letras[num%23]);
        if(letras[num%23] !== letra.toUpperCase()){
            throw new Error("La letra no se corresponde")
        }




        console.log("DNI válido");
        
    }catch(e){
        console.error("Se ha producido un error: " + e.message)
    }
 }
 validateDNI("45687179-w")
   