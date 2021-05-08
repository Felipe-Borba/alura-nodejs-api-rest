const connection = require('../infrastructure/database/connection')
const upload = require('../infrastructure/file_system/fileUpload')
class pet {
    add(pet, response) {
        const query = `INSERT INTO pets SET ?`

        upload(pet.image, pet.name, (error, newPath) => {

            if (error) {
                response.status(400).json({error})
            } else {
                const newPet = { name: pet.name, image: newPath }

                connection.query(query, newPet, error => {
                    if (error) {
                        console.log(error);
                        response.status(400).json(error)
                    } else {
                        response.status(200).json(newPet)
                    }
                })
            }
        })

    }
}

module.exports = new pet()