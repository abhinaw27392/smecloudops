'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var s3_limit_exceed = connection.define('s3_limit_exceed', {
    AccountName: {
        type: Sequelize.STRING




    }
    
},

    {
        timestamps: false,
        tableName: 's3_limit_exceed'
    });
    s3_limit_exceed.removeAttribute("id");
module.exports = s3_limit_exceed