'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var vpc = connection.define('vpc', {
        CidrBlock: {
            type: Sequelize.STRING


        },
        State: {
            type: Sequelize.STRING




        },
        VpcId: {
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
        Name: {
            type: Sequelize.STRING
        },
        BusinessUnit: {
            type: Sequelize.STRING
        },
        ProjectCode: {
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
        tableName: 'vpc'
    });

module.exports = vpc