'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

mongoose.connect('mongodb://test:test@ds151137.mlab.com:51137/todo-app');
mongoose.Promise = require('bluebird');

var routes = require('../routes/routes');

var server = express();

server.set('view engine', 'pug');
server.set('views', path.join(__dirname, '../views'));

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use('/assets', express.static(path.join(__dirname, '../public')));

server.use('/', routes);

module.exports = server;
