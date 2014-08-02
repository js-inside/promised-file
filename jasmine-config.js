module.exports = {
    // An array of filename globs, relative to current dir.
    specs: ['bin/*spec.js'],
    // A function to call on completion.
    // function(passed)
    onComplete: function(passed) { console.log('done!'); },
    // If true, display suite and spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Time to wait in milliseconds before a test automatically fails
    defaultTimeoutInterval: 5000
};
