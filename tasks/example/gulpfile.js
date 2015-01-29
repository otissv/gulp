// gulpfile.js


'use strict';

// =============================================================================
// Gulp
// =============================================================================
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./gulp/config.js');


// =============================================================================
// Tasks
// =============================================================================
require('./gulp/tasks/errors.js')(gulp);
require('./gulp/tasks/lintJs.js')(gulp, config);
require('./gulp/tasks/remove.js')(gulp);
require('./gulp/tasks/move.js')(gulp);
require('./gulp/tasks/sever-browser-sync.js')(gulp, config);
require('./gulp/tasks/debug')(gulp);
require('./gulp/tasks/sass.js')(gulp);

// Watch files for changes
gulp.task('watch', function () {
  gulp.watch(config.scripts, ['lintJs']);
});


// Start server
gulp.task('serve', ['browser-sync']);
gulp.task('build', []);
gulp.task('default', ['lintJs', 'watch']);
