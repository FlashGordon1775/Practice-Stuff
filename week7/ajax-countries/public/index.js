angular.module("countriesApp", [])
    .controller("countries",
     countryController)

countryController.$inject = ['$http'];

function countryController($http){
    var cCtrl = this;

    console.log("Hello from countryController!");

    cCtrl.getCountries = function(){

        console.log("Getting list of countries...");

        $http.get('/api/countries')
            .then(function(response){
                console.log("Response from API: ", response.data);
                cCtrl.countries = response.data;
        },function (err) {
            console.log("Error countryController")
        });
    }
};
