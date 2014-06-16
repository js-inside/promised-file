(function () {
  /* jshint node:true */

  'use strict';

  var fs = require('fs');
  var glob = require('glob');
  var Promise = require('promise');
  var sprintf = require('sprintf');

  var globForFile;
  var readFile;
  var getFile;

  getFile = function getFile (filePath) {
    return globForFile(filePath)
      .then(readFile)
      .then(function returnPromise (file) {
        return file;
      })
      .catch(function catchErr (err) {
      var errMsg = sprintf('### Error: %s', err);
      //console.error(errMsg);

      return errMsg;
    });
  };

  globForFile = function globForFile (file) {
    return Promise.denodeify(glob)(file);
  };

  readFile = function readFile (file) {
    var promise = new Promise(function (resolve, reject) {
      fs.readFile(file.path || file[0], 'utf8', function (err, res) {
        if (err) reject(err);
        if (!!!res) reject("File empty");
        else resolve(res);
      });
    });

    return promise;
  };

  (function run () {
    // If (require.main === module), this module was
    // called directly like via the cli.
    // If (require.main !== module), this module was
    // "require'd" like var gll = require('./getLastLine');
    if (require.main === module)
      getFile(!!process.argv[2] ? process.argv[2] : '/Users/wkseymou/projects/chroma/chroma-manager/chroma_ui_new/static/chroma_ui/*.map')
        .then(function (response) {
          console.log('### response: \n\t%s', response);
        })
        .done();
  })();

  module.exports = {
    getFile: getFile
  };
})();

