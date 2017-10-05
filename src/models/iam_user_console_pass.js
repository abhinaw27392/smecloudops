'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_user_console_pass = connection.define('iam_user_console_pass', {
    UserName: {
        type: Sequelize.STRING




    },
    AccountName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'iam_user_console_pass'
    });
    iam_user_console_pass.removeAttribute("id");
module.exports = iam_user_console_pass