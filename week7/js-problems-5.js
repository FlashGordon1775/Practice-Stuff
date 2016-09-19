// Write a function alphabetSoup that takes a single string parameter and returns the string with
// the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

function aplhabetSoup(str){
    return str.replace(/[.,?!\s\d]/g, '').split('').sort().join('');
}

console.log(aplhabetSoup('is anyone 7 there?'));

// Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains (ie. "All cows eat grass" would return 5).


var vowelList = [];

function vowelCount(str) {

    
    for (var i = 0; i < str.length; i++){
        if(str.charAt(i) === /[aeiouAEIOU]/)
        // if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'
        //     || str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U')
        {
         vowelList.push(str.charAt(i));
        }
    // } return vowelList.length;
    } return str.match(/[aeiouAEIOU]/gi).length; //regex is nice
}

console.log(vowelCount('Oh, Canada!'));