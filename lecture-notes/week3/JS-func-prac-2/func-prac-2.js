//Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
//getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var person = {
    firstName: "Luisa",
    age:        25,
};

function getName() {
       console.log(person.firstName);
       return person.firstName;
}

getName();

//Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
//totalLetters(['javascript', 'is', 'awesome']) should return 19
//totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

var array1 = ['I', 'will', 'become', 'a', 'javascript', 'master'];

function totalLetters () {
    var l = array1.join('');
    console.log(l.length);
    return l.length;
}

totalLetters();

//Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
//keyValue('city', 'Denver') should return Object {city: "Denver"}

var obj = {};

function keyValue (city, Denver) {
    obj.city = 'Denver';
    console.log(obj);
    return obj;
}

keyValue();

//Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
//negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
//negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'



function negativeIndex (negArray,i) {
    var array2 = ['a','b','c','d','e','f'];
    return negArray[array2.length+i];
    
}

console.log(negativeIndex(['a','b','c','d','e','f'], -2));

//Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
//removeM('family') should return 'faily'
//removeM('memory') should return 'eory'

var str = "mastermind";

function removeM () {
    n = str.split('m').join('');
    //var n = str.replace('m','');
    console.log(n);
    return n;
}

removeM();

//Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
//printObject({ a: 10, b: 20, c: 30 }) should print: a is 10 b is 20 c is 30
//printObject({ firstName: 'pork', lastName: 'chops' }) should print: firstName is pork lastName is chops

var obj1 = {
    firstName: 'Robert',
    lastName: 'Gordon',
}

function printObject () {
    var key = Object.keys(obj1);
    console.log(key[0] + ' is ' + obj1.firstName); 
    console.log(key[1] + ' is ' + obj1.lastName);
}

printObject();

//Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
//vowels('alabama') should return ['a', 'a', 'a', 'a']
//vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']

var str = "Colorado";

function vowels (str) {
    
    var string = str.toString();
    for (var i = 0; i < string.length - 1; i++){
        if(string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u'){
        
        }
    }                       //WTF?
}

vowels('Colorado'); ////////////// Get help

