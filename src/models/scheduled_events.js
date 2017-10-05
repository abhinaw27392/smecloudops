'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var scheduled_events = connection.define('scheduled_events', {
    InstanceId: {
        type: Sequelize.STRING




    },
    EventCode: {
        type: Sequelize.STRING



    },
    EventDescription: {
        type: Sequelize.STRING



    },
    EventNotBefore: {
        type: Sequelize.DATE



    },
    EventNotAfter: {
        type: Sequelize.DATE



    },
    EventZone: {
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
        tableName: 'scheduled_events'
    });
    scheduled_events.removeAttribute("id");
module.exports = scheduled_events