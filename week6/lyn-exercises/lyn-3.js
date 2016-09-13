//  Write a program that uses a single asynchronous filesystem operation to                                                                                                                         
//   read a file and print the number of newlines it contains to the console                                                                                                                         
//   (stdout), similar to running cat file | wc -l.                                                                                                                                                  
                                                                                                                                                                                                  
//   The full path to the file to read will be provided as the first                                                                                                                                 
//   command-line argument.                                                                                                                                                                          
                            

// function addOne(thenRunThisFunction) {
//   waitAMinuteAsync(function waitedAMinute() {
//     thenRunThisFunction()
//   })
// }

// addOne(function thisGetsRunAfterAddOneFinishes() {})

var fs = require('fs'); // load module

fs.readFile(process.argv[2], function(err, data){               //Instead of fs.readFileSync() use fs.readFile() and instead of using the return value of this method,                                                                                                                                                                                                       collect the value from a callback function that you pass in as the second argument.


    console.log(data.toString().split('\n').length - 1);       //again: convert data to string, split, and return the number of newlines '\n'. Don't forget .length -1 to avoid an extra element in the array

});

