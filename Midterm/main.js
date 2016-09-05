angular.module("buckleDown", ["ngRoute"])
    .controller("students",
     studentController)
     /*.controller("quotes", 
     quoteController)*/
     .controller("mentors", 
     mentorController)
    .controller("newStudent",
     newStudentController)
    .controller("newMentor",
     newMentorController)
    .factory("SFactory", studentFactory)
    .factory("MFactory", mentorFactory)
    .config(Router);

studentController.$inject = ["SFactory", "$timeout"]
mentorController.$inject = ["MFactory", "$timeout"]

Router.$inject = ["$routeProvider"];

(function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

Router.$inject = ["$routeProvider"];

function Router ($routeProvider){

    // take the user back to the home page if they try to go to a page that doesn't exist
    $routeProvider
        .otherwise({
            redirectTo: "/home"
        });


    // define our routes
   $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html",
        })
        .when("/about", {
            templateUrl: "templates/about.html"})

        .when("/students", {
            templateUrl: "templates/students.html",
            controller: "students as sCtrl"
        })
        .when("/mentors", {
            templateUrl: "templates/mentors.html",
            controller: "mentors as mCtrl"
        })
        .when("/signup", {
            templateUrl: "templates/signup.html", 
            //controller: "newStudent as nSCtrl"     //?How do I get multiple controllers here??????????
        });
}

/*function quoteController ($http) {
    var qCtrl = this;
    qCtrl.quoteData = {value:{joke:''}}
    window.onload = function () {
        console.log('Test');
        $http.get('http://api.icndb.com/jokes/random')
        .then(function (response){
        console.log("Response from API: ", response.data);
        qCtrl.quoteData = response.data;
        });
    }
}*/

///////////////////////////////////////////////////////////////////////////////////////////////

function studentController () {

    var sCtrl = this;

    sCtrl.nameText = "Your mom";

    sCtrl.bioText = "Scenester DIY shoreditch deep v tote bag, street art paleo. Before they sold out blog salvia listicle, beard keytar in art party est readymade kale chips +1 crucifix id try-hard.Sustainable mixtape fingerstache, pitchfork banjo meditation hashtag artisan kitsch. Sustainable 3 wolf moon helvetica food truck art party, tote bag celiac. Dreamcatcher man bun YOLO butcher, literally banjo jean shorts twee next level drinking vinegar squid yuccie PBR&B art party brooklyn."

    sCtrl.goalsText = "Hammock 8-bit lo-fi ullamco kombucha craft beer. Gentrify tempor wayfarers roof party pop-up. Ugh everyday carry semiotics tattooed nisi actually. Yuccie chia four dollar toast sint photo booth. Street art meggings synth, knausgaard fingerstache tofu lo-fi. Ennui letterpress flexitarian polaroid";
    
    sCtrl.myVar1 = false;

    console.log('hello');
    
    sCtrl.updateProfile = function(){
        sCtrl.myVar1 = !sCtrl.myVar1;
        console.log('hi');

    console.log('hello');

    }
    
    /*sCtrl.student = SFactory.studentList; //This and the following function should be put in a new controller for creating new students.

    $timeout(function(){
        sCtrl.student.push({
            name: "Craig",
            bio: "yakity yakity kitty",
            goals: "blu blu blah",
        });
    }, 5000);*/

};

function newStudentController (SFactory, $timeout){ //Make form for new student info
    var nSCtrl = this;

    nSCtrl.NSvar = false;

    nSCtrl.student = SFactory.studentList;

    $timeout(function(){
        nSCtrl.student.push({
            name: "Craig",
            bio: "yakity yakity kitty",
            goals: "blu blu blah",
        });
    }, 5000);
};

function mentorController () {

    var mCtrl = this;

    mCtrl.nameText = "Rob Gordon";

    mCtrl.bioText = ""
    
    mCtrl.qualificationsText = ""

    mCtrl.myVar1 = false;

    console.log('hello');
    
    mCtrl.updateProfile = function(){
        mCtrl.myVar1 = !mCtrl.myVar1;
        console.log('hi');

    console.log('hello');

   /* mCtrl.mentor = MFactory.mentorList //This and the following function should be put in a new controller for creating new mentors.

    $timeout(function(){
        mCtrl.mentor.push({
            name: "Jim",
            bio: "sssssshshsshhshshsh",
            qualificaions: "ermergerd",
        });
    }, 5000);*/

    }
    
};

function newMentorController (MFactory, $timeout) { //Make form for new mentor info

    nMCtrl.mentor = MFactory.mentorList

    $timeout(function (){
        nMCtrl.mentor.push({
            name: "Jim",
            bio: "sssssshshsshhshshsh",
            qualificaions: "ermergerd",
        });
    }, 5000);
}

function studentFactory () {


    var studentList = [

        {
            name:   "Bob",
            bio:    "yak yak yak",
            goals:  "blah blah blah",
        },
        {
            name:  "Jenn",
            bio:   "gah gah gah",
            goals: "ipsum stuff",
        }

        
        
    ];

    return {

        studentList : studentList,

    }

}

function mentorFactory () {

    var mentorList = [

        {
            name: "Rob",
            bio: "yada yak blah",
            qualificaions: "more ipsum stuff",
        }


    ];

    return {

        mentorList : mentorList,

    }

}