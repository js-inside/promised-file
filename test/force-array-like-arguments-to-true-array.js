/* jshint node:true*/

(function() {
  'use strict';

  var _ = require('lodash');

  console.log('### typeof arguments: ', typeof arguments);
  console.log('### arguments is array: ', _.isArray(arguments));

  var args = Array.prototype.slice.call(arguments);
  console.log('### typeof args: ', typeof args);
  console.log('### args is array: ', _.isArray(args));

})();
