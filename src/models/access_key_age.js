'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var access_key_age = connection.define('access_key_age', {
    UserName: {
        type: Sequelize.STRING
        

    },
    AccessKeyId: {
        type: Sequelize.STRING
        


    },
    AccessKeyAge: {
        type: Sequelize.STRING
    

    },
    Status: {
        type: Sequelize.STRING
  

    },
    AccountName: {
        type: Sequelize.STRING

    }
},

    {
        timestamps: false,
        tableName: 'access_key_age'
    });
    access_key_age.removeAttribute('id');

module.exports = access_key_age;