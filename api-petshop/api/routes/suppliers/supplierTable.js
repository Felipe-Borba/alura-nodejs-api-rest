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
    },

    async findById(id) {
        const find = await Model.findOne({
            where: {
                id: id
            }
        });
        if (!find) {
            throw new Error('supplier not found');
        }

        return find;
    },

    async updateValue(id, updateField) {
        return Model.update(
            updateField,
            {
                where: { id }
            }
        );
    }
}