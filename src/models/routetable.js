'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var routetable = connection.define('routetable', {
        RouteTableId: {
            type: Sequelize.STRING




        },
        VpcId: {
            type: Sequelize.STRING



        },
        DestinationCidrBlock: {
            type: Sequelize.STRING



        },
        State: {
            type: Sequelize.STRING



        },
        GatewayId: {
            type: Sequelize.STRING



        },
        SubnetAssociations: {
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
        tableName: 'routetable'
    });
routetable.removeAttribute("id");
module.exports = routetable