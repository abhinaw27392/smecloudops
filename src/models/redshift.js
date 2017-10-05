'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var redshift = connection.define('redshift', {
    VpcId: {
        type: Sequelize.STRING
     



    },
    EndpointAddress: {
        type: Sequelize.STRING
  


    },
    EndpointPort: {
        type: Sequelize.STRING



    },
    ClusterIdentifier: {
        type: Sequelize.STRING



    },
    ClusterStatus: {
        type: Sequelize.STRING



    },
    NodeType: {
        type: Sequelize.STRING



    },
    NumberOfNodes: {
        type: Sequelize.STRING



    },
    PubliclyAccessible: {
        type: Sequelize.STRING



    },
    AvailabilityZone: {
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
        tableName: 'redshift'
    });
    redshift.removeAttribute("id");
module.exports = redshift