var path = require('path');
var express  = require('express');
// static file compression middleware
var compress = require('compression');
// middleware that allows you to parse request body, json, etc.
var bodyParser = require('body-parser');

// middleware to serve a favicon prior to all other assets/routes
var favicon = require('serve-favicon');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(compress());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 80);

console.log('server started on port: ', process.env.PORT || 3000);