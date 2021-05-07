const fs = require('fs')

module.exports = (path, fileName, callbackImageCreated) => {
    const newPath = `./assets/images/${fileName}`
    // is there any difference between ./ and ../ ? 
    fs.createReadStream(path)
        .pipe(fs.createWriteStream(newPath))
        .on('finish', () => {
            callbackImageCreated(newPath)
        })

}