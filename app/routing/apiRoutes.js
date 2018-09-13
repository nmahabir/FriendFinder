// var express = require("express");
// var app = express();
// var PORT = process.env.PORT || 3030;

var server = require("././server.js")
var friends = require("./data/friends.js")

server.app.get("/api/friends", function(req, res){
    return res.json(friends)
})

server.app.post("/api/friends", function(req, res) {
    var newProfile = req.body
})



server.app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  