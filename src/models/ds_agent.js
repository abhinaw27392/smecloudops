'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ds_agent = connection.define('ds_agent', {
    Hostname: {
        type: Sequelize.STRING

    },
    Status: {
        type: Sequelize.STRING

    },
    AccountName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'ds_agent'
    });
    ds_agent.removeAttribute("id");

module.exports = ds_agent