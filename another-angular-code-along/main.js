angular.module("IOM", [])

    .controller("dankTroller", dankTrollerController)

    .controller("keyboardCatroller", keyCatController)
    
    .factory("dankTank", dankFactory);


dankTrollerController.$inject = ["dankTank", "$timeout"];
keyCatController.$inject = ["dankTank"];


function dankTrollerController (dankTank, $timeout) {

    console.info('Hello from dTC!', dankTank);

    var dCtrl = this;

    dCtrl.memes = dankTank.memeList;

    $timeout(function(){

        dCtrl.memes.push({

            name: 'dat boi',

            about: 'fdsfds',

            funniness: '1.5',

            picture: 'http://i0.kym-cdn.com/photos/images/newsfeed/001/112/714/478.jpg',

        })

    }, 4000);

    //dCtrl.greeting = "Welcome to the Internet of Memes!";

}

function keyCatController (dankTank) {

    console.info('Hello from kCC!', dankTank);

    var kCtrl = this;

    kCtrl.memes = dankTank.memeList;

}

function dankFactory () {

    //This is where we will put our data / ways to retrieve data from some external source

    //The only thing you absolutely need in a factory a RETURN statement. Only get one RETURN statement.

    var memeList = [

        {

            name: 'dsfsd',

            about: 'fdsfds',

            funniness: '1.5',

            picture: 'https://cdn.meme.am/instances/500x/16315674.jpg',

        },

        {

            name: 'ewrtth',

            about: 'sadfs',

            funniness: '8',

            picture: 'https://cdn.meme.am/instances/500x/16315674.jpg',

        },

        {

            name: 'qwerty',

            about: 'dfsfhhh',

            funniness: '2',

            picture: 'https://cdn.meme.am/instances/500x/16315674.jpg',

        },
        
    ];

    return {

        memeList : memeList,

    }

    //99.999999999% of the time, you will be retruning an OBJECT. This is because you can change objects easier.

}