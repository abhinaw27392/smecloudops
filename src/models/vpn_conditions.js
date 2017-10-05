'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var vpn_conditions = connection.define('vpn_conditions', {
    Name: {
        type: Sequelize.STRING
    

    },
    VpnId: {
        type: Sequelize.STRING
    

    },
    IpAddress: {
        type: Sequelize.STRING
    

    },
    Status: {
        type: Sequelize.STRING
    

    },
    StatusLastChanged: {
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
        tableName: 'vpn_conditions'
    });
    vpn_conditions.removeAttribute("id");
module.exports = vpn_conditions