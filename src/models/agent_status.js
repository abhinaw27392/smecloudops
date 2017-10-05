'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var agent_status = connection.define('agent_status', {
        Hostname: {
            type: Sequelize.STRING

        },
        AlertLogic: {
            type: Sequelize.INTEGER

        },
        DeepSecurity: {
            type: Sequelize.INTEGER

        },
        QualysAgent: {
            type: Sequelize.INTEGER

        },
        AccountName: {
            type: Sequelize.STRING

        }
    },

    {
        timestamps: false,
        tableName: 'agent_status'
    });
agent_status.removeAttribute('id');

module.exports = agent_status