'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var old_ebs_optimize = connection.define('old_ebs_optimize', {
    InstanceId: {
        type: Sequelize.STRING
     



    },
    VolumeId: {
        type: Sequelize.STRING
      


    },
    Size: {
        type: Sequelize.INTEGER



    },
    Status: {
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
        tableName: 'old_ebs_optimize'
    });
    old_ebs_optimize.removeAttribute("id");
module.exports = old_ebs_optimize