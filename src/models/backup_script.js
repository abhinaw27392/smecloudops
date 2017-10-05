'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var backup_script = connection.define('backup_script', {
    VolumeId: {
        type: Sequelize.STRING

    },
    SnapshotId: {
        type: Sequelize.STRING

    },
    Size: {
        type: Sequelize.STRING

    },
    CreateDate: {
        type: Sequelize.STRING

    },
    AccountName: {
        type: Sequelize.STRING

    },
    RegionName: {
        type: Sequelize.STRING

    },
    Status: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'backup_script'
    });

    backup_script.removeAttribute("id");

module.exports = backup_script