const router = require('express').Router();
const Supplier = require('./Supplier');
const supplierTable = require('./supplierTable')


router.get('/suppliers', async (requisition, response) => {
    const result = await supplierTable.list();
    response.send(JSON.stringify(result));
});

router.post('/suppliers', async (requisition, response) => {
    const supplier = new Supplier(requisition.body);
    await supplier.add();
    response.send(JSON.stringify(supplier));
});

module.exports = router;