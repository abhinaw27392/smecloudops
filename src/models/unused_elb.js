'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_elb = connection.define('unused_elb', {
    AccountName: {
        type: Sequelize.STRING
    

    },
    RegionName: {
        type: Sequelize.STRING




    },
    LoadBalancerName: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    },
    CreatedDate: {
        type: Sequelize.DATE


    }
},

    {
        timestamps: false,
        tableName: 'unused_elb'
    });

module.exports = unused_elb