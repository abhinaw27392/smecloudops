'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var securitygroup = connection.define('securitygroup', {
    GroupName: {
        type: Sequelize.STRING




    },
    VpcId: {
        type: Sequelize.STRING



    },
    Outbound: {
        type: Sequelize.STRING



    },
    Inbound: {
        type: Sequelize.STRING



    },
    GroupId : {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    },
    AccountName: {
        type: Sequelize.STRING



    },
    RegionName: {
        type: Sequelize.STRING



    },
    ProjectCode: {
        type: Sequelize.STRING



    },
    BusinessUnit: {
        type: Sequelize.STRING



    },
    Owner: {
        type: Sequelize.STRING



    },
    App: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 'securitygroup'
    });

module.exports = securitygroup