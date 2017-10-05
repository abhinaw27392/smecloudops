'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var db_encryption = connection.define('db_encryption', {
    ResourceName: {
        type: Sequelize.STRING

    },
    ResourceIdentifier: {
        type: Sequelize.STRING

    },
    AccountName: {
        type: Sequelize.STRING

    },
    RegionName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'db_encryption'
    });

    db_encryption.removeAttribute("id");

module.exports = db_encryption