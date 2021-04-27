const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/infrastructure')
const table = require('./infrastructure/table')

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('database connected')

        table.init(connection)
        const app = customExpress()

        app.listen(3000, () => console.log('server running in port:3000'))
    }
})



