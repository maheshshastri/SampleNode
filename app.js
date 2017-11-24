var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World!! There I am !!");
});

app.listen(4000);

