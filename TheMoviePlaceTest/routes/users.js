const mongoose = require('mongoose');
const router = require('express').Router();   
const User = mongoose.model('User');
const passport = require('passport');
const utils = require('../lib/utils');

// TODO
router.get('/profile', passport.authenticate( 'jwt',{session: false}),(req, res, next) => {
    res.status(200).json({ success: true, msg:"You are authorised as "+req.user.username});
});

// TODO
router.post('/login', function(req, res, next){

    User.findOne({ username: req.body.username })
        .then((user) => {

            if (!user) {
                res.status(401).json({ success: false, msg: "Could not find user" });
            }
            
            // Function defined at bottom of app.js
            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
            
            if (isValid) {

                const tokenObject = utils.issueJWT(user);

                res.status(200).json({ success: true, user:user, token: tokenObject.token, expiresIn: tokenObject.expires,msg:"Successfully logged in!" });

            } else {

                res.status(401).json({ success: false, msg: "You entered the wrong password!" });

            }

        })
        .catch((err) => {
            next(err);
        });
});

// TODO
router.post('/register', function(req, res, next){
    const saltHash = utils.genPassword(req.body.password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt
    });
    
    newUser.save()
        .then((user) => {
            
            const jwt = utils.issueJWT(user);
            res.json({ success: true, user: user,token: jwt.token,expiresIn: jwt.expires });
        })
        .catch(err => next(err));


});

router.put('/edit',passport.authenticate('jwt',{session: false}),function(req,res,next){

    User.findOne({ username: req.user.username })
    .then((user) => {

        if (!user) {
            res.status(401).json({ success: false, msg: "Could not find user" });
        }

            const tokenObject = utils.issueJWT(user);
            User.findByIdAndUpdate(req.user.id, {
                $set: req.body
            }, {
                new: true
            }, function (err, user) {
                if (err) throw err;
                res.status(200).json({ success: true,user:user,token: tokenObject.token, expiresIn: tokenObject.expires ,msg:" User updated successfuly"});
            });


        })
    .catch((err) => {
        next(err);
    });

})

router.delete('/delete',passport.authenticate('jwt',{session: false}),function(req,res,next){

    User.findOne({ username: req.user.username })
    .then((user) => {
        if (!user) {
            res.status(401).json({ success: false, msg: "Could not find user" });
        }
        User.remove({}, function (err, resp) {
            if (err) throw err;
            res.status(200).json({ success: true,response:resp,msg:" User deleted successfuly"});
        });

    })
    .catch((err) => {
        next(err);
    });

})



module.exports = router;