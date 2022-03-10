"use strict";


// uso del formData

///// Seleccionamos el formulario
// Es obligatorio que los elementos tengan name. Si no, no estaran en el objeto

const form = document.querySelector("form")

// Crear el objeto de formData

const data = new FormData(form)

for(const elemento of data){
    console.log(elemento);
}

function handleSubmit(e){
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    for(const[clave, valor] of data){
        console.log(clave, valor);
    }
    form.reset
}

form.addEventListener("submit", handleSubmit)

// Añadir entradas al formData
// Si es una propiedad que ya existe, la añade a mayores

data.append("userId", "4")
data.append("apellido", "Porta")
data.append("apellido", "García")

for(const [name, value] of data){
    console.log(name, value
    );
}

// Quitar entradas al formData
// Sihay varias propiedades iguales las borra todas

data.delete("name")

for(const [name, value] of data){
    console.log(name, value
    );
}

// Cambiar valores
// Paso el name de lo que quiereo cambiar y el valor que le quiero dar

data.set("password", 1234)

// Si le paso una clave que no existe, lo añade

data.set("city", "A Coruña")

data.set("password", 4321)

data.set("userId", "")

for(const [name, value] of data){
    console.log(name, value
    );
}

// Comprobar si tiene una clave
// Le paso la clave que quiero comprobar

console.log(data.has("userId"));
console.log(data.has("password"));


// Leer el contenido de una entrada
// Le pasamos la clave que queremos leer

console.log(data.get("city"));

console.log(data.getAll("apellido"));

