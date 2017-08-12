var express = require("express");
var app = express();
var port = process.env.port || 3000;
var os = require("os");
var path = require("path");

app.use(express.static(path.join(__dirname, "views")));





app.get("/", function(req, res) {
  
});











app.listen(port, function() {
  console.log("[SERVER] Server running at port " + 3000);
});