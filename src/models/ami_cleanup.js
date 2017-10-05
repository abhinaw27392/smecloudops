'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ami_cleanup = connection.define('ami_cleanup', {
    ImageId: {
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
        tableName: 'ami_cleanup'
    });

    ami_cleanup.removeAttribute("id");
module.exports = ami_cleanup