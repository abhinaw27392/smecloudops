'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ec2_ebs_optimize = connection.define('ec2_ebs_optimize', {
    InstanceId: {
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
        tableName: 'ec2_ebs_optimize'
    });
    ec2_ebs_optimize.removeAttribute("id");

module.exports = ec2_ebs_optimize