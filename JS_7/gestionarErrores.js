"use strict";

// Para que el código no se bloquee, siempre que se puedan surgir errores hay que gestionarlos

// Para ello usamos las sentencias try... catch... finally (opcional)

// Siempre que un código pueda fallar, lo metemos dentro de un try

try{
    const num = Math.random();

    console.log(num);
// Si el número aleatorio es mayor o igual a 0.5 lanzamos error
   if(num >= 0.5){
        throw new Error("error generado")
    } 
    console.log("ningún error");
    // Atrapamos el error con catch
} catch(error){
    // Si utilizamos console.error en lugar de console.log, sale en rojo
    // Pero al estar bloqueado, ya no bloquea el código

    console.log(error);
    
    
}
// Podemos añadir un finallly opcional
finally {
    console.log("esto se va a ejecutar de error o no");
}

console.log("LLega hasta aquís");

// EJEMPLOS
console.log("//////EJEMPLOS/////");

function suma(){
    try{
        const numA = prompt("introduce un número")
        if(isNaN(numA)){
            throw new Error("Debe introducir un número")
        }
        const numB = prompt("introduce otro número")
        if(isNaN(numB)){
            throw new Error("El segundo número debe ser un número")
        }
    
        return +numA + +numB
    } catch (e){
        console.error("Se ha producido un error: " + e.message);
    }
}

console.log(suma());