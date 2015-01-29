// gulp/errors.js

'use strict';

// =============================================================================
// Error handler
// =============================================================================
var plumber = require('gulp-plumber');

module.exports = function (gulp) {
  var gulp_src = gulp.src;
    gulp.src = function() {
      return gulp_src.apply(gulp, arguments)
        .pipe(plumber(function(error) {
          gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
          this.emit('end');
      })
    );
  };
};
