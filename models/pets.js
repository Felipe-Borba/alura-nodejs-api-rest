const connection = require('../infrastructure/connection')

class pet {
    add(pet, response) {
        const query = `INSERT INTO pets SET ?`

        connection.query(query, pet, error => {
            if(error) {
                console.log(error);
                response.status(400).json(error)
            } else {
                response.status(200).json(pet)
            }
        })
    }
}

module.exports = new pet()