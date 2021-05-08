const router = require('express').Router();
const supplierTable = require('./supplierTable')


router.use('/suppliers', (requisition, response) => {
    const result = supplierTable.list();
    response.send(JSON.stringify(result));
});

module.exports = router;