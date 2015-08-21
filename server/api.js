/**
 * Created by Mohanachandran on 8/21/2015.
 */


//  Create the express framework instance
var express = require("express");
var bodyParser = require("body-parser");

//  set our app run on the express framework instance
var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  Set the URL routing for the app
app.post('/register', function(req, res){
    console.log(req.body);
    res.send('Hi');
});

//  Set the port for the app
var server = app.listen(3000, function(){
    console.log('app is listening on 3000');
});