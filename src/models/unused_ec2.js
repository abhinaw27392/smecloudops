'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_ec2 = connection.define('unused_ec2', {
    Name: {
        type: Sequelize.STRING
  

    },
    InstanceId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
 



    },
    CPUUtilization : {
        type: Sequelize.STRING
     



    },
    AccountName : {
        type: Sequelize.INTEGER



    },
    RegionName: {
        type: Sequelize.DATE



    },
    InstanceType: {
        type: Sequelize.DATE



    },
    TotalCost: {
        type: Sequelize.DECIMAL



    }
},

    {
        timestamps: false,
        tableName: 'unused_ec2'
    });

module.exports = unused_ec2