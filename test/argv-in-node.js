!!process.argv[2] ? console.log('truthy') : console.log('falsey');

process.argv.forEach(function(arg, index) {
  console.log('### arg[%d]: %s', index, arg);
});
