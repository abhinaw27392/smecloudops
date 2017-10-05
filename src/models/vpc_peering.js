'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var vpc_peering = connection.define('vpc_peering', {
    Name: {
        type: Sequelize.STRING
    

    },
    VpcId: {
        type: Sequelize.STRING
    

    },
    CidrBlock: {
        type: Sequelize.STRING
    

    },
    AccountName: {
        type: Sequelize.STRING
    

    }
},

    {
        timestamps: false,
        tableName: 'vpc_peering'
    });
    vpc_peering.removeAttribute("id");
module.exports = vpc_peering