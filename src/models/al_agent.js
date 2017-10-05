'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var al_agent = connection.define('al_agent', {
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
        tableName: 'al_agent'
    });
    al_agent.removeAttribute('id');

module.exports = al_agent;