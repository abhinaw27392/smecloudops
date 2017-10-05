'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iamusers_without_mfa = connection.define('iamusers_without_mfa', {
    UserName: {
        type: Sequelize.STRING,

        primaryKey: true,
        allowNull: false


    },
    AccountName: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false


    }
},

    {
        timestamps: false,
        tableName: 'iamusers_without_mfa'
    });

module.exports = iamusers_without_mfa