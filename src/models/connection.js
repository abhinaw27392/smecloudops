'use strict';

var Sequelize = require('sequelize');


 var connection = new Sequelize('aws_assets', 'root', '');

// var connection = new Sequelize('leave_admin', 'ahinfo@ah-leave-middleware-mysqldbserver', 'admin@1234', {
// host: "ah-leave-middleware-mysqldbserver.mysql.database.azure.com",
// dialect:'mariadb',
// port : 3306,
// dialectOptions: {
// encrypt : true, // This is important if you are using Azure.
// insecureAuth: true
// }
// });


module.exports = connection;