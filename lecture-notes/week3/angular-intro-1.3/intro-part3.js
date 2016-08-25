angular.module("Popup",[])
    .controller("pop", 
    popController);

function popController(){
    
    var cCtrl = this;

    cCtrl.click = function(event){
        var open = modals.open("alert");
    }

}

