const supplierTable = require("./supplierTable");

class Supplier {
    constructor({ id, company,  email, category, created, updated, version }) {
        this.id = id;
        this.company = company;
        this.email = email;
        this.category = category;
        this.created = created;
        this.updated = updated;
        this.version = version;
    }

    async add() {
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
        this.company = response.dataValues.company;
        this.email = response.dataValues.email;
        this.category = response.dataValues.category;
        this.created = response.dataValues.created;
        this.updated = response.dataValues.updated;
        this.version = response.dataValues.version;
    }

}

module.exports = Supplier;
