'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_snapshot = connection.define('unused_snapshot', {
    AccountName: {
        type: Sequelize.STRING,
       

    },
    RegionName: {
        type: Sequelize.STRING




    },
    Size: {
        type: Sequelize.INTEGER
    



    },
    SnapshotID: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    
    



    },
    CreatedDate: {
        type: Sequelize.DATE
    



    }
},

    {
        timestamps: false,
        tableName: 'unused_snapshot'
    });

module.exports = unused_snapshot