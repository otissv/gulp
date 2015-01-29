// gulp/testem.js

'use strict';

// =============================================================================
// Remove directory
// =============================================================================
var testem = require('gulp-testem');

module.exports = function (gulp) {
  gulp.task('testem', function (done) {
    gulp.src(config.testem, {read: false})
    .pipe(testem({configFile: 'testem.json'}));
  });
};
