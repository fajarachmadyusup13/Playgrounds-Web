const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();

const User = require('../models/user');

// Register
router.get('/register', (req,  res) => {
    res.render('register');
});

// Login
router.get('/login', (req,  res) => {
    res.render('login');
});

// Register user
router.post('/register', (req,  res) => {
    let name = req.body.name;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let password2 = req.body.password2;

    req.assert('name', 'Name is required').notEmpty();
    req.assert('email', 'Email is required').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('username', 'Username is required').notEmpty();
    req.assert('password', 'Password is required').notEmpty();
    req.assert('password2', 'Password do not match').equals(req.body.password);

    req.getValidationResult().then((result) => {
        if (!result.isEmpty()) {
            res.render('register', {
                errors: result.array()
            });
        }else{
            let newUser = new User({
                name: name,
                email: email,
                username: username,
                password: password
            });

            User.createUser(newUser, (err, user) => {
                if(err) throw err;  
                console.log(user);
            });

            req.flash('success_msg', 'You are registered and can now login');

            res.redirect('/users/login');
        }
        
    });
});

passport.use(new LocalStrategy((username, password, done) => {
        User.getUserByUsername(username, (err, user) => {
            if(err) throw err;
            if(!user){
                return done(null, false, {message: 'Unknown User'});
            }

            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                }else{
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }
)); 

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id, (err, user) => {
        done(err, user);
    });
});

router.post('/login', 
    passport.authenticate('local', {successRedirect: '/', failureRedirect: '/users/login', failureFlash: true}), 
    (req, res) => {
        res.redirect('/');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;
