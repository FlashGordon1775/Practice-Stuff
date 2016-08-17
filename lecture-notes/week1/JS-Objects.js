// PURPOSE
/*

    Work with objects, arrays and loops!
    Learn about incrementers and decrementers.

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
// ARRAYS
////////////////////////////////////////////////////////////////////////////////////////////////////////

var array = [];

var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; // count from zero! days[0] === 'Monday'

//  days[days.length] = 'Funday'; // no

// speaking in code: method (push)
days.push('Funday'); // add to the end using push
days.unshift('Caturday'); // add things from the beginning using unshift

var firstDayRemovedFromTheArray = days.shift(); // remove from beginning
// var firstDayRemovedFromTheArray // camel-case variable
// var first_day_of_the_array; // snake-case

// days.length // 8

var lastDayRemovedFromTheArray = days.pop(); // remove from the end

var nums = [1,2,3,4,5,6,7,8,9];

// var arrayOfMixedThings = [1,'Thing',{},function(){},()=>{}]; // no


////////////////////////////////////////////////////////////////////////////////////////////////////////
// INCREMENTERS
////////////////////////////////////////////////////////////////////////////////////////////////////////

var i = 0;

i++ // post-fixed incrementer (i = i + 1)
++i // pre-fixed incrementer (i = i + 1)

i-- // post-fixed decrementer (i = i + 1)
--i // pre-fixed decrementer (i = i + 1)

i+= 5; // increment using a value greater than one
i-= 5; // dencrement using a value greater than one

// i *=

////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOOPS
////////////////////////////////////////////////////////////////////////////////////////////////////////

// CANONICAL (standard, default) FOR-LOOP

// for(var i=0; i < days.length; i++) {
//     // this body of code gets executed 7 times;
//     // console.log(days[i], i) // speaking in code: we access arrays using square bracket notation
//     console.log(days[i].toLowerCase(), i);
// }

// console.log(days[0].toLowerCase());
// console.log(days[1].toLowerCase());
// console.log(days[2].toLowerCase());
// console.log(days[3].toLowerCase());

// CANONICAL (standard, default) WHILE-LOOP

// while( true ) {
//     console.log('Uh oh...');
// } // no

// var i = days.length;

// while( i-- ) {
//     console.log(days[i]);
// } // while loops are cool... but dangerous.

////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJECTS
////////////////////////////////////////////////////////////////////////////////////////////////////////

var emptyObj = {}; // this is an empty object

var movie = {
    scripts: 'No one said anything...', // key||property : value
    title: 'Fake Sharknado',
    actors: ['Liam Niesen','Arnold Fartzinator','Bruce Willis'],
    year: 1887,
    director: 'Pikachu'
}

// movie['scripts']; // speaking in code: square bracket access for objects
// movie.scripts // speaking in code: dot access notation

// movie.actors[0].length.poo.thing[6786987459] // no

// FOR-IN LOOPs are used for OBJECTS

// for( var attr in movie ) {
//     console.log( attr, ':', movie[attr] );
// }

// for( var index in days ) {
//     console.log(days[index], index);
// }

// COLLECTIONS
var donutsCollection  = [{ // SCHEMA: all objects in an array have the same properties, but not necessarily the same values
    toppings: ['sprinkles'],
    size: 'small',
    price: 1,
    holed: true,
    filling: 'jelly',
    name: 'Sam'
}, {
    toppings: ['cinnamon','chocolate'],
    size: 'gargantuan',
    price: 5e100,
    holed: true,
    filling: 'catus berry',
    name: 'Godzilla Rex'
}, {
    toppings: ['glazed','bacon'],
    size: 'medium',
    price: 10,
    holed: false,
    filling: 'chocolate cherry myst',
    name: 'Train Wreck'
}];

// donutsCollection[3].name // no
