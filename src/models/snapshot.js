'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var snapshot = connection.define('snapshot', {
    SnapshotID: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false





    },
    VolumeID: {
        type: Sequelize.STRING



    },
    StartTime: {
        type: Sequelize.STRING,
        allowNull: false



    },
    State: {
        type: Sequelize.STRING



    },
    VolumeSize: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    },
    Progress: {
        type: Sequelize.STRING



    },
    AccountName: {
        type: Sequelize.STRING



    },
    RegionName: {
        type: Sequelize.STRING



    },
    Name: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 'snapshot'
    });

module.exports = snapshot