angular.module('buckleDown')
    .factory('SFactory', studentFactory)
    .factory('MFactory', mentorFactory);

studentFactory.$inject = ['$http'];
mentorFactory.$inject = ['$http'];


function studentFactory ($http) {

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

function mentorFactory ($http) {

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