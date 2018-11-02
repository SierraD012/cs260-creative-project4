//This is the outer app.js

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')
var app = express();
var bodyParser = require("body-parser");


app.use(cors()) //allow all cors requests. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var app = window.angular.module('app', []); //this line doesn't work in this file
//app.controller('clickerCtrl', clickerCtrl); //neither does this line


var teamData = { red: 0, blue: 0, yellow: 0 };

app.post('/updateTeamData', function(req, res) {
  console.log("Incoming post for update team data...")
  var data = "";
  req.on('data', function(chunk) { data += chunk })
  req.on('end', function() {
    req.rawBody = data;
    req.jsonBody = JSON.parse(data);
    if(data.indexOf("red")!=-1){
      teamData.red++
    }
    
    if(data.indexOf("blue")!=-1){
      teamData.blue++
    }
    if(data.indexOf("yellow")!=-1){
      teamData.yellow++
    }
    console.log(teamData)
    
    res.end(JSON.stringify(teamData))
  })


});
app.listen(4200, function() {
  console.log("Server listening on port 4200")
})
// The controller/functions etc are in the inner app.js file (public/javascripts/app.js) cuz that's the only way I could get it to work 

module.exports = app;
