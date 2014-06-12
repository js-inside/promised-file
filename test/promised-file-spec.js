/* jshint node:true */
/* globals describe, it, xit, expect */

describe('promised-file lib', function() {
  'use strict';
  var instance = require('../bin/promised-file');
  var notemptyfile = process.cwd() + '/test/notemptyfile.js';
  var emptyfile = process.cwd() + '/test/emptyfile.js';

  it('should return truthy for a file that is not empty.', function(done) {

    instance.getFile(notemptyfile)
      .then(function(file) {//console.log('### file: \n', file);
        expect(file).toBeTruthy();//expect(file).toBeFalsey();
        done();
      });
  });

  it('should reject an empty file', function emptyFileShouldReturnFalsey(done) {
    instance.getFile(emptyfile)
      .then(function prokEmptyFile(response) {
        //console.log('### response in it block: \n', response);
        expect(response.indexOf('Error')).not.toBe(-1);
        done();
      });
  });

  xit('placeholder', function placeholder() {});


});
