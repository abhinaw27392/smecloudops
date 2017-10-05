'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var profilename = connection.define('profilename', {
        AccountName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },

    {
        timestamps: false,
        tableName: 'profilename'
    });
profilename.removeAttribute("id");
module.exports = profilename