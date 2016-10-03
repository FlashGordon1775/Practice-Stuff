var user = require('../models/user-schema.js');

module.exports = {
    // get things from the database
    get: (req,res) => {
        // if id present, get one specific thing
        if(req.params.id) {
            user.findOne({_id: req.params.id}).exec((err, data) => {
                res.json(data);
            });
        }
        // get all things
        else {
            user.find({}).exec((err, data) => {
                res.json( data);
            });
        }
    },
    // this is how we will post new things to the database
    upsert: (req,res) => {
        if (req.params.id) {
            // do update stuff here
            user.findOneAndUpdate({_id : req.params.id}, req.body, {new : true}, function(err, data){
                res.send(data);
            });
        } else {
            var newUser = new user(req.body);
            newUser.save(function(err,data) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(data);
                }
            });
        }
    }
}
