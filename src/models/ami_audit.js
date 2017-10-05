'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ami_audit = connection.define('ami_audit', {
    ImageId: {
        type: Sequelize.STRING

    },
    Date: {
        type: Sequelize.STRING

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
        tableName: 'ami_audit'
    });

    ami_audit.removeAttribute("id");

module.exports = ami_audit