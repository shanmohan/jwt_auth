/**
 * Created by Mohanachandran on 8/21/2015.
 */


//  Create the express framework instance
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/User.js");
var jwt = require("./services/jwt.js");

//  set our app run on the express framework instance
var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


mongoose.connect('mongodb://localhost:27017/jwtdb');

//  Set the URL routing for the app

app.post('/jobs', function (req, res) {
    if (!req.headers.authorization) {
        return res.status(401).send({message: 'You are not authorized'});
    }
    var jobs = ["Angular Jobs", ".Net Jobs", "Java Jobs"];
    res.json(jobs);
});

app.post('/register', function (req, res) {

    console.log(req.body);

    var payload = {
        iss: req.hostname,
        sub: req.body._id
    };

    var token = jwt.encode(payload, 'MOHAN');


    var newUser = new User.model({
        email: req.body.email,
        password: req.body.password
    });

    newUser.save(function (err) {
        res.status(200).send({
            user: newUser.toJSON(),
            token: token
        })
    });

});


//Set the port for the app and start the server
var server = app.listen(3000, function () {
    console.log('app is listening on 3000');
});