'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var rds_multi_az = connection.define('rds_multi_az', {
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
        tableName: 'rds_multi_az'
    });
    rds_multi_az.removeAttribute("id");
module.exports = rds_multi_az