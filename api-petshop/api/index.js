const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config')

app.use(bodyParser.json()); //express.json()
app.listen(config.get('api.port'), () => console.log('API working'))
