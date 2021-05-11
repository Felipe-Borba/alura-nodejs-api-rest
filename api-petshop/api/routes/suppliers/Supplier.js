const supplierTable = require("./supplierTable");

class Supplier {
    constructor({ id, company, email, category, created, updated, version }) {
        this.id = id;
        this.company = company;
        this.email = email;
        this.category = category;
        this.created = created;
        this.updated = updated;
        this.version = version;
    }

    async add() {
        this.check();

        const result = await supplierTable.insert({
            company: this.company,
            email: this.email,
            category: this.category
        })

        this.id = result.id;
        this.created = result.created;
        this.updated = result.created;
        this.version = result.version;
    }

    async getById() {
        const response = await supplierTable.findById(this.id);
        // TODO is there a better way to assign this?
        //* 
        this.company = response.dataValues.company;
        this.email = response.dataValues.email;
        this.category = response.dataValues.category;
        this.created = response.dataValues.created;
        this.updated = response.dataValues.updated;
        this.version = response.dataValues.version;
        //*/
    }

    async update() {
        await supplierTable.findById(this.id);
        const field = ['company', 'email', 'category'];
        const updateField = {};

        field.forEach(field => {
            const value = this[field]; //take class parameters
            if (typeof value === 'string' && value.length > 0) {
                updateField[field] = value;
            }
        });

        if (Object.keys(updateField).length === 0) {
            throw new Error('please supply any field to update');
        }

        await supplierTable.updateValue(this.id, updateField);
    }

    async remove() {
        return supplierTable.remove(this.id);
    }

    check() {
        const check = ['company', 'email', 'category'];

        check.forEach(field => {
            const value = this[field];

            if (typeof value !== 'string' || value.length === 0) {
                throw new Error(`Invalid field: '${field}'`)
            }
        });
    }

}

module.exports = Supplier;
