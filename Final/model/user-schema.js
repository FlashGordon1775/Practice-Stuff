var mongoose = require('mongoose');

var userSchema = mongoose.Schema( {
    name: {type: String},
    email: {type:String},
    password: {type: String}, //encrypted
    role: {type: Boolean}, //0 for mentee 1 for mentor
    bio: {type: String},
    area: {type: String} //Area of focus for mentors and mentees
});

// export the schema and name it User, and create the plural Users
module.exports = mongoose.model('User', userSchema, 'Users');