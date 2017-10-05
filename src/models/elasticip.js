'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var elasticip = connection.define('elasticip', {
    InstanceId    : {
        type: Sequelize.STRING

    },
    PublicIp: {
        type: Sequelize.STRING,
        primaryKey: true,
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
        tableName: 'elasticip'
    });

module.exports = elasticip