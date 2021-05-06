const fs = require('fs')


// is there any difference between ./ and ../ ? 
fs.createReadStream('./assets/neko.jpg')
    .pipe(fs.createWriteStream('./assets/neko(copy).jpg'))
    .on('finish', () => {
        console.log('image copied successfully')
    })