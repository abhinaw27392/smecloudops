'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_elasticip = connection.define('unused_elasticip', {
    PublicIp: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false


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
        tableName: 'unused_elasticip'
    });

module.exports = unused_elasticip