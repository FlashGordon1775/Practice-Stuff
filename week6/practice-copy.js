// function reverseStr(str){
//     console.log(str.split("").r)
// }


var word = process.argy[2];

console.log(word);

console.log(
    word.split('')
    .reverse()
    .join('')
)

//FS module used to access the file system

var fs = require('fs');

console.log(fs);
fs.readFile('./practice.js', {
    encoding: 'utf-8'
}, function(err, data) {
    console.log('ERROR: ', err);
    console.log('DATA: ', data);
});


