"use strict";



const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

console.log(names.includes("Zacharie"));

const unique = []

for(let i = 0; i < names.length; i++){
    const element = names[i];
    if(!unique.includes(names[i])){
        unique.push(element)
    }
}

console.log(unique);

function eliminaDuplicado(arr){
    const unique = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(!unique.includes(arr[i])){
            unique.push(element);
        }
    }
    return unique
}

const numbers = [1, 32, 46, 37, 98, 2, 1, 33, 98, 67, 45, 46, 23]

console.log(numbers);

console.log(eliminaDuplicado(names));

console.log(eliminaDuplicado(numbers));

console.log("");

console.log("Con set");

function deleteDupliSet(arr){
    const set = new Set(arr)
    return [...set]
}

console.log(deleteDupliSet(names));

console.log("");

console.log("Con filter");

function deleteDupFilter(arr){

  /*   for(let i = 0; i < arr.length; i++){
        const name = arr[i]
        console.log(name, i, arr.indexOf(name));
    } */
    return arr.filter((names, index) => arr.indexOf(names) === index)
}

deleteDupFilter(names)






