// gulp/tasks/testem.js

'use strict';

// =============================================================================
// Test Runner
// =============================================================================
var testem = require('gulp-testem');

module.exports = function (gulp) {
  gulp.task('testem', function (done) {
    gulp.src(config.testem, {read: false})
    .pipe(testem({configFile: 'testem.json'}));
  });
};
