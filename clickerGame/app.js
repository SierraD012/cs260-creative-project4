//This is the outer app.js

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const favicon = require('express-favicon');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/images/favicon_cookie.png'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()) //allow all cors requests. 

app.use('/', indexRouter);
app.use('/users', usersRouter);

//var app = window.angular.module('app', []); //this line doesn't work in this file
//app.controller('clickerCtrl', clickerCtrl); //neither does this line

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var teamData = {red: 0, blue: 0, yellow: 0};

app.post('/update', function(req, res, next) {
  var teamColor = req.body;
  
  console.log("Posting: " + teamColor);

  switch (teamColor) {
    case ('red'):
      teamData.red++;
      break;
    case ('blue'):
      teamData.blue++;
      break;
    case ('yellow'):
      teamData.yellow++;
      break;
  }

  return res.send(teamData);
});
app.listen(8080, function(){
  console.log("Server listening on port 8080")
})
// The controller/functions etc are in the inner app.js file (public/javascripts/app.js) cuz that's the only way I could get it to work 

module.exports = app;