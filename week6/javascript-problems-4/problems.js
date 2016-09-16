//      Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and                multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

//      % Warning: Regex is not allowed for this exercise!

// var addNumbers = function(string){
//     var numbers = [];
//     var words = [];
//     var sum = 0;
//     for(var i = 0; i < string.length; i++){
//         parseInt(string[i]);
//         if(charAt[i].isDigit){
//             numbers.push(i);
//         }else{
//             words.push(i);
//         }

//         for(var i in arr){sum += arr[i];}
//     }
//     return sum;
// }

// addNumbers('rob20bob30');         //Doesn't work at all


var addNumbers = function(string) {
	var numbers = [];
	var lastIsNumber = true;
	var sum = 0;
	for (var i = 0; i < string.length; i++) {
		if(lastIsNumber && parseInt(string[i])) {
			newNumber = string[i-1] + string[i];
			numbers.splice(numbers.length-1, 1);
		}
		else { newNumber = string[i]}
		lastIsNumber = false;
		if(parseInt(string[i])){
			numbers.push(newNumber);
			lastIsNumber = true;
		}

	};
	for (var i = 0; i < numbers.length; i++) {
		sum += parseInt(numbers[i]);
	};
	console.log(sum);
	return sum;
}
addNumbers("rob91bob91"); //This breaks with numbers over 99. It treats two digit numbers properly, though. I believe it's ignoring zero'


function longestWord(words){
	var longest = '';
	var wArray = words.split(' ');
	for (var i =0; i< wArray.length; i++){
    	if (wArray[i].length > longest.length){
      	longest = wArray[i];
	}
  }
  return longest
}

console.log(longestWord('What is the longest word in this sentence?'))



