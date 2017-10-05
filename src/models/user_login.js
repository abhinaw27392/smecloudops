'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var user_login = connection.define('user_login', {
    Username: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    

    },
    Password: {
        type: Sequelize.STRING




    },
    isAdmin:{
        type: Sequelize.INTEGER
    }
},

    {
        timestamps: false,
        tableName: 'user_login'
    });

module.exports = user_login