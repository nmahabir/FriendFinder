var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  
  module.exports = {
      express: express,
      app: app,
      bodyParser: bodyParser,
      path: path,
      PORT: PORT
  }