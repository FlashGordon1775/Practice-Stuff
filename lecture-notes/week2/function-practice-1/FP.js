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
    if(word[0] == "A" || "a"){
        return (true);
    }else{
        return (false);
    }
}

startsWithA();

//////////////////////////////////////////