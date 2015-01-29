// gulp/browserSync.js

'use strict';

// =============================================================================
// Sync Browsers
// =============================================================================
var browserSync = require('browser-sync');
var config = require('../config.js');

module.exports = function (gulp) {
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
