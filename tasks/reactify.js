// gulp/tasks/reactify.js

'use strict';

// =============================================================================
// Transpile jsx flies and bundle javascript files
// =============================================================================
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');

module.exports = function (gulp, config) {
  gulp.task('reactify', function () {
    var bundler = browserify({
      entries: config.scripts.baseScript,
      transform: reactify,
      cache: {},
      packageCache: {},
      fullPaths: true,
      debug: true
    });
    bundler;

    var bundle = function() {
      return bundler
      .bundle()
      .on('error', function () {})
      .pipe(source(config.scripts.outputFile))
      .pipe(gulp.dest(config.scripts.dest));
    };

    if(global.isWatching) {
      bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    return bundle();
  });
};
