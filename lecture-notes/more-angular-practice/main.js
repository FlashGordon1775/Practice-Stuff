angular.module("whateverYouWant", []);

angular.module("whateverYouWant")
    .controller("whateverYouLike", 
    whateverYouLikeController);

function whateverYouLikeController () {
    console.log("Kittens are awake.");

    var cCtrl = this;

    cCtrl.someKittens = [{
        name: '', 
        attitude: 0,
        cuteness: 0,
        whiskerCount: 0,
        furColor: '',
        favoriteFoods: ''}]
}    


