angular.module("AngularIntro2", []);

    angular.module("AngularIntro2")
        .controller("pinkMickey", 
        pinkMickeyController);

        function pinkMickeyController () {
            var cCtrl = this;

            cCtrl.doMouseOver = function(event){
                event.target.style.color = "pink";   
            }

            cCtrl.doMouseOut = function(event){
                event.target.style.color = "black";
            }
        }

    angular.module("AngularIntro2")
        .controller("Yell", 
        yellController);

        function yellController () {
            var dCtrl = this;

            dCtrl.exclamation = function(event){
                event.target.innerHTML += "!"
            }
        }

    angular.module("AngularIntro2")
        .controller("linkTo",
        linkToController);

        function linkToController () {
            var eCtrl = this;
            eCtrl.answer1 = true;
            eCtrl.answer2 = true;
            eCtrl.answer3 = true;
            eCtrl.answer4 = true;
            eCtrl.answer5 = true;

            eCtrl.clickLink = function(event, flag){
                eCtrl[flag] = confirm("Navigate away from this page?");
                    if(!eCtrl[flag]){
                        event.preventDefault();
                    }
                }
            }
            
