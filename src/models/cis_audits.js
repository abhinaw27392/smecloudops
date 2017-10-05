'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var cis_audits = connection.define('cis_audits', {
    Hostname: {
        type: Sequelize.STRING

    },
    Score: {
        type: Sequelize.STRING

    },
    VpcName: {
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
        tableName: 'cis_audits'
    });

    cis_audits.removeAttribute("id");
module.exports = cis_audits