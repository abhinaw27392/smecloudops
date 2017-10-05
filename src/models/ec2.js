'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ec2 = connection.define('ec2', {
    Name: {
        type: Sequelize.STRING

    },
    InstanceId  : {
        type: Sequelize.TIME,
        primaryKey: true,
        allowNull: false

    },
    InstanceType: {
        type: Sequelize.STRING

    },
    LaunchTime: {
        type: Sequelize.TIME,
        allowNull: false

    },
    PrivateIpAddress: {
        type: Sequelize.STRING,
     
        

    },
    PublicIpAddress: {
        type: Sequelize.STRING

    },
    SecurityGroups  : {
        type: Sequelize.STRING

    },
    State: {
        type: Sequelize.STRING

    },
    ImageId: {
        type: Sequelize.STRING

    },
    VpcId: {
        type: Sequelize.STRING

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
    App: {
        type: Sequelize.STRING

    },
    Owner: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'ec2'
    });

module.exports = ec2