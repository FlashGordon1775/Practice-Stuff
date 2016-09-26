// Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, 
// separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will 
// contain at least 2 numbers. It can get tricky if there's just two numbers!

var secondGreatLow = (numsArr) => {
    // var newArr = [];

    var sortArr = numsArr.sort((a, b) => {return a-b})
        .filter((item, pos, arr) => {
            return !pos || item != arr[pos - 1];
    });

    return sortArr[1] + ' ' + sortArr[sortArr.length - 2];

    // for (var i = 0; i < sortArr.length; i++){
    //     return
    // }

}

console.log(secondGreatLow([7, 7, 12, 98, 106]));



// Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to 
// (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

var timeConvert = (num) => {
    var hours = Math.trunc(num/60);
    var mins = num % 60;

    return hours + ':' + mins;
}

console.log(timeConvert(63));