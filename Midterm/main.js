angular.module("buckleDown", ["ngRoute", "ngAnimate"])
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
newStudentController.$inject = ["SFactory"]
mentorController.$inject = ["MFactory"]
newMentorController.$inject = ["MFactory"]

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
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"

        });
}

function studentController (SFactory) {

    var sCtrl = this;

    sCtrl.studentFound = false;

    sCtrl.studentIndex = -1;

    var studentArray = SFactory.getStudentsLocal();

    sCtrl.searchStudent = function (name) {
        sCtrl.studentFound = false;
        for (var i = 0; i < studentArray.length; i++){
            if(studentArray[i].name ==  name){
                sCtrl.nameText = studentArray[i].name;
                sCtrl.bioText = studentArray[i].bio;
                sCtrl.goalsText = studentArray[i].goals;
                sCtrl.studentFound = true;
                sCtrl.studentIndex = i;
            }
        }
       
    }
    
    sCtrl.myVar1 = false;

    console.log('hello');
    
    sCtrl.updateProfile = function(){
        sCtrl.myVar1 = !sCtrl.myVar1;
        console.log('hi');
        console.log(sCtrl.studentIndex);
        if (sCtrl.studentIndex != -1) {
            studentArray[sCtrl.studentIndex].name = sCtrl.nameText;
            studentArray[sCtrl.studentIndex].bio = sCtrl.bioText;
            studentArray[sCtrl.studentIndex].goals = sCtrl.goalsText;
            SFactory.setStudentsLocal(studentArray);
    }
        console.log('hello');

    }

};

function mentorController () {

    var mCtrl = this;

    mCtrl.nameText = "Rob Gordon";

    mCtrl.bioText = "Scenester DIY shoreditch deep v tote bag, street art paleo. Before they sold out blog salvia listicle, beard keytar in art party est readymade kale chips +1 crucifix id try-hard.Sustainable mixtape fingerstache, pitchfork banjo meditation hashtag artisan kitsch. Sustainable 3 wolf moon helvetica food truck art party, tote bag celiac. Dreamcatcher man bun YOLO butcher, literally banjo jean shorts twee next level drinking vinegar squid yuccie PBR&B art party brooklyn."
    
    mCtrl.qualificationsText = "Hammock 8-bit lo-fi ullamco kombucha craft beer. Gentrify tempor wayfarers roof party pop-up. Ugh everyday carry semiotics tattooed nisi actually. Yuccie chia four dollar toast sint photo booth. Street art meggings synth, knausgaard fingerstache tofu lo-fi. Ennui letterpress flexitarian polaroid"

    mCtrl.myVar1 = false;

    console.log('hello');
    
    mCtrl.updateProfile = function(){
        mCtrl.myVar1 = !mCtrl.myVar1;
        console.log('hi');

    console.log('hello'); 
    /*I need to make the updates to the user profiles permanent. 
    Will do this at a later date. I have it completed for students. Just keep this as an example of a user's page.*/
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

    nSCtrl.addStudent = function (){ //I need to eventually time this in with the facebook comment stream. Each new user should have a fb comment section from the start.
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

    nMCtrl.addMentor = function (){ //I need to eventually time this in with the facebook comment stream. Each new user should have a fb comment section from the start.
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

    var studentList = [];


    var addStudent = function (student){
        console.log('Hey ', student);
        studentList.push(student);
        console.log('Yo ', studentList);
    }

    var getStudents = function(){
        return studentList;

    }

    var getStudentsLocal = function(){
        return JSON.parse(localStorage.getItem('studentArray')) || [];
    }

    var setStudentsLocal = function(updatedStudents){
        localStorage.setItem('studentArray', JSON.stringify(updatedStudents));
    }

    return {

        addStudent : addStudent,
        getStudents : getStudents,
        getStudentsLocal : getStudentsLocal,
        setStudentsLocal : setStudentsLocal,
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