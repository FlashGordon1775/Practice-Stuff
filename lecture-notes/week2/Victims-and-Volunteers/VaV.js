//My arrays are not working yet


victims();

function victims(){
    var numberVictims = prompt("How many victims are you reporting?");
    var numberVictimsNumber = parseInt(numberVictims);
    if(numberVictimsNumber > 0){
        //var i = numberVictimsNumber
        for(var i = 0; i < numberVictimsNumber; i++){
            //ask for things
            name();
            phone();
            street();
        }
        
    }else{
        alert("Enter valid number.");
        victims();
    }
}


function name(){
    var victimName = prompt("Victim's name:");
    var namesArray = [];
    namesArray.push(victimName);
    console.log(victimName);
}

var namesArray = [];

function phone(){
    var phoneNumber = prompt("Victim's phone number:");
    var phoneArray = [];
    if (phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)){
        alert ("Valid Number");
        phoneArray.push(phoneNumber);
        console.log(phoneNumber);
    }else{
        alert ("Invalid Number");
        phone();
    }
    
}

var phoneArray = [];

function street(){
    var streetName= prompt("Victim's location:");
    var streetArray = [];
    streetArray.push(streetName);
    console.log(streetName);
}

var streetArray = [];

