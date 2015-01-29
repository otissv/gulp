// gulp/coverage.js

'use strict';

// =============================================================================
// Test server
// =============================================================================

module.exports = function (gulp, config) {
  gulp.task('coverage', function () {
    var coverageServer = http.createServer(function (req, resp) {
      req.pipe(fs.createWriteStream('coverage.json'));
      resp.end();
    });
    coverageServer.listen(config.coverage.port);
    console.log('Coverage Server Started on port', config.ports.test);
  });
};
