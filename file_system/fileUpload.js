const fs = require('fs')
// is there any difference between ./ and ../ ? 
fs.readFile('./assets/neko.jpg',(error, buffer) => {
    console.log('image buffered')

    fs.writeFile('./assets/neko(copy).jpg', buffer, (error) => {
        console.log('image copied successfully')

    })
})