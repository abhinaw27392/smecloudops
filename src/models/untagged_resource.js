'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var untagged_resource = connection.define('untagged_resource', {
    Resource: {
        type: Sequelize.STRING
  

    },
    ResourceIdentifier: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    },
    AccountName : {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    },
    RegionName: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 'untagged_resource'
    });

module.exports = untagged_resource