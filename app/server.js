var express = require("express");
var app = express();
var converter = require("../lib/converter");
var serverPort = process.env.PORT || 3000; // process.env.PORT allows for PCF deployment

app.get("/", function(req, res) {
  
  res.send('Hello there!');
});

app.get("/addition", function(req, res) {
  var a = parseInt(req.query.x);
  var b = parseInt(req.query.y);

  var result = converter.addition(a, b);

  res.send(result.toString());
});

app.get("/subtraction", function(req, res) {
  var a = parseInt(req.query.x);
  var b = parseInt(req.query.y);

  var result = converter.subtraction(a, b);

  res.send(result.toString());
});

app.listen(serverPort);
console.log('Listening on port '+ serverPort);