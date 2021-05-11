const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const router = require('./routes/suppliers');
const createTable = require('./data-base/create-table');
const NotFound = require('./error/NotFound');


createTable;
app.use(bodyParser.json()); //express.json()
app.use('/api', router);

app.use((error, requisition, response, next) => {
    if (error instanceof NotFound) {
        response.status(404);
    } else {
        response.status(400);
    }

    response.send(JSON.stringify({
        message: error.message,
        idError: error.idError
    }));
});

app.listen(config.get('api.port'), () => console.log('server running in port:',config.get('api.port')));
