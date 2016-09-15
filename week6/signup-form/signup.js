var express = require('express');
var fs = require('fs');
var parser = require('body-parser');
var morgan = require('morgan');

var app = express();
var port = process.env.PORT || 3000;
var fileServer = express.static('public');

app.use(fileServer);

app.get ('/', function(req, res){
    res.send('<form method="post" action="/formsubmit"> <input name="email" type="email"> <input type="submit"> </form>');
});

app.get ('/success', function(req, res){
    res.send('<h1>Success!</h1>')
});

app.post('/formsubmit', function(req, res){
    console.log(req.body);
    res.redirect('/success');
});

app.listen(port, function(){
    console.log('server is up ' + port)
});