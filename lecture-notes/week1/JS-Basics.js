// /*

//     - Comment
//     - Variables
//     - Primitive Types
//     - Operators

//     Conditional Statements
//     Truthey && Falsey Values


//     By the way, this block of code is a MULTI-LINE COMMENT
// */

// // this is a single line comment

// // write comments all the time, everyday all day, urday, on
// // every line if you have too

// // VARIABLES


// // to declare a variable, use the var keyword
// var lollipop; // undefined

// // to assign a value to a varible, we will use the = sign.
// var lollipop = 2; // assigning the varible lollipop the number vaue of 2;


// // quick: console stuff!
// // console.log('lollipop:', lollipop);

// // console.log is how you can DUMP values into the brower's JavaScript console.
// // on any tab in the DevTools, you can toggle the JS console using the `esc`

// // valid variable names
// var foo = 10;
// var result;
// var Result; // variables are CASE-SENSITE
// var _result;
// var $result;
// var $$makeDatMOney;

// // invalid varible names
// // var 2fast2furious;
// // var me&you;
// // var you-me;
// // var 0984;

// // PRIMITIVE TYPES
// Number      // integers, decimals
// NaN         // Not a Number
// Infinity    // means infinity

// String      // series of letter, numbers, symbols (characters),
//             // we denote strings with apostrophes or quotes

// Boolean     // true or false

// null        // representing the value of NOTHING

// undefined   // has NO value (empty)

// // NUMBERS
// // Numbers can be integers, or floats (decimals)

// // 12
// // 3.14159265359 // pi
// // 1e6 // scientific notation

// // var oneMillion = 1000000;
// // var oneMillion = 1e6;

// // when you declare variables openly, like we have been here, they are getting
// // attached to the `window` object

// // (PEMDAS) order of operations

// var number1 = 144;
// var number2 = 12;

// // console.log('plus:', number1+number2); // plus
// // console.log('multiply:', number1*number2); // multiply
// // console.log('divide', number1/number2) // divide
// // console.log('divide by zero?', number1/0) // divide
// // console.log('divide by a string', number1/'1') // becareful which variables you do math, because JS is crazy
// // console.log('subtract', number2-number1);
// // console.log('negative number1', -number1);

// // console.log('modulus', number2%number1); // remainder

// // Strings
// var myFirstThatIsVeryLong = 'as;dlifa;lsldjfj;laksdhjfjkla;lsdhjf;kjalsdhjf;kasjdhfklas;jdhfklasdjhfklasjdhflkajsdhfklajshdfklajhsdlkfjashldfkasjh'
// var mySecondStringThatIsVeryLong = "as;dlifa;lsldjfj;laksdhjfjkla;lsdhjf;kjalsdhjf;kasjdhfklas;jdhfklasdjhfklasjdhflkajsdhfklajshdfklajhsdlkfjashldfkasjh"

// // strings can be created with either double '' or double ""

// var myContraction = 'Don\'t' // you must escape ' when you are using a apostrophe type string
// var myBetterContraction = "Don't, \"she said\" "
// var myUltimateContraction = `Don't, "She said"`; // template literal


// // console.log(myContraction);

// var endOfSentence = "do that";

// // console.log( myContraction +' '+ endOfSentence ); // concatination
// // console.log('Template Literal:',`${myContraction} ${endOfSentence}`); // this is nice, but don't overwhelmed

// // endOfSentence[0] // the first letter of the string, counting starts with zero!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // BOOLEANS

// var thisIsTrue = true;
// var thisIsFalse = false;

// // console.log(thisIsTrue, thisIsFalse); // true false

// // !    not
// // !=   not equal to
// // ==   is FUZZY equal to
// // ===  is LITERALLY to
// // &&   AND
// // ||   OR
// // <    less than
// // <=   less than or equal to
// // >    greater than
// // >=   greater than or equal to


// // CONDINTIONAL STATEMENTS

// // if( foo == 1 ) { // inside the if is what we an expression : speaking code
// //     console.log('True, foo is 1!')
// // } else {
// //     console.log(':(');
// // }

// var cups = 4;

// // if( cups == 3 ) { // fuzzy equals
// //     console.log('Time to cut back...')
// // } else if (cups < 3 ) { // this is called an IF-ELSE CHAIN
// //     console.log("Let's shoot more espresso!!!!");
// // } else { // terminates your IF-ELSE CHAIN
// //     console.log("Yeah... I can't read clearly and people can't understand what I am saying! :(");
// // }

// // TRUTHEY && FALSEY
// // expressions

// // FALSEY
// // 0
// // false
// // null
// // undefined
// // NaN
// // ''


// var myNumber = 1 || 2; // when an expression contains only ORs, it takes the first truthey value;
// var myNumber = 1 && 2; // when an expression contains only ANDs, it take the last truthey value;

// var myBoolean = 1 > 2; // greater than (or equal to), less than (or equal to), gives you boolean results;

// var myValue = ('' || 1) && 7;

// var myValue = !1;

// false || false || false || false || true

if( false && 7 || true > 7 ) {
    console.log('Truthey');
} else {
    console.log('Falsey');
}
