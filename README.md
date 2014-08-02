promised-file
----------------
Super simple file reader, wrapped in a promise.

Rejects on an empty file.

Supports command line globbing patterns.


### Goals

Journey into breaking my modules into the smallest pieces possible.

Create a tiny wrapper around `fs.readFile()` that returns a promise

### Install

```shell
$ npm install promised-file
```

### Examples

#### Using it on the command line
```shell
# install it:

npm i promised-file

# run it from your node_modules/ directory :

# On an non-empty file.
./node_modules/.bin/promised-file package.* # Notice the glob pattern for package.json.

#On an empty file.
touch empty.txt # Create the empty file.
./node_modules/.bin/promised-file empty*
# Logs to the console:
#
# ### Error:
#  	File empty: empty.txt # Notice the expanded name from the glob pattern.

```

#### Using it as a lib (like in my spec)

```javascript
var instance = require('promised-file');

  // ...

  beforeEach(function () {
    notemptyfile = __dirname + '/fixtures/notemptyfile.js';
    emptyfile = __dirname + '/fixtures/emptyfile.js';
  });

  it('should return truthy for a file that is not empty.', function (done) {

    instance.getFile(notemptyfile)
      .then(function(file) {
        expect(file).toBeTruthy();
        done();
      });

  });

  it('should reject an empty file', function emptyFileShouldReject (done) {

    instance.getFile(emptyfile)
      .catch(function prokEmptyFile (response) {
        expect(response).toEqual('File empty');
        done();
      });

  });

  // ...

// ->
// #### response:
//        ## Error: File empty
```
