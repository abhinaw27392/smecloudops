'use strict';

var Sequelize = require('sequelize');
var connection = require('./connection');

var iam_pass_policy = connection.define('iam_pass_policy', {
    AccountName: {
        type: Sequelize.STRING



    },
    AllowUsersToChangePassword: {
        type: Sequelize.STRING
      

    },
    ExpirePasswords: {
        type: Sequelize.INTEGER



    },
    MaxPasswordAge: {
        type: Sequelize.STRING



    },
    HardExpiry: {
        type: Sequelize.STRING



    },
    MinimumPasswordLength: {
        type: Sequelize.STRING


    },
    RequireLowercaseCharacters: {
        type: Sequelize.STRING


    },
    PasswordReusePrevention: {
        type: Sequelize.STRING


    },
    RequireNumbers: {
        type: Sequelize.STRING,


    },
    RequireSymbols: {
        type: Sequelize.STRING


    },
    RequireUppercaseCharacters: {
        type: Sequelize.STRING


    },
    Status: {
        type: Sequelize.STRING


    }
},

    {
        timestamps: false,
        tableName: 'iam_pass_policy'
    });
    iam_pass_policy.removeAttribute('id');
module.exports = iam_pass_policy