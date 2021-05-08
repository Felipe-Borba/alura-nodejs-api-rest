const Sequelize = require('sequelize');
const intence = require('../../data-base')

const column = {
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.ENUM('food', 'toy'),
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'suppliers',
    timestams: true,
    // optional rename section //
    createdAt: 'created',
    updatedAt: 'updated',
    version: 'version'
    //                        //
}

module.exports = intence.define('supplier', column, options)
