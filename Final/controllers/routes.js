var Auth = require('./auth');
module.exports = (app) => {

    console.log("In routes");
    app.get('/', (req,res) => {
        res.render('home.html');
    });
    
    app.get('/auth', Auth.render);         // login page
    // app.get('/logout', Auth.logout);        // logout route + redirect

    app.post('/auth', Auth.login);         // login form submission
    app.post('/register', Auth.register);   // register form submission

    app.all('/profile', Auth.middlewares.session);
    app.get('/profile', (req, res) => {
        res.render('profile.html', req.session);
    });
    app.get('/api/me', function(req, res, next){
        res.send(req.session.user)
    });
}