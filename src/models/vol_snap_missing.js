'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var vol_snap_missing = connection.define('vol_snap_missing', {
    VolumeId: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
       

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
        tableName: 'vol_snap_missing'
    });

module.exports = vol_snap_missing