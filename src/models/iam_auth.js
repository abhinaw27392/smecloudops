'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_auth = connection.define('iam_auth', {
    UserName: {
        type: Sequelize.STRING,


    },
    AccountName: {
        type: Sequelize.STRING,


    }
},

    {
        timestamps: false,
        tableName: 'iam_auth'
    });
    iam_auth.removeAttribute("id");

module.exports = iam_auth