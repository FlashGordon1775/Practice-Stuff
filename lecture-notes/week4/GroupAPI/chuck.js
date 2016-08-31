angular.module('Chuck', ['ngSanitize'])
    .controller('chuckQuote', quoteController)

quoteController.$inject = ['$http'];

function quoteController ($http) {
    var qCtrl = this;
    qCtrl.jokeData = {value:{joke:''}}
    qCtrl.testAPI = function () { 
        console.log('Test');
        $http.get('http://api.icndb.com/jokes/random')
        .then(function (response){
        console.log("Response from API: ", response.data);
        qCtrl.jokeData = response.data;
        });
    }
}
