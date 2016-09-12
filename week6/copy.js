//Copy a file

var fs = require('fs');

var originalFile = process.argv[2];
var newFile = process.argv[3];

console.log('Trying to copy ' + originalFile + 'to' + newFile);

fs.readFile(originalFile, function(err, data){
    fs.writeFile(newFile, data, function(err, data){});
})