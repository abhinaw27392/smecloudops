'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var execcmd = connection.define('execcmd', {
    InstanceId: {
        type: Sequelize.STRING,


    },
    ServiceName: {
        type: Sequelize.STRING
    },
    Ouput: {
        type: Sequelize.STRING
    },
    AccountName: {
        type: Sequelize.STRING
    },
    RegionName: {
        type: Sequelize.STRING
    }

},

    {
        timestamps: false,
        tableName: 'execcmd'
    });
    execcmd.removeAttribute("id");

module.exports = execcmd