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
}

module.exports = Supplier;
