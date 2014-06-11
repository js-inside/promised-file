/* jshint node:true */
/* globals describe, it, expect */

describe('File Promise', function() {
  'use strict';
  var instance = require('../bin/file-promise');

  it('should have read the file.', function(done) {
    instance.getFile('/Users/wkseymou/projects/chroma/chroma-manager/chroma_ui_new/static/chroma_ui/*.map')
      .then(function(file) {
        //console.log('### file: \n', file);
        expect(file).toBeTruthy();
        done();
      });
  });
});
