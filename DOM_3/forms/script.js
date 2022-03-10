"use strict"

// Seleccionar un formulario

// Método genérico

const form = document.querySelector("form")

console.log(form);

// Propiedad forms

const forms = document.forms
// Devuelve un array con todos los formularios

console.log(forms[0]);

// Seleccionar un campo del formulario
// Método genérico

const nameInput = document.querySelector("input#name")
console.log(nameInput);

// Con form.elements y el name o el id

const passInput = form.elements.password
console.log(passInput);

const{name, password} = form.elements

// Leer valores de un campo

console.log(nameInput.value);

function printName(e){
    // Evita el comportamiento por defecto. p.e. no se envía con submit
    e.preventDefault()
    console.log(nameInput.value);
    
}

function printOnSubmit(e){
    e.preventDefault()
    console.log(nameInput.value);
    console.log(password.value);
    form.reset()
}


// Cada vez que cambio
// nameInput.addEventListener("input", printName)

// Cuando cambia y pierde foco

nameInput.addEventListener("change", printName)

// Cuando se envía el formulario
// Para este caso el evento está en el el form

form.addEventListener("submit", printOnSubmit)


// Borrar el contendio de un campo

nameInput.value = "otro"
nameInput.value = ""