'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var rds = connection.define('rds', {
    DBInstanceIdentifier: {
        type: Sequelize.STRING



    },
    Engine: {
        type: Sequelize.STRING


    },
    DBInstanceClass: {
        type: Sequelize.STRING



    },
    InstanceCreateTime: {
        type: Sequelize.STRING
     

    }
    ,
    DBInstanceStatus: {
        type: Sequelize.INTEGER



    },

    Endpoint_Port: {
        type: Sequelize.STRING



    },

    AvailabilityZone: {
        type: Sequelize.INTEGER



    },

    DBSubnetGroup_VpcId: {
        type: Sequelize.STRING



    },

    VpcSecurityGroupId: {
        type: Sequelize.STRING



    },

    AccountName: {
        type: Sequelize.STRING



    },

    RegionName: {
        type: Sequelize.STRING



    },

    ProjectCode: {
        type: Sequelize.STRING



    },

    BusinessUnit: {
        type: Sequelize.STRING



    },

    Owner: {
        type: Sequelize.STRING



    },

    App: {
        type: Sequelize.STRING



    },

    DBName: {
        type: Sequelize.STRING



    }
},

    {
        timestamps: false,
        tableName: 'rds'
    });
    rds.removeAttribute("id");
module.exports = rds