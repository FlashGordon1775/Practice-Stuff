//console.log(angular);

//MODULES = containers for the app

// -In Angular, you MUST create at least ONE module

angular.module("SnackAttack", []); //CREATE

/*The array is called an INJECTOR. They specify other modules you want access to within the module. "Dependency Injection" = the way 
we access components that we wouldn't normally have access to.*/

//No need for more than one module most of the time.

//angular.module("SnackAttack") //RETRIEVE or REFERENCE (GETTER)



//CONTROLLER 
// - Live inside of modules, they are REGISTERED to a module
// - Deal with data / view
// - All controllers will have an object used to EXPOSE DATA TO THE VIEW
// -ONLY things on this object will be accessible in HTML

/*angular.module("SnackAttack")
    .controller("cookieGram", cookieGramController)

cookieGramController.$inject = ["$scope"];*/

//under the hood
//cookieGramController(angular.stuff.$scope)

/*function cookieGramController ($scope) {
    //$scope is the object that exposes data to the view
    //If we want access to data in our HTML, it MUST be attached to $scope

    $scope.greeting = "Welcome to the Snack Shack";

    $scope.snacks = "Deep Fried Oreos, Ice Cream, Crispy Squirrel Bits";
}*/

//DIRECTIVES are custom HTML attributes defined by angular

angular.module("SnackAttack")
    .controller("cookieGram", 
    cookieGramController);

cookieGramController.$inject = [];

function cookieGramController () {
    var cCtrl = this;
    //'this' is now the object that exposes data to the view
    //if something isn't attached to the 'this' objects, it's not accessible

    this.greeting = "Welcome to the Snack Shack";
    this.snacks = "Snickers, Butterfingers, Crispy Squirrel Bits";
}