'use strict';

// =============================================================================
// Lint javascript files
// =============================================================================

var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var config = require('../config.js');

module.exports = function lintJs (gulp) {
  // Lint scripts
  gulp.task('lintJs', function () {
    return gulp.src(config.scripts)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
      console.log(config.divider);
  });
};
