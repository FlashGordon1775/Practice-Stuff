function letterCapitalize(str) {
     var str = str.split(' ');                

     for(var i = 0; i < str.length; i++){               
          str[i] = str[i].split('');                    
          str[i][0] = str[i][0].toUpperCase();          
          str[i] = str[i].join('');                     
     }
     return str.join(' ');                              
}

console.log(letterCapitalize('happy birthday!'));

function wordCount(str) {
    return str.split(' ').length;
}

console.log(wordCount('hello world'));

function primeTime(value){
    for (var i=2; i<value; i++){
	   if(value % i===0){
		return ("false");
	    } 
    }
		return ("true");
		}
console.log(primeTime(106453));
