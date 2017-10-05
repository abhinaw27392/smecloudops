'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ebs = connection.define('ebs', {
    AvailabilityZone: {
        type: Sequelize.STRING

    },
    CreateTime: {
        type: Sequelize.TIME,
        allowNull: false

    },
    Size: {
        type: Sequelize.STRING

    },
    State: {
        type: Sequelize.STRING

    },
    VolumeId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
        

    },
    InstanceID: {
        type: Sequelize.STRING

    },
    Status: {
        type: Sequelize.STRING

    },
    VolumeType: {
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
        tableName: 'ebs'
    });

module.exports = ebs