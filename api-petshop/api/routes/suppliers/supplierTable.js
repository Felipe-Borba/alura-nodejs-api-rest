const Model = require('./table-model')

/* 
* In the tutorial this is used to translate sequelize command name
* but in my case I will just isolate from sequelize library
*/
module.exports = {
    list() {
        return Model.findAll();
    },

    insert(supplier) {
        return Model.create(supplier);
    }
    
}