'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var elb = connection.define('elb', {
    LoadBalancerName: {
        type: Sequelize.STRING,
        allowNull: false

    },
    SecurityGroup: {
        type: Sequelize.STRING
    },
    VPCID: {
        type: Sequelize.STRING

    },
    CreatedTime: {
        type: Sequelize.TIME,
        allowNull: false

    },
    InstancesID: {
        type: Sequelize.STRING

    },
    Subnets: {
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
        tableName: 'elb'
    });
elb.removeAttribute("id");
module.exports = elb