const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/infrastructure')

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('database connected')

        const app = customExpress()

        app.listen(3000, () => console.log('server running in port:3000'))
    }
})



