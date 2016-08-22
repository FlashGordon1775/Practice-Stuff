angular.module("PracApp",[]);

angular.module("PracApp")
    .controller("pushButton", 
    pushButtonController);

function pushButtonController () {
    var cCtrl = this;

    this.btnText = "Push Me!";

    this.onPush = function button(){
    console.log("This is a message!");

    this.h1Text = "Tacos pour-over butcher vegan, meditation deep v mustache fixie aesthetic bicycle rights cray.";
    }
}

angular.module("PracApp")
    .controller("Button2", 
    Button2Controller);

function Button2Controller () {
    var dCtrl = this;

    this.b2Text = "Push Me, Too!";
    
    this.newPush = function button2(){
        this.list = ['Beards', 'Small Batch', 'Tacos'];
        }
}


