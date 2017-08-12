var express = require("express");
var app = express();
var port = process.env.port || 3000;
var os = require("os");
var path = require("path");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", function(req, res) {
  
});


function comma (string) {
  var stack = [], i=0;
  while(string[i]!==",") {
        stack.push(string[i]);
  }

  return stack.join("");
}


app.get("/api/whoami", function(req, res) {
  var ip = comma(req.headers['x-forwarded-for']);
  var lang = comma(req.headers['accept-language']);
  var soft = req.headers['user-agent'];
  
  
  res.json({
    ipaddress: ip,
    language: lang,
    software: soft
  });
});



app.listen(port, function() {
  console.log("[SERVER] Server running at port " + 3000);
});