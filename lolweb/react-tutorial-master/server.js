// http://expressjs.com/en/guide/routing.html
//https://github.com/reactjs/react-router#whats-it-look-like for routing 
//http://stackoverflow.com/questions/29635162/calling-react-view-from-express
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/homepage', function(req, res) {
	res.send('\homepage.html');
});

app.get('/random.text', function (req, res) {
  res.send('random.text');
});

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});