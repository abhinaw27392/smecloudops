'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ebs_terminate_protect = connection.define('ebs_terminate_protect', {
    InstanceId: {
        type: Sequelize.STRING

    },
    VolumeId: {
        type: Sequelize.STRING,
    

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
        tableName: 'ebs_terminate_protect'
    });
    ebs_terminate_protect.removeAttribute("id");

module.exports = ebs_terminate_protect