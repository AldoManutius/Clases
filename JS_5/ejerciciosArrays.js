"use strict"

// EJERCICIO 1
// Crear una función que reciba dos arrays y devuelve true si son iguales (tiene el mismo contenido)

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 2];
const arr4 = [1, 2, 3, 4];



 function comparar(a, b){
    if(a[a.length-1] === b[b.length-1])
    return true 
    if(a[a.length-1] != b[b.length-1])
    return false
} 


 console.log(comparar(arr1, arr4));

//  Esta función no es escalable, por lo que no es correcta. 

 function sonIguales(arrA, arrB){
    //  Comparamos si miden lo mismo
     if(arrA.length !== arrB.length){
         return false
     }
     for(let i = 0; i <arrA.length; i++)
     if (arrA[i] !== arrB[i]){
        //  console.log("son diferentes");
         return false
     } else {
        //  console.log("son iguales");
     }
     return true;
 }

console.log(sonIguales(arr1, arr4));
console.log(sonIguales(arr1, arr2));
console.log(sonIguales(arr1, arr3));






// EJERCICIO 2
// Crear una función que recibe un array de números y devuelve uno nuevo con el doble de cada número.
// [1,2,3] => [2,4,6]

 const arr5 = [1, 2, 3, 4]
 console.log(arr5);

 for(const num of arr5){
     console.log(num * 2);
 } 

 function duplicar(numArr){
     const newArr = []
    //  Para que devuelva un array, tenemos que crear un array en el cuerpo de la función
    // Recorremos el array original y subimos al nuevo array los números multiplicados por dos
    for(const num of numArr){
        newArr.push(num * 2)
    }
    return newArr;
 }

//  Otra forma para la mismoa función. 

 /* for(let  i = o; i < numArr.length; i++){
     newArr[i] = numArr[i] * 2
 } */

 console.log(duplicar(arr5));

 

// EJERCICIO 3
//

const patients = [true, false, true, false, false, false, true, true];

function virus1(pacientes){
    // primero hacemos una copia para trabajar
    const pacientesCopia = [...pacientes]
    // Me interesa la posición en el índice
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i]){
            if(i > 0){
                pacientesCopia[i-1] = true
            }
            if(i < pacientes.length -1){
                pacientesCopia[i+1] = true
            }
        }
        
        }
        return pacientesCopia
    }

console.log("Día 0;", patients);
const dia1 = virus1(patients)
console.log("día 1:", dia1)
console.log("día 2:", virus1(dia1));

// Otra versión

function virus1v2(pacientes){
    const pacientesCopia = [...pacientes]
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i - 1] || pacientes[i + 1]){
            pacientesCopia[i] = true
        }
    }
}

console.log("Día 0;", patients);
const dia1v2 = virus1v2(patients);
console.log("día 1:", dia1v2)

