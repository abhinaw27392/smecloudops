'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_group = connection.define('iam_group', {
    CreateDate: {
        type: Sequelize.STRING,
        allowNull: false


    },
    GroupName: {
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
        tableName: 'iam_group'
    });

module.exports = iam_group