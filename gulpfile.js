'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('livereload', function () {
  livereload.listen();
  var watcher = gulp.watch(['public/**/*.css', 'public/**/*.js']);
  watcher.on('change', function (event) {
    livereload.changed(event.path);
  });
});

gulp.task('serve', function () {
  var stream = nodemon({
    script: 'app.js',
    ext: 'pug js',
    ignore: ['./node_modules', './public']
  });
  stream.on('restart', function () {
    livereload.reload();
  });
});

gulp.task('develop', ['livereload', 'serve']);

gulp.task('default', ['develop']);
