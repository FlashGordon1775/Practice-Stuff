const SALTY_BITS = 10;

var mongoose = require('mongoose');
    bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema( {
    name: {type: String},
    email: {type:String},
    password: {type: String}, //encrypted
    role: {type: Boolean}, //0 for mentee 1 for mentor
    bio: {type: String},
    area: {type: String}, //Area of focus for mentors and mentees
    created: {
            type: Number,
            default: () => Date.now()
        }
});

userSchema.pre('save', (next) => {
    var user = this;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.genSalt(SALTY_BITS, (saltErr, salt) => {
        if (saltErr) {
            return next(saltErr);
        }
        console.info('salty as fuck' + salt);
        bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
            if (hashErr) {
                return next(hashErr);
            }
            user.password = hashedPassword;
            next();
        });
    });
});

// export the schema and name it User, and create the plural Users
module.exports = mongoose.model('User', userSchema, 'Users');