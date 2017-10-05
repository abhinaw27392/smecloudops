'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_keys_lastused = connection.define('iam_keys_lastused', {
    UserName: {
        type: Sequelize.STRING,



    },
    AccessKeyId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false


    },
    LastUsed: {
        type: Sequelize.STRING,



    },
    AccountName: {
        type: Sequelize.STRING,



    },
    ServiceName: {
        type: Sequelize.STRING,



    },
    Region: {
        type: Sequelize.STRING,


    }
},

    {
        timestamps: false,
        tableName: 'iam_keys_lastused'
    });

module.exports = iam_keys_lastused