'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var rds_backup = connection.define('rds_backup', {
    DBInstanceIdentifier: {
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
       
        tableName: 'rds_backup'
    });
    rds_backup.removeAttribute("id");
module.exports = rds_backup