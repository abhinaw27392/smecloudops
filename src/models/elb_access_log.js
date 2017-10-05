'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var elb_access_log = connection.define('elb_access_log', {
    LoadBalancerName: {
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
        tableName: 'elb_access_log'
    });
    elb_access_log.removeAttribute("id");
module.exports = elb_access_log