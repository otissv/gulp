// gulp/tasks/move.js

'use strict';

// =============================================================================
// Compile CSS
// =============================================================================
var sass = require('gulp-sass');

module.exports = function (gulp, config) {
  gulp.task('sass', function () {
    gulp.src(config.styles.src)
    .pipe(sass({
      outputStyle: config.styles.sassStyle,
      sourceMap:  config.styles.sourceMap
    }))
    .pipe(gulp.dest(config.styles.dest));
  });
};
