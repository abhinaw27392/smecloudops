'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_keypair = connection.define('unused_keypair', {
    KeyName: {
        type: Sequelize.STRING
    

    },
    AccountName: {
        type: Sequelize.STRING




    },
    RegionName: {
        type: Sequelize.STRING,
    



    }
},

    {
        timestamps: false,
        tableName: 'unused_keypair'
    });
    unused_keypair.removeAttribute("id");
module.exports = unused_keypair