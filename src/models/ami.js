'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ami = connection.define('ami', {
    CreateDate: {
        type: Sequelize.STRING

    },
    ImageId: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false

    },
    Name: {
        type: Sequelize.STRING

    },
    State: {
        type: Sequelize.STRING

    },
    DeviceName: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false


    },
    EbsVolumeSize: {
        type: Sequelize.INTEGER

    },
    AccountName: {
        type: Sequelize.STRING

    },
    RegionName: {
        type: Sequelize.STRING

    },
},

    {
        timestamps: false,
        tableName: 'ami'
    });

module.exports = ami