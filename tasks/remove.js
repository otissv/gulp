// gulp/remove.js

'use strict';

// =============================================================================
// Remove directory
// =============================================================================
var rimraf = require('rimraf');

module.exports = function (gulp) {
  var dir = ['./public'];

  gulp.task('remove', function (cb) {
    rimraf(dir, cb);
  });
};
