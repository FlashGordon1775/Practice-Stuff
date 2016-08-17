validNumber();

function validNumber(){
    var phoneNumber = prompt("Enter your phone number. It WILL NOT be used for SPAM.");
    if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-" && phoneNumber.length === 12 
        && phoneNumber.charAt(0) >= 0 && phoneNumber.charAt(0) <= 9
        && phoneNumber.charAt(1) >= 0 && phoneNumber.charAt(1) <= 9 
        && phoneNumber.charAt(2) >= 0 && phoneNumber.charAt(2) <= 9 
        && phoneNumber.charAt(4) >= 0 && phoneNumber.charAt(4) <= 9
        && phoneNumber.charAt(5) >= 0 && phoneNumber.charAt(5) <= 9 
        && phoneNumber.charAt(6) >= 0 && phoneNumber.charAt(6) <= 9 
        && phoneNumber.charAt(8) >= 0 && phoneNumber.charAt(8) <= 9
        && phoneNumber.charAt(9) >= 0 && phoneNumber.charAt(9) <= 9 
        && phoneNumber.charAt(10) >= 0 && phoneNumber.charAt(10) <= 9 
        && phoneNumber.charAt(11) >= 0 && phoneNumber.charAt(11) <= 9){
        alert ("Valid number");
        validDate();
    }else{
        alert ("Enter a valid number");
        validNumber();
    }
} 



///////////////////////////////////////////////////////////////////////////////



function validDate(){
    var birthDate = prompt("Enter your date of birth. Use MM/DD/YY format");
    if(birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/" && birthDate.length === 8
        && birthDate.charAt(0) >= 0 && birthDate.charAt(0) <= 1
        && birthDate.charAt(1) >= 0 && birthDate.charAt(1) <= 9
        && birthDate.charAt(3) >= 0 && birthDate.charAt(3) <= 3
        && birthDate.charAt(4) >= 0 && birthDate.charAt(4) <= 9
        && birthDate.charAt(6) >= 0 && birthDate.charAt(6) <= 9
        && birthDate.charAt(7) >= 0 && birthDate.charAt(7) <= 9
        ){
        alert ("Valid date");
        validPostalCode();
    }else{
        alert ("Invalid date. Please re-enter.");
        validDate();
    }
}

//validDate();

//////////////////////////////////////////////////////////////////////////



function validPostalCode(){
    var postalCode = prompt("What is your zip code? Use XXXXX format.");
    /*var i = postalCode.length;*/
    for (var i = 0; i < postalCode.length; i++){
        var char = postalCode[i];
        if( char == 0 && postalCode.length === 5){
        }
        else if(char == 1 && postalCode.length === 5){
        }
        else if(char == 2 && postalCode.length === 5){
        }
        else if(char == 3 && postalCode.length === 5){
        }
        else if(char == 4 && postalCode.length === 5){
        }
        else if(char == 5 && postalCode.length === 5){
        }
        else if(char == 6 && postalCode.length === 5){
        }
        else if(char == 7 && postalCode.length === 5){
        }
        else if(char == 8 && postalCode.length === 5){
        }
        else if(char == 9 && postalCode.length === 5){
        }
        else{
            alert ("Not a valid zip");
            validPostalCode();
        }
    }alert ("Thank you");
    stateAbreviation();
}

//validPostalCode();

///////////////////////////////////////////////////////////////////////////////



function stateAbreviation(){
    var state = prompt("What is your state of residence? Capitalize state abreviation");
    if(state.charAt(0) >= "A" && state.charAt(0) <= "Z"
        && state.charAt(1) >="A" && state.charAt(1) <="Z"
        && state.length === 2){
            alert ("valid state");
            wedUnwed();
        }else{
            alert ("not a valid state");
            stateAbreviation();
        }
}

//stateAbreviation();

////////////////////////////////////////////////////////////////////////////////



function wedUnwed(){
    var maritalStatus = prompt("Are you married?");
    if(maritalStatus == "yes" || maritalStatus == "Yes" || maritalStatus == "YES"){
        alert("Congrats!");
    }else if(maritalStatus == "no" || maritalStatus == "No" || maritalStatus == "NO"){
        alert("It's not all it's cracked up to be.");
    }else{
        alert("invalid response");
        wedUnwed();
    }
}

//wedUnwed();