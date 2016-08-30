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

var vowelList = [];

function vowels (str) {

    
    for (var i = 0; i < str.length; i++){
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
         vowelList.push(str.charAt(i));
        }
    } return vowelList;
}

vowels('Colorado');
console.log(vowelList);
//Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
//twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
//twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
//twins(['a', 'a', 'b', 'z']) should return false
//twins(['a', 'a', undefined]) should return false

var array3 = ['a', 'a', 'b', 'b', 'c', 'c', '7', 'z'];

function twins (array3) {
    
    for (var i = 0; i < array3.length; i+=2){
        if (array3[i] !== array3[i+1]){
            return false;
        }
    }return true;
}

twins(array3);
console.log(twins(array3));
//Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
//or([false, false, true, false]) should return true
//or([false, false, false]) should return false
//or([]) should return false

var array4 = [true, false, true];

function or (array4) {
    for (var i = 0; i < array4.length; i++){
        if(array4[i] == true){
            return true;
        }
    }return false;
} 

or(array4);
console.log(or(array4));
//Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
//unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
//unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var array5 = ['avery', 'a', 'b', 'b', 'c', 'd', 'avery'];

function unique (array5) {
    return array5.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos-1];
        })
    } 


unique(array5)
console.log(unique(array5));
