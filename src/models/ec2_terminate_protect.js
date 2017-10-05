'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ec2_terminate_protect = connection.define('ec2_terminate_protect', {
    InstanceId    : {
        type: Sequelize.STRING

    },
    AccountName: {
        type: Sequelize.STRING,
      

    },
    RegionName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'ec2_terminate_protect'
    });
    ec2_terminate_protect.removeAttribute("id");

module.exports = ec2_terminate_protect