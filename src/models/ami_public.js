'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ami_public = connection.define('ami_public', {
    ImageId: {
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
        tableName: 'ami_public'
    });
    ami_public.removeAttribute("id");

module.exports = ami_public