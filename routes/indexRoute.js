'use strict';

var indexController = require('../controllers/indexController');
var router = require('express').Router();

router.get('/', indexController.get);
router.post('/', indexController.create);

module.exports = router;
