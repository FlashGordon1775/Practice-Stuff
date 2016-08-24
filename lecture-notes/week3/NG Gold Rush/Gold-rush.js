angular.module("goldRush", [])
    .controller("Rush",
    rushController);

function rushController(){
    var cCtrl = this;
    cCtrl.array1 = [];

    cCtrl.addPoint = function (event) {
        console.log(event)
        var location = {
            x: event.pageX/document.getElementById("mappy").offsetWidth*100+"%",
            y: event.pageY/document.getElementById("mappy").offsetHeight*100+"%",
        } 
        cCtrl.array1.push(location);
    }

    cCtrl.removePoint = function (index) {
        cCtrl.array1.splice(index, 1);
    }
}