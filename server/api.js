/**
 * Created by Mohanachandran on 8/21/2015.
 */


//  Create the express framework instance
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//  set our app run on the express framework instance
var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

var User = mongoose.model('User',{
    email : String,
    password : String
});

mongoose.connect('mongodb://localhost:27017/jwtdb');

//  Set the URL routing for the app
app.post('/register', function(req, res){

    console.log(req.body);

    var newUser= new User({
        email:req.body.email,
        password: req.body.password
    });

    newUser.save(function(err){
        res.status(200).json(newUser)
    });

});

//  Set the port for the app
var server = app.listen(3000, function(){
    console.log('app is listening on 3000');
});