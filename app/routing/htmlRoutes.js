// var express = require("express");
// var app = express();
// var PORT = process.env.PORT || 3030;

var server = require("././server.js")

server.app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"))
})

server.app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})



// server.app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  