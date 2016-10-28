'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var indexRoute = require('../routes/indexRoute');

var server = express();

server.set('view engine', 'pug');
server.set('views', path.join(__dirname, '../views'));

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use('/assets', express.static(path.join(__dirname, '../public')));

server.use('/', indexRoute);

module.exports = server;
