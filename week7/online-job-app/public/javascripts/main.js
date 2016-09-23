angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', function($scope){
    var aCtrl = this;

    aCtrl.result = '';

    console.log("Hello from applicantController!");

    aCtrl.addApplicant = function(){

        // console.log("Adding applicant...");
		// 	$http.post('/applicant', )
		// 		.then
		//--------------------------
        // $http.get('/applicants') 
        //     .then(function(response){                                 
        //                //add applicant to app                                      
        // },function (err) {                                           
        //     console.log("Error addApplicant")  
        // });
    }

    
}]);
