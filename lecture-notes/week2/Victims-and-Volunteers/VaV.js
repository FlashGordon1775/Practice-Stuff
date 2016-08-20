//My arrays are not working yet




var victimArray = [];
var phoneArray = [];
var streetArray = [];

var volArray = [];
var volPhoneArray = [];
var volStreetArray = [];

var numberVictimsNumber;
var numberVolunteersNumber;

victims();

function victims(numberVictims){
    var numberVictims = prompt("How many victims are you reporting?");
    numberVictimsNumber = parseInt(numberVictims);
    if(numberVictimsNumber >= 0){
        var i = numberVictimsNumber
        for(var i = 0; i < numberVictimsNumber; i++){
            //ask for things
            addName();
            addPhone();
            addStreet();
            
        }
        
    }else{
        alert("Enter valid number.");
        victims();
    }
}

function addName(victimName){
    var victimName = prompt("Victim's name:");
    victimArray.push(victimName);
    console.log(victimName, victimArray);
}

    

function addPhone(phoneNumber){
    var phoneNumber = prompt("Victim's phone number:");
    if (phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)){
        alert ("Valid Number");
        phoneArray.push(phoneNumber);
        console.log(phoneNumber, phoneArray);
    }else{
        alert ("Invalid Number");
        addPhone();
    }
    
}



function addStreet(streetName){
    var streetName= prompt("Victim's location:");
    streetArray.push(streetName)
    console.log(streetName, streetArray);
}

volunteers();
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



function volunteers(){
    var numberVolunteers = prompt("How many volunteers are you reporting?");
    numberVolunteersNumber = parseInt(numberVolunteers);
    if(numberVolunteersNumber > 0){
        var i = numberVolunteersNumber
        for(var i = 0; i < numberVolunteersNumber; i++){
            //ask for things
            addVolName();
            addVolPhone();
            addVolStreet();
        }
        
    }else{
        alert("Enter valid number.");
        volunteers();
    }
}

function addVolName(volName){
    var volName = prompt("Volunteer's name:");
    volArray.push(volName);
    console.log(volName, volArray);
}

    

function addVolPhone(volPhonehoneNumber){
    var volPhoneNumber = prompt("Volunteer's phone number:");
    if (volPhoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)){
        alert ("Valid Number");
        volPhoneArray.push(volPhoneNumber);
        console.log(volPhoneNumber, volPhoneArray);
    }else{
        alert ("Invalid Number");
        andVolPhone();
    }
    
}



function addVolStreet(volStreetName){
    var volStreetName= prompt("Volunteer's location:");
    volStreetArray.push(volStreetName)
    console.log(volStreetName, volStreetArray);
}

alert("There is/are " + numberVictimsNumber + " victim(s)"  + "\n" + "There is/are" + numberVolunteersNumber + " volunteer(s)" +"\n"+
    "Name of victim(s):" + victimArray +"\n"+ "Name of volunteer(s):" + volArray);



