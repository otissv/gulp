// gulp/tasks/browserSync.js

'use strict';

// =============================================================================
// Sync Browsers
// =============================================================================
var browserSync = require('browser-sync');

module.exports = function (gulp, config) {
  // Restart browser on file change
  gulp.task('browser-sync', function() {
    browserSync.init({
      files: config.staticFiles,
      proxy: 'http://' + config.host +':' + config.ports.server,
      port: 3333,
      browser: ['google chrome']
    });
  });
};
