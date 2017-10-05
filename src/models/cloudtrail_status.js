'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var cloudtrail_status = connection.define('cloudtrail_status', {
    AccountName: {
        type: Sequelize.STRING

    },
    RegionName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'cloudtrail_status'
    });

    cloudtrail_status.removeAttribute("id");
module.exports = cloudtrail_status