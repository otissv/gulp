// gulp/config/js

// gulpfile.js

'use strict';



// =============================================================================
// Configuration
// =============================================================================
var gutil = require('gulp-util');

var isProduction = true;
var sassStyle = 'compressed';
var sourceMap = false;

if(gutil.env.dev === true) {
  sassStyle = 'expanded';
  sourceMap = true;
  isProduction = false;
}

module.exports = {
  isProduction: false,
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
    './frontend/*.js',
    './backend/*.js',
    './tests/**/*.js',
    '!./node_modules/**/*.js'
  ],
  styles:{
    src: './frontend/stylesheets/**/*.scss',
    dest: './public/stylesheets/',
    compressed: sassStyle,
    sourceMap: sourceMap
  },
  divider: '==============================================================',
  stringReplace: function (str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
};
