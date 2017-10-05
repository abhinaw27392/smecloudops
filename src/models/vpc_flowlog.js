'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var vpc_flowlog = connection.define('vpc_flowlog', {
    AccountName: {
        type: Sequelize.STRING
    

    },
    RegionName: {
        type: Sequelize.STRING
    

    }
},

    {
        timestamps: false,
        tableName: 'vpc_flowlog'
    });
    vpc_flowlog.removeAttribute("id");
module.exports = vpc_flowlog