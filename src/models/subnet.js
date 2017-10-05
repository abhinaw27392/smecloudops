'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var subnet = connection.define('subnet', {
    SubnetId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false

    },
    VpcId: {
        type: Sequelize.STRING



    },
    State: {
        type: Sequelize.STRING,
        allowNull: false



    },
    CidrBlock: {
        type: Sequelize.STRING



    },
    AvailabilityZone: {
        type: Sequelize.STRING




    },
    AvailableIpAddressCount: {
        type: Sequelize.INTEGER




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
        tableName: 'subnet'
    });

module.exports = subnet