var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World!! Hurrey again!!");
});

app.listen(4000);

