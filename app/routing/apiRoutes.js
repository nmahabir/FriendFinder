// var express = require("express");
// var app = express();
// var PORT = process.env.PORT || 3030;

var server = require("././server.js")
// var friends = require("./")

server.app.get("/api/friends", function(req, res){
    return res.json()
})

server.app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})



server.app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  