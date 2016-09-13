// simple js web server 

// require a CORE module 

var http = require('http');

// require a 3rd party module
var requestinator = require('request');

console.log('Server started');

var server = http.createServer(function(request, 
response){
    requestinator.get('http://xkcd.com', function
    (err, resp, body){
        console.log(body);
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(body);
    });
});

server.listen(process.env.PORT ||  3000);