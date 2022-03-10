"use strict"

const addButton = document.querySelector(".add")
const list = document.querySelector("ul")

function handleAddClick(){
    // Creo un nuevo elemento
    const newItem = document.createElement("li")
    // Añado nuevo texto. Como contador uso el length de los hijos
    newItem.textContent = `Elemento ${list.children.length +1}`
    // Crear botón de borrar
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Borrar"
    deleteButton.className = "delete"

    newItem.append(deleteButton)

    list.append(newItem)
}

function handleDelete(e){
    const target = e.target
    // El método matches nos dices si el elemento coincide con el selector
    if(target.matches("button.delete")){
        
        const item = target.parentElement;
       item.remove()
    }
    
}

addButton.addEventListener("click", handleAddClick)
list.addEventListener("click", handleDelete)