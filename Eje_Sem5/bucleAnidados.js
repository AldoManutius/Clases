"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function pedido(catalogo){
  const combinados = []

  for(let i = 0; i < catalogo.length; i++){
    // console.log(catalogo[i]);
    for(let j = i + 1; j < catalogo.length; j++){
      // console.log(catalogo[i], catalogo[j]);
      // sustituyo el 0 del bucle primero por i para no repita el bucle completo y + 1 para que no haga una pizza con las dos mitades iguales
      combinados.push(`${catalogo[i]} y ${catalogo[j]}`)
    }
  }

  return combinados
    
}

console.log(pedido(catalogo));