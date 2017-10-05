'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_mfa = connection.define('iam_mfa', {
    AccountName: {
        type: Sequelize.STRING,



    }
},

    {
        timestamps: false,
        tableName: 'iam_mfa'
    });
    module.exports = iam_mfa
.removeAttribute("id");    
module.exports = iam_mfa