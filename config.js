// gulp/config/js

// gulpfile.js

'use strict';

// =============================================================================
// Configuration
// =============================================================================

// =============================================================================
// Configuration
// =============================================================================

module.exports = {
  host: 'localhost',
  serverDir: './backend',
  staticFiles: 'public/**/*.*',
  testsFiles: './tests/**/*.js',
  ports: {
    server: 3000,
    test: 7358
  },
  scripts: [
    './gulpfile.js',
    './public/**/*.js',
    './config/**/*.js',
    './database/*.js',
    './backend/*.js',
    './lib/*.js',
    './tests/**/*.js',
    '!./node_modules/**/*.js'
  ],

  testem: './tests/client/*.js',
  divider: '==============================================================',
  stringReplace: function (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
};
