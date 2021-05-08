const TableModel = require('../routes/suppliers/table-model');

TableModel.sync()
    .then((response) => {
        console.log('table name:',response,'created');
    })
    .catch((error) => console.log('table create error: ',error) );

module.exports = new TableModel;