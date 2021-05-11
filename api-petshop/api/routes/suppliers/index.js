const router = require('express').Router();
const Supplier = require('./Supplier');
const supplierTable = require('./supplierTable')


router.get('/suppliers', async (requisition, response) => {
    const result = await supplierTable.list();
    response.send(JSON.stringify(result));
});

router.post('/suppliers', async (requisition, response) => {
    try {
        const supplier = new Supplier(requisition.body);
        await supplier.add();
        response.send(JSON.stringify(supplier));
    } catch (error) {
        //console.log('Error log:', error);
        response.send(JSON.stringify({
            message: error.message
        }))
    }
});

router.get('/suppliers/:id', async (requisition, response) => {
    try {
        const id = requisition.params.id;
        const supplier = new Supplier({ id });
        await supplier.getById();
        response.send(JSON.stringify(supplier));
    } catch (error) {
        //console.log('Error log:', error);
        response.send(JSON.stringify({
            message: error.message
        }))
    }
});

router.put('/suppliers/:id', async (requisition, response) => {

    try {
        const id = requisition.params.id;
        const supplier = new Supplier({ ...requisition.body, id });
        await supplier.update();
        response.end();
    } catch (error) {
        //console.log(error);
        response.send(JSON.stringify({
            message: error.message
        }));
    }

});

router.delete('/suppliers/:id', async (requisition, response) => {
    try {
        const id = requisition.params.id;
        const supplier = new Supplier({ id });
        await supplier.getById();
        await supplier.remove();
        response.end();
    } catch (error) {
        //console.log(error);
        response.send(JSON.stringify({ message: error.message }));
    }
});

module.exports = router;