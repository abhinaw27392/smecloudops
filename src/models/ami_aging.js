'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ami_aging = connection.define('ami_aging', {
    ImageId: {
        type: Sequelize.STRING

    },
    Aging: {
        type: Sequelize.STRING

    },
    UsingServers: {
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
        tableName: 'ami_aging'
    });

    ami_aging.removeAttribute("id");

module.exports = ami_aging