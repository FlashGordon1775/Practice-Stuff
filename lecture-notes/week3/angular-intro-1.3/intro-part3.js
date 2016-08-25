angular.module("Popup",[])
    .controller("pop", 
    popController);

function popController(){
    
    var cCtrl = this;
    cCtrl.myVar = false;
    
    console.log('hello');
    cCtrl.clickme = function(){
        cCtrl.myVar = !cCtrl.myVar;
    };
};
