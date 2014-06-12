promised-file
----------------
Super simple file reader, wrapped in a promise.

Rejects on an empty file.


### Goals

Journey into breaking my modules into the smallest pieces possible.

Create a tiny wrapper around `fs` that returns a promise

### Install

```shell
$ npm install promised-file
```

### Examples
```javascript
var instance = require('promised-file');

var notemptyfile = 'notemptyfile.js';
var emptyfile = 'emptyfile.js';

// fulfilled
instance.getFile(notemptyfile)
  .then(function(response) {
    console.log('### response: \n\t%s', response);
  })
  .done();
// ->
// #### response:
//        CONTENTS_OF_FILE

// rejected
instance.getFile(notemptyfile)
  .then(function(response) {
    console.log('### response: \n\t%s', response);
  })
  .done();

// ->
// #### response:
//        ## Error: File empty
```
