'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var s3_open_public = connection.define('s3_open_public', {
    BucketName: {
        type: Sequelize.STRING




    },
    Grantee: {
        type: Sequelize.STRING



    },
    Permission: {
        type: Sequelize.STRING



    },
    AccountName: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 's3_open_public'
    });
    s3_open_public.removeAttribute("id");
module.exports = s3_open_public