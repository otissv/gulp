// gulp/move.js

'use strict';

// =============================================================================
// Move folders
// =============================================================================
var rimraf = require('rimraf');

module.exports = function (gulp) {
  var dir = ['./public'];

  gulp.task('remove', function (cb) {
    rimraf(dir, cb);
  });
};
