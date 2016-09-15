var express = require('express');
var fs = require('fs');
var parser = require('body-parser');
var morgan = require('morgan');
// var path = require('path');
// var router = require('/routes.js');

var app = express();
var port = process.env.PORT || 3000;
var fileServer = express.static('public');
// var router = express.Router();

app.use(fileServer);
// app.use(express.static('public'));

app.get ('/', function(req, res){
    console.log(req);
    res.sendFile('/index.html', {root : './public/html'});
})

app.get ('/Canary', function(req, res){
    res.sendFile('/Canary.html', {root : './public/html'});
})

app.get ('/CapeVerde', function(req, res){
    res.sendFile('/CapeVerde.html', {root : './public/html'});
})

app.get ('/Strait-of-Magellan', function(req, res){
    res.sendFile('/Strait-of-Magellan.html', {root : './public/html'});
})

app.get ('/Guam', function(req, res){
    res.sendFile('/Guam.html', {root : './public/html'});
})

app.get ('/Philippines', function(req, res){
    res.sendFile('/Philippines.html');
})

app.listen(port, function(){
    console.log('server is up ' + port)
})
