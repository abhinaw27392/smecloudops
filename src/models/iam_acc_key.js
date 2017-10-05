'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_acc_key = connection.define('iam_acc_key', {
    AccountName: {
        type: Sequelize.STRING,


    }
},

    {
        timestamps: false,
        tableName: 'iam_acc_key'
    });
    iam_acc_key.removeAttribute("id");
module.exports = iam_acc_key