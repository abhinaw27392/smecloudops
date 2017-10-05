'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ssl_cert = connection.define('ssl_cert', {
    DomainName: {
        type: Sequelize.STRING

    },
    Status: {
        type: Sequelize.STRING



    },
    ExpiredDate: {
        type: Sequelize.STRING,
        allowNull: false



    },
    AccountName: {
        type: Sequelize.STRING



    },
    RegionName: {
        type: Sequelize.STRING




    }
},

    {
        timestamps: false,
        tableName: 'ssl_cert'
    });
    ssl_cert.removeAttribute("id");
module.exports = ssl_cert