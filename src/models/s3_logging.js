'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var s3_logging = connection.define('s3_logging', {
    BucketName: {
        type: Sequelize.STRING




    },
    AccountName: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 's3_logging'
    });
    s3_logging.removeAttribute("id");
module.exports = s3_logging