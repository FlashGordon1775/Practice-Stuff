angular.module("countriesApp", [])
    .controller("countries",
     countryController)

countryController.$inject = ['$http'];

function countryController($http){
    var cCtrl = this;

    console.log("Hello from countryController!");

    cCtrl.getCountries = function(){

        console.log("Getting list of countries...");

        $http.get('/countries') 
            .then(function(response){                                 
                cCtrl.countries = response.data;                      
                console.log("Response from API: ", response.data);                                              
        },function (err) {                                           
            console.log("Error countryController")  
        });
    }

    console.log('Okay so far...')

    cCtrl.findCountry = function(){ 

        console.log("Retrieving country...");

        $http.get('/search?search=' + cCtrl.searchCountry)
            .then(function(response){
                cCtrl.searchCountry.filter = response.data;              
                console.log("Search result: ", response.data);           
        },function (err) {
            console.log("Search Error")
        })
    } 
};
