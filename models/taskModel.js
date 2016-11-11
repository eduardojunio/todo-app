'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  task: String,
  done: Boolean,
  created_at: Date
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
