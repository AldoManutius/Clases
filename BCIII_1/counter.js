const fs = require('fs')
const FILENAME = 'counter.txt'

fs.readFile(FILNAME, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })