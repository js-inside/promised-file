/* jshint node:true */
/* globals describe, it, expect */

describe('promised-file lib', function() {
  'use strict';
  var instance = require('../bin/promised-file');
  var notemptyfile = process.cwd() + '/test/notemptyfile.js';
  var emptyfile = process.cwd() + '/test/emptyfile';

  it('should return truthy for a file that is not empty.', function(done) {

    instance.getFile(notemptyfile)
      .then(function(file) {//console.log('### file: \n', file);
        expect(file).toBeTruthy();//expect(file).toBeFalsey();
        done();
      });
  });

  it('should return falsey for an empty file', function emptyFileShouldReturnFalsey(done) {
    instance.getFile(emptyfile)
      .then(function prokEmptyFile(file) {
        //console.log('### file: \n', file);
        //expect(file).toBeTruthy();
        expect(!!file).toBeFalsey();
        done();
      });
  });


});
