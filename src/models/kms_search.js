'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var kms_search = connection.define('kms_search', {
    ResourceName: {
        type: Sequelize.STRING



    },
    ResoureIdentifier: {
        type: Sequelize.STRING
      


    },
    RegionName: {
        type: Sequelize.INTEGER



    }
},

    {
        timestamps: false,
        tableName: 'kms_search'
    });
    kms_search.removeAttribute("id");
module.exports = kms_search