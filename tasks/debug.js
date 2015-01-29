// gulp/nodeInspector.js

'use strict';

// =============================================================================
// Node debugging
//
// Node Inspector must be installed globally
// =============================================================================
var run = require('gulp-run');

module.exports = function (gulp) {
  gulp.task('debug', function () {
    run('node-inspector').exec();
  });
};
