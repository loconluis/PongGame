var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'));

//app.get("/", function(req, res){
//    res.redirect('/index.html')
//})

server.listen(5000, function() {
  console.log('Server is runnig...');
})