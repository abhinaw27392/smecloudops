'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var elk = connection.define('elk', {
    AccountName: {
        type: Sequelize.STRING,


    },
    RegionName: {
        type: Sequelize.STRING
    }

},

    {
        timestamps: false,
        tableName: 'elk'
    });
    
    elk.removeAttribute("id");

module.exports = elk