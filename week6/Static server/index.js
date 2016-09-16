// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs')                     //student addition 
// Create Express App Object \\
var app = express();

//var fileContents = fs.readFileSync('data.txt'); //student addition for part 2



// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



// Routes \\
// app.get('/', function(req, res){
//   fs.readFile('data.txt', function(err, data){
//     res.header('Content-Type', 'text/html')
//     res.send(data)
//  });
// });

app.get('/:filename', function(req, res){              // for requesting any file by name
    res.sendFile(req.params.filename, {root: '.'})
    console.log(req.params.filename);
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})