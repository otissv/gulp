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

var paths = {
  backendDir: 'backend',
  frontendDir: 'fronted',
  staticDir : 'public',
  testDir: 'test'
};

module.exports = {
  isProduction: false,
  host: 'localhost',
  serverDir: './'  + paths.backendDir,
  staticFiles: paths.staticDir + '/**/*.*',
  testsFiles: './' + paths.testDir +'/**/*.js',
  ports: {
    server: 3000,
    test: 7358
  },
  scripts: {
    baseScript: './' + paths.frontendDir + '/js/main.js',
    outputFile: './bundle.js',
    dest: './' + paths.staticDir + '/js/',
    src: [
      './gulpfile.js',
      './' + paths.frontendDir + '/**/*.js',
      './' + paths.backendDir + '/**/*.js',
      './' + paths.testDir + '/**/*.js',
      '!./node_modules/**/*.js'
    ]
  },
  styles:{
    src: './frontend/styles/**/*.scss',
    dest: './public/styles/',
    compressed: sassStyle,
    sourceMap: sourceMap
  },
  divider: '==============================================================',
};
