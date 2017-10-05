'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_user = connection.define('iam_user', {
    CreateDate: {
        type: Sequelize.STRING,
        allowNull: false



    },
    UserName: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false


    },
    PasswordLastUsed: {
        type: Sequelize.INTEGER,



    },
    AccountName: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    }
},

    {
        timestamps: false,
        tableName: 'iam_user'
    });

module.exports = iam_user