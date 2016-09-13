// numbers = function(num){
//     console.log(process.argv) 
// };                               //First attempt of exercise 1

// console.log(process.argv) -Hint

// Write a program that accepts one or more numbers as command-line arguments                                                                                                                      
// and prints the sum of those numbers to the console (stdout). 

// console.log(process.argv);

// var result = 0;

// var sum = function(){
//     var result = 0;
//     for(var i = 2; i < process.argv.length; i++){ //loop through numbers. i must equal two because the first two elements are always 'node' and the path to your file
//     result += Number(process.argv[i]);       //the elements in an array are strings, so we must coerce them into numbers. This is one way to do so. Another is +process.argv[i]
//     } 
//     return result;
// } 

// sum();

// console.log(result);

var result = 0;

for(var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
console.log(result);
