'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var script_last_run = connection.define('script_last_run', {
    CompletedTime: {
        type: Sequelize.STRING




    }
},

    {
        timestamps: false,
        tableName: 'script_last_run'
    });
    script_last_run.removeAttribute("id");
module.exports = script_last_run