'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_script_last_run = connection.define('unused_script_last_run', {
    CompletedTime: {
        type: Sequelize.STRING
    

    }
},

    {
        timestamps: false,
        tableName: 'unused_script_last_run'
    });
    unused_script_last_run.removeAttribute("id");
module.exports = unused_script_last_run