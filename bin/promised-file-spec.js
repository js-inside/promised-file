'use strict';

var instance = require('../bin/promised-file');

describe('promised-file lib', function () {

  var notemptyfile;
  var emptyfile;

  beforeEach(function () {
    notemptyfile = __dirname + '/fixtures/notemptyfile*';
    emptyfile = __dirname + '/fixtures/emptyfile*';
  });

  it('should return truthy for a file that is not empty, supporting globbing.', function (done) {

    instance.getFile(notemptyfile)
      .then(function(file) {
        expect(file).toBeTruthy();
        done();
      });

  });

  it('should reject an empty file, supporting globbing', function emptyFileShouldReject (done) {

    instance.getFile(emptyfile)
      .catch(function prokEmptyFile (response) {
        expect(response).toContain('File empty');
        done();
      });

  });

});
