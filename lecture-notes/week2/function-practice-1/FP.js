function tripleFive(){
    for(var i = 0; i < 3; i++){
        console.log(i, "Five!");
    }
}

tripleFive();

/*function lastLetter(){
    var greeting = "Hello";{
        return(greeting.length - 1);
    }
}

lastLetter();*/


function lastLetter(word){ 
    return (word.substr(word.length - 1));
    
}

lastLetter('hello');

/////////////////////////////

function square(number){
    return (number*number);
}

square(3);

////////////////////////////////////

function negate(number){
    return(-number);
}

negate(3);

/////////////////////////////////////

function toArray(num1, num2, num3){
    return([num1, num2, num3]);
}

toArray(1,2,3);

///////////////////////////////////////

function startsWithA(word){
    if(word.charAt(0) == "A" || word.charAt(0) == "a"){
        return (true);
    }else{
        return (false);
    }
}

startsWithA("word");

//////////////////////////////////////////

function excite(word){
    return(word + "!!!");
}

excite("word");

///////////////////////////////////////////

function sun(word){
    return (word.indexOf('sun') != -1);
}

sun('sunday');
sun('asunder');
sun('day');

/////////////////////////////////////////

function tiny(number){
    if(number >= 0 && number <= 1){
        return true;
    }else{
    return false;
    }
}

tiny(2);

//////////////////////////////////////////

function getSeconds(time){
    if(time.match(/^\d{2}\:\d{2}$/)){
        var a = time.split(':');
        var sec = parseInt(a[0])*60 + parseInt(a[1]);
        console.log(sec + " sec");
    }
}

getSeconds('01:30');