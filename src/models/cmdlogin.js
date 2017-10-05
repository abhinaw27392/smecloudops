'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var cmdlogin = connection.define('cmdlogin', {
    Username: {
        type: Sequelize.STRING

    },
    Password: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'cmdlogin'
    });

    cmdlogin.removeAttribute("id");

module.exports = cmdlogin