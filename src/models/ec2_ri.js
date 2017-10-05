'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ec2_ri = connection.define('ec2_ri', {
    No_Of_Server    : {
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
        tableName: 'ec2_ri'
    });

    ec2_ri.removeAttribute("id");

module.exports = ec2_ri