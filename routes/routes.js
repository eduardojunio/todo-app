'use strict';

var express = require('express');

var indexRoute = require('./indexRoute');

var router = express.Router();

router.use('/', indexRoute);

module.exports = router;
