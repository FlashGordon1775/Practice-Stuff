angular.module("buckleDown", ["ngRoute"])
    .controller("students",
     studentController)
     /*.controller("mentors", 
    mentorController)*/
    .config(Router);

Router.$inject = ["$routeProvider"];

function Router ($routeProvider){

    // take the user back to the home page if they try to go to a page that doesn't exist
    $routeProvider
        .otherwise({
            redirectTo: "/#home"
        });


    // define our routes
   $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html",
        })
        .when("/students", {
            templateUrl: "templates/students.html",
            controller: "students as sCtrl"
        })
        .when("/mentors", {
            templateUrl: "templates/mentors.html",
            controller: "mentors as mCtrl"
        });
}
///////////////////////////////////////////////////////////////////////////////////////////////

function studentController () {

    var sCtrl = this;

    sCtrl.nameText = "Rob Gordon";

    sCtrl.bioText = "Scenester DIY shoreditch deep v tote bag, street art paleo. Before they sold out blog salvia listicle, beard keytar in art party est readymade kale chips +1 crucifix id try-hard.Sustainable mixtape fingerstache, pitchfork banjo meditation hashtag artisan kitsch. Sustainable 3 wolf moon helvetica food truck art party, tote bag celiac. Dreamcatcher man bun YOLO butcher, literally banjo jean shorts twee next level drinking vinegar squid yuccie PBR&B art party brooklyn."

    sCtrl.goalsText = "Hammock 8-bit lo-fi ullamco kombucha craft beer. Gentrify tempor wayfarers roof party pop-up. Ugh everyday carry semiotics tattooed nisi actually. Yuccie chia four dollar toast sint photo booth. Street art meggings synth, knausgaard fingerstache tofu lo-fi. Ennui letterpress flexitarian polaroid";
    
    sCtrl.myVar1 = false;

    console.log('hello');
    
    sCtrl.updateProfile = function(){
        sCtrl.myVar1 = !sCtrl.myVar1;
        console.log('hi');

    console.log('hello');

    }
    
};