var name = prompt("What's your name?");

function hello(){
    alert ("Hey, " + name + "!" + "\n" + "Your name is " + name.length+ " letters long." +"\n"+ "The third letter in your name is " +name.charAt(2) 
    +"\n"+ "This is what " + name + " looks like in lowercase: "  + name.toLowerCase() +"\n"+ "And in uppercase: " + name.toUpperCase() +"\n"+ "Is " + name + " a common name in your family?"
    +"\n"+ "subword: " +name.substring(0,3));
}

hello();

