const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const router = require('./routes/suppliers');
const createTable = require('./data-base/create-table')


createTable;
app.use(bodyParser.json()); //express.json()
app.use('/api', router);

app.listen(config.get('api.port'), () => console.log('server running in port:',config.get('api.port')));
