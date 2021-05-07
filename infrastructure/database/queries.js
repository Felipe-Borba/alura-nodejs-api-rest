const connection = require('./connection')

const runQuery = (query, parameters = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, parameters, (err, result, field) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })

}