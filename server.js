var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "views")));


app.get("/", function(req, res) {
  
});


function commaParser(string) {
  var stack = [], i=0;
  while((i<=string.length)&&(string[i]!==",")) {
  	stack.push(string[i]);
    i++;
  }
  return stack.join("");
}

function braceParser(string) {
  var status = 0;
  var stack = [], i=0, j;
  for(i=0; i<string.length; i++) {
    if((status==0)&&(string[i]=="(")) {
      status=1;
      j=i+1;
      while(string[j]!==")") {
        stack.push(string[j]);
        j++;
      }
    }
  }
  return stack.join("");
}


app.get("/api/whoami", function(req, res) {
  var ip = commaParser(req.headers['x-forwarded-for']);
  var lang = commaParser(req.headers['accept-language']);
  var soft = braceParser(req.headers['user-agent']);
  
  res.json({
    ipaddress: ip,
    language: lang,
    software: soft
  });
});


app.listen(port, function() {
  console.log("[SERVER] Server running at port " + port);
});



