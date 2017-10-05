'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var unused_ebs = connection.define('unused_ebs', {
    AccountName: {
        type: Sequelize.STRING
  

    },
    RegionName: {
        type: Sequelize.STRING
 



    },
    VolumeID : {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false



    },
    Size: {
        type: Sequelize.INTEGER



    },
    CreateTime: {
        type: Sequelize.DATE



    }
},

    {
        timestamps: false,
        tableName: 'unused_ebs'
    });

module.exports = unused_ebs