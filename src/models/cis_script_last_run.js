'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var cis_script_last_run = connection.define('cis_script_last_run', {
    CompletedTime: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'cis_script_last_run'
    });

module.exports = cis_script_last_run