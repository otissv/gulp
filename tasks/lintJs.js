'use strict';

// =============================================================================
// Lint javascript files
// =============================================================================

var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

module.exports = function lintJs (gulp, config) {
  // Lint scripts
  gulp.task('lintJs', function () {
    return gulp.src(config.scripts)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
      console.log(config.divider);
  });
};
