'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var qualys_agent = connection.define('qualys_agent', {
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
        tableName: 'qualys_agent'
    });
    qualys_agent.removeAttribute("id");
module.exports = qualys_agent