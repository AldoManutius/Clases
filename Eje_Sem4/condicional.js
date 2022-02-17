"use strict"

const nombre = "Adelaida"
let age = 68

if(age < 12){
    console.log(`A ${nombre} le corresponde descuento infantil`);
}else if(age < 30){
    console.log(`A ${nombre} le corresponde descuento juvenil`);
}else if(age > 60){
    console.log(`A ${nombre} le corresponde descuento de jubilado`);
}else if(age > 30 && age < 60){
    console.log(`A ${nombre} no le corresponde descuento`);
}