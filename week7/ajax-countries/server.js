var express     = require('express');
var bodyParser  = require('body-parser');
var logger      = require('morgan');
var mongoose    = require('mongoose');
// var Routes      = require('./routes');
var countries   = require('./models/countries.json');

var port = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

console.log(countries);

mongoose.connect('mongodb://localhost/ajax-countries', (error) => {
    if(error){
        console.error("Could not start mongoose! ", error);
        process.exit(1); //exit node app with error
    }
    else {
        console.log("Mongoose started successfully!");
    }
})

// app.post('*', bodyParser.json(), bodyParser.urlencoded({extended:true}));
// Routes(app);

//Routes

app.get('/', (req, res) => {
    response.sendFile('./countries.json',{
    root:'/Projects/week7/ajax-countries/public'
    })
})

app.get('/countries', (req, res) => {
    console.log(countries);
    res.json(countries);
});

app.get('/search', function(request, response){
    console.log('Search is working', request.query.name)

    var result = countries.filter(function(element){
        console.log('I am in the filter');
        console.log("<", element.name, request.query.search);
        if(element.name == request.query.search){
            return true;
        }else{
            return false;
        }
    });

    console.log(result)

    response.send(result);
})

// app.get('/api/countries', cCtrl.get);

app.listen(port, (error) => {
    if(error) {
        console.error("Server could not start! ", error);
        process.exit(1); // exits node application, anything other than 0 is considered an error
    }
    else{
        console.log("Server started!");
    }
});