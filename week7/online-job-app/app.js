// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

//mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/omega3studios');

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	
	console.log("hitting applicants")
	applicant.find({}, function(error, data) {
      if (error) 
        console.log( 'cannot read applicants' );
    //   else 
    //     res.render( 'applicants', {applicantData: data} );
	})

	res.sendFile('html/applicants.html', {root : './public'});
});

// creates an applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
var person = new applicant({ 
	name: req.body.name,			 
	bio: req.body.bio,
	skills: req.body.skills,
	yearsExp: req.body.yearsExp,
	reason: req.body.reason,
});
	console.log("Person to save"+ person);
	person.save(function (err){
		if(err){
			console.log(err);
		}else{
			console.log('applicant added')
		}
	})
	// console.log(req.body);
	res.sendFile('html/success.html', {root : './public'});
});

var applicant = mongoose.model('applicant', { 
	name: String, 
	bio: String, 
	skills: String, 
	yearsExp: Number, 
	reason: String 
});

// var person = new applicant({ //This has been added, but the data from the form has not. I have no idea why it posted three times in the applicants database. 
// 	name: 'Rob',			 //If you look in the node shell, you will see all the data from the form submissions. Everything is posting three times.
// 	bio: 'blah blah',
// 	skills: 'so many',
// 	yearsExp: 80,
// 	reason: 'for fun',
// });

// person.save(function (err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('hey ya!');
// 	}
// });






// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});