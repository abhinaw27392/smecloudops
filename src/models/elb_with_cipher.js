'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var elb_with_cipher = connection.define('elb_with_cipher', {
    LoadBalancerName: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    SslPolicyName: {
        type: Sequelize.STRING
    },
    AccountName: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    RegionName: {
        type: Sequelize.STRING

    }

},

    {
        timestamps: false,
        tableName: 'elb_with_cipher'
    });

module.exports = elb_with_cipher