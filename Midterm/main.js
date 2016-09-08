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
    .controller("signup",
     signupController)
    .controller("face", 
     facebookController)
    .factory("SFactory", studentFactory)
    .factory("MFactory", mentorFactory)
    .config(Router);

studentController.$inject = ["SFactory"]
//newStudentController.$inject = ["SFactory"]
mentorController.$inject = ["MFactory"]
//newMentorController.$inject = ["MFactory"]

Router.$inject = ["$routeProvider"];


function facebookController(){
    var fCtrl = this;
    fCtrl.init = function (s, id) {
                if(window.FB) {
                    window.FB._initialized = false;
                    return window.FB.XFBML.parse()
                }
                var js;                
                if (document.getElementById(id)) {document.getElementById(id).remove()};
                var fjs = document.getElementsByTagName(s)[0];

                js = document.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
                fjs.parentNode.insertBefore(js, fjs);
                console.log(js, fjs);
                
                };
}

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
            controller: "signup as signupCtrl"     
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
    /*I need to make the updates to the user profiles permanent. 
    Figure out how to do this in localStorage for now. */
    }
    
};
function signupController(){}

function newStudentController (SFactory){ //Make form for new student info
    var nSCtrl = this;

    nSCtrl.myVar = false;

    console.log(SFactory);
    //nSCtrl.studentList = SFactory.studentList;
    nSCtrl.newStudentObject = {
                        name: '',
                        bio: '',
                        goals: '',
                    }

    nSCtrl.newStudent = function(){
        nSCtrl.myVar = !nSCtrl.myVar;
        console.log('hi');
    }


    nSCtrl.studentArray = JSON.parse(localStorage.getItem('studentArray')) || [];

    nSCtrl.addStudent = function (){
        /*for (var i =0; i < nSCtrl.studentList.length; i++){
        nSCtrl.studentList.push({
             
        });}
        console.log(nSCtrl.studentList);*/
        SFactory.addStudent(nSCtrl.newStudentObject);
        nSCtrl.studentArray.push(nSCtrl.newStudentObject); 
        localStorage.setItem('studentArray', JSON.stringify(nSCtrl.studentArray));
        nSCtrl.newStudentObject = {
                        name: '',
                        bio: '',
                        goals: '',
                    }
        console.log('Hello from ', nSCtrl.newStudentObject);
        console.log('my students ', SFactory.getStudents());
    }
}

function newMentorController (MFactory) { //Make form for new mentor info
    var nMCtrl = this;

    nMCtrl.myVar = false;

    console.log(MFactory);

    nMCtrl.newMentorObject = {
                            name: '',
                            bio: '',
                            qualificaions: '',
                        }

    nMCtrl.newMentor = function(){
        nMCtrl.myVar = !nMCtrl.myVar;
        console.log('hi');
    }

    nMCtrl.mentorArray = JSON.parse(localStorage.getItem('mentorArray')) || [];

    nMCtrl.addMentor = function (){
        // nMCtrl.mentorList.push({
        //     name: "Jim",
        //     bio: "sssssshshsshhshshsh",
        //     qualificaions: "ermergerd",
        MFactory.addMentor(nMCtrl.newMentorObject);
        nMCtrl.mentorArray.push(nMCtrl.newMentorObject); 
        localStorage.setItem('mentorArray', JSON.stringify(nMCtrl.mentorArray));
        nMCtrl.newMentorObject = {
                        name: '',
                        bio: '', 
                        qualifications: '',
                    }

        console.log('Hello from ', nMCtrl.newMentorObject);
        console.log('mentors ', MFactory.getMentors());
        }
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

    var addStudent = function (student){
        console.log('Hey ', student);
        studentList.push(student);
        console.log('Yo ', studentList);
    }

    var getStudents = function(){
        return studentList;

    }

    return {

        addStudent : addStudent,
        getStudents : getStudents,

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

    var addMentor = function (mentor){
        console.log('Heck yes ', mentor);
        mentorList.push(mentor);
        console.log('Yolo ', mentorList);
    }

    var getMentors = function(){
        return mentorList;

    }

    return {

        addMentor : addMentor,
        getMentors : getMentors,

    }

}