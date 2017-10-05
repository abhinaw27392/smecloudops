var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var allrouting = require('./route/routing');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.use(logger('dev'));
app.use(bodyParser.json({
    limit: '25mb',

}));

app.use(bodyParser.urlencoded({ limit: '25mb', extended: false }));
app.use(cookieParser());

app.use('/', allrouting);



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

module.exports = app;