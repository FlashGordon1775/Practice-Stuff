var fs = require('fs');  //load module

var b = fs.readFileSync(process.argv[2]);                // read file and returns a buffer object. Buffer objects are Node's way of efficiently representing arbitrary arrays                                                                                                                      of data,                                                              whether it be ascii, binary or some other format.
console.log(b.toString().split('\n').length - 1);        // convert the buffer object to a string, split the string using '\n' (newline) as a delimiter. Use .length -1 to account for the end of the 
                                                         // string, and to avoid an extra element in the array