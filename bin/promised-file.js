#!/usr/bin/env node
'use strict';

var fs = require('fs');
var Promise = require('promise');
var globThen = Promise.denodeify(require('glob'));
var f = require('funky');

module.exports = {
  getFile: getFile
};

if (require.main === module) {

  var fileArg = process.argv[2];

  var getFileRunner = runIf(getFile.bind(null, fileArg), function handleErr (err) {
    throw new Error('process.argv[2] is falsy: ', err);
  });

  getFileRunner(f.truthy(fileArg))
    .then(function (response) {
      console.log('### File [%s]: \n\t%s', fileArg, response);
    })
    .catch(function handleError(err) {
      console.log('### Error: \n\t%s', err);
    })
    .done();

}

/**
 * Gets the file specified on process.argv[2].
 * The returned promise rejects on an empty file.
 * @param {String} filePath Path to the file.
 * @returns {Promise}
 */
function getFile(filePath) {
  return globThen(filePath)
    .then(readFile)
    .then(function returnPromise(file) {
      return file;
    });
}

/**
 * Gets the contents of a file using a promise that wraps fs.readFile().
 * @param {Object|Array} file
 * @returns {Promise}
 */
function readFile(file) {

  return new Promise(function (resolve, reject) {
    fs.readFile(file.path || file[0], 'utf8', function (err, res) {
      if (err) reject(err);
      if (res === "") reject("File empty: " + file);
      else resolve(res);
    });
  });

}

/**
 * Higher order function (HOF) that takes a function, and runs the function if
 * the predicate is true.
 * @param {Function} f
 * @param {Function} errHandler Handles errors.  Works for now, but this is not optimal.
 * Would be better to only have one function coming in.
 * @returns {Function}
 */
function runIf(f, errHandler) {
  return function runFuncIf(predicate) {
    if (predicate)
      return f();
    else
      errHandler();
  }
}
