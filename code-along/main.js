angular.module("Tokyo", [])
    .controller('abyss', 
    abyssController);

function abyssController (){
    var aCtrl = this;

    //console.log("Hi!");
    aCtrl.newMonster = {name: "Mothra",
                        abilities:["Flight", "Gas", "Smother"]};//going to hold HTML input values

    aCtrl.monsters = [];

    aCtrl.addMonster = function (){

        aCtrl.monsters.push(aCtrl.newMonster);

        aCtrl.newMonster = {};
    }

    //window.aCtrl = aCtrl;//just for debugging. NOT FOR PRODUCTION CODE! remove before publish


}

