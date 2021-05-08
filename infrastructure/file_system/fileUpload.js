const fs = require('fs')
const path = require('path')

module.exports = (filePath, fileName, callbackImageCreated) => {
    const validType = ['jpg', 'png', 'jpeg']
    const type = path.extname(filePath)
    const validate = validType.indexOf(type.substring(1)) === -1

    if (validate) {
        const error = 'invalid image type'
        console.log('error: invalid image type');
        callbackImageCreated(error) 
    } else {
        const newPath = `./assets/images/${fileName}${type}`
        // is there any difference between ./ and ../ ? 
        fs.createReadStream(filePath)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => {
                callbackImageCreated(false, newPath)
            })
    }
}
