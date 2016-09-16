// Write a function that splits an array into a given number of equal-sized chunks.

// The function should take two arguments: the input array and an integer equal to 
// the number of chunks to split it into. The return value should be an array of arrays (these are the 'chunks').

// For example:

// var input = [1,2,3,4,5,6,7,8,9,10];
// chunk(input, 2); // should return [ [1,2,3,4,5], [6,7,8,9,10] ]
// The tricky part is when the number of chunks doesn't divide evenly into the size of the array. Take the following examples:

// var input = [1,2,3,4,5,6,7,8,9,10];
// chunk(input, 3); // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
// chunk(input, 7); // should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]
// In the above examples, the inner arrays (chunks) are larger at the beginning of the array than at the end, as if you 
// were trying to make all chunks as close to the same size as possible while keeping the bigger chunks at the beginning.


// _.chunk([1,2,3,4,5,6,7,8,9,10], 2); //If we were using lo-dash. This still doesn't split it into a given number of chunks.

// function chunk(arr, sizeC){
//     var chunks = [];
//     var i = 0;
//     var l = arr.length;

//     while (i < l) {
//     chunks.push(arr.slice(i, i += sizeC));
//     }

//   return chunks;
// }

// console.log(chunk([1,2,3,4,5,6,7,8,9,10], 4)); // This is wrong. The second argument needs to be the number of chunks, not size of chunks.

function chunk(arr, numC){
    var chunks = [];
    var i = 0;
    var l = arr.length;


}

