'use strict';

var Task = require('../models/taskModel');

var indexController = {};

indexController.get = function (req, res) {
  var tasks = Task.find({}, function (err, docs) {
    if (err) {
      res.status(500).send('Internal Server Error!');
    }
    res.render('index', { tasks: docs });
  })
  .sort({created_at: -1});
};

indexController.create = function (req, res) {
  if (!req.body.task) {
    res.json({"message": "task required!"});
  }
  var task = new Task({
    task: req.body.task,
    done: false,
    created_at: Date.now()
  });
  task.save(function (err, task, numAff) {
    if (numAff == 1) {
      res.json({"message": "success"});
    } else {
      res.json({"message": "Internal Server Error!"});
    }
  })
};

module.exports = indexController;
