"use strict";
console.log("hola");

const colores = ["rojo", "verde", "azul", "amarillo", "rosa"]
const colors = ["red", "green", "blue", "yellow", "pink"]
console.log(colores);

// Con bucle y el legnth

console.log("for");

for(let i = 0; i < colores.length; i++){
    console.log(i, colores[i]);
    console.log(`Me gusta el color ${colores[i]}`);
}

for(let i = 0; i < colores.length; i++){
    console.log(`${colores[i]} en inglés es ${colors[i]}`);

}

// Usar bucles puede ser muy util sobre todo para comparar arrays

// for...of
// Específico de arrays. Tiene una sintaxis más sencilla, pero perdemos el acceso al índice. 

console.log("for...of");
for(const color of colores){
    console.log(color);
}