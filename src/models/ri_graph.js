'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var ri_graph = connection.define('ri_graph', {
    No_of_Server: {
        type: Sequelize.INTEGER




    },
    One_Month_Cost: {
        type: Sequelize.INTEGER



    },
    Second_Month_Cost: {
        type: Sequelize.INTEGER



    },
    Third_Month_Cost: {
        type: Sequelize.INTEGER



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
        tableName: 'ri_graph'
    });
    ri_graph.removeAttribute("id");
module.exports = ri_graph