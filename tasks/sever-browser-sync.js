// gulp/tasks/server-browser-sync.js

'use strict';

// =============================================================================
// Server auto restart & sync browsers
// =============================================================================
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

module.exports = function (gulp, config) {
  var opts =  {
    script: config.serverDir + '/server.js',
    env:    { 'NODE_ENV': 'development' },
    watch:  'backend/**/*.*',
    nodeArgs: ['--debug']
  };

  gulp.task('nodemon', function(cb) {
    var nodemon = require('gulp-nodemon');
    var called = false;

    return nodemon(opts)
    .on('start', function onStart() {
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 500);
    });
  });

  // Restart browser on file change
  gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init({
      files: config.staticFiles,
      proxy: 'http://' + config.host +':' + config.ports.server,
      port: 3333,
      browser: ['google chrome']
    });
  });
};
