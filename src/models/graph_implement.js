'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var graph_implement = connection.define('graph_implement', {
    ResourceName: {
        type: Sequelize.STRING,


    },
    TotalCost: {
        type: Sequelize.FLOAT
    },
    AccountName : {
        type: Sequelize.STRING
    },
    RegionName: {
        type: Sequelize.STRING
    }
},

    {
        timestamps: false,
        tableName: 'graph_implement'
    });
    graph_implement.removeAttribute("id");
module.exports = graph_implement