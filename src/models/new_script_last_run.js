'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var new_script_last_run = connection.define('new_script_last_run', {
    CompletedTime: {
        type: Sequelize.STRING

       

    }
},

    {
        timestamps: false,
        tableName: 'new_script_last_run'
    });
    new_script_last_run.removeAttribute("id");

module.exports = new_script_last_run