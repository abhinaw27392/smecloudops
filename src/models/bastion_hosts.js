'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var bastion_hosts = connection.define('bastion_hosts', {
    Name: {
        type: Sequelize.STRING

    },
    PublicIpAddress: {
        type: Sequelize.STRING

    },
    PrivateIpAddress: {
        type: Sequelize.STRING

    },
    AccountName: {
        type: Sequelize.STRING

    },
    RegionName: {
        type: Sequelize.STRING

    },
    Status: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'bastion_hosts'
    });
    bastion_hosts.removeAttribute("id");

module.exports = bastion_hosts