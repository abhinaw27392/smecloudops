'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ami_details = connection.define('ami_details', {
    InstanceId: {
        type: Sequelize.STRING

    },
    InstanceName: {
        type: Sequelize.STRING

    },
    ImageId: {
        type: Sequelize.STRING

    },
    ImageName: {
        type: Sequelize.STRING

    },
    Description: {
        type: Sequelize.STRING

    },
    AccountName: {
        type: Sequelize.STRING

    },
    RegionName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'ami_details'
    });

    ami_details.removeAttribute("id");
module.exports = ami_details