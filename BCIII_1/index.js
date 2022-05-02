const fs = require(`fs`)

console.log(fs);

const fs = require('fs')

const content = `Hello World`


fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
/*
crear ficheros/carpetas
mover ficheros/carpetas
eliminar ficheros/carpetas
renombrar ficheros/carpetas
editar/escribir ficheros/carpetas
añadir append/carpetas
*/