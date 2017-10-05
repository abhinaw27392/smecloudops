'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var s3 = connection.define('s3', {
    BucketName: {
        type: Sequelize.STRING




    },
    CreationDate: {
        type: Sequelize.TIME



    },
    AccountName: {
        type: Sequelize.STRING



    },
    Size_GB: {
        type: Sequelize.FLOAT



    },
    ProjectCode: {
        type: Sequelize.STRING



    },
    BusinessUnit: {
        type: Sequelize.STRING



    },
    Owner: {
        type: Sequelize.STRING



    },
    App: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 's3'
    });
    s3.removeAttribute("id");
module.exports = s3