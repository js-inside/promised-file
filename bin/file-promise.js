/* jshint node:true */
'use strict';

var fs = require('fs');
var glob = require('glob');
var Promise = require('promise');

function getFile(filePath) {
  return globForFile(filePath)
    .then(readFile)
    .then(function returnPromise(file) {
      return file;
    });
}

function globForFile(file) {
  return Promise.denodeify(glob)(file);
}

function readFile(file) {
  return Promise.denodeify(fs.readFile)(file.path || file[0], 'utf8');
}

(function run() {
  // If (require.main === module), this module was
  // called directly like via the cli.
  // If (require.main !== module), this module was
  // "require'd" like var gll = require('./getLastLine');
  if (require.main === module)
    getFile('/Users/wkseymou/projects/chroma/chroma-manager/chroma_ui_new/static/chroma_ui/*.map')
    //getFile('./static/chroma_ui/*.js')
      .then(function(response) {
        console.log('### response: \n\t%s', response);
      })
      .done();
})();

module.exports = {
  getFile: getFile
};
