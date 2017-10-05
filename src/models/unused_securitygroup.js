'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_securitygroup = connection.define('unused_securitygroup', {
    GroupId: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    

    },
    AccountName: {
        type: Sequelize.STRING




    },
    RegionName: {
        type: Sequelize.STRING,
    



    },
    GroupName: {
        type: Sequelize.STRING,
    



    }
},

    {
        timestamps: false,
        tableName: 'unused_securitygroup'
    });

module.exports = unused_securitygroup