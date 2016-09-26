var express     = require('express');
var bodyParser  = require('body-parser');
var logger      = require('morgan');
var mongoose    = require('mongoose');

var port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('main.html', {root : './public'});
});


mongoose.connect('mongodb://localhost/Final', (error) => {
    if(error){
        console.error("Could not start mongoose! ", error);
        process.exit(1); //exit node app with error
    }
    else {
        console.log("Mongoose started successfully!");
    }
});






app.listen(port, (error) => {
    if(error) {
        console.error("Server could not start! ", error);
        process.exit(1); // exits node application, anything other than 0 is considered an error
    }
    else{
        console.log("Server started!");
    }
});