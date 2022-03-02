"use strict"

// La asignación por destructuring permite asignar valores de forma más rápida y compacta

// Destructuring de array

const arr = ["hola", 4]

const [saludo, num] = arr

console.log(saludo);
console.log(num);

// Si hay datos que no me interesan me los puedo saltar dejando huecos

const arr2 = ["hola", 4, 8]
const [saludo2, , num2] = arr2

console.log(saludo);
console.log(num2);

// Si los datos sobrantes los quiero guardar a parte, uso ...rest

const arr3 = ["hola", 4, 8, 25, "adios", 3]

const [saludo3, num3, ...rest] = arr3;

console.log(saludo3);
console.log(num3);
console.log(rest);

// Podemos asignar valores predeterminados por si faltan elementos

const arr4 = ["Zoe"]
const [nombre, apellido = "desconocido"] = arr4

console.log(nombre, apellido);

// También podemos hacer destructuring de objetos
// En este caso se asignará a las variables los valores de las keys que coincidan 

const user = {
    nombre: "Alex",
    apellido: "Martín",
    edad: 38,
    mascota: "Recco",
    ciudad: "A Coruña"
}

const {mascota, edad} = user;
console.log(mascota, edad);

// Cómo cambiar el nombre para evitar problemas

const {nombre: nombreUser, edad: edadUser} = user;
console.log(nombreUser, edadUser);

// También podemos usar rest en objetos

const {ciudad, ...resto} = user; 

console.log(ciudad);
console.log(resto);

//  Podemos hacer destructuring directamente en los parámetros de una función

function crearFrase({nombre, edad}){
    console.log(`Me llamo ${nombre} y tengo ${edad} años`);
}

crearFrase(user)

// Podemos asignar valores por defecto a los parámetros

function test(num = 4){
    console.log(`El número es el ${num}`);
}

test(8)
test()