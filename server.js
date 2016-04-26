var express = require('express');
var mongojs = require('mongojs');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;
app.use(cors());
app.use(bodyParser());

app.listen(port, function(){
	console.log('Server listening on port' + port)
});

app.post('/addquote', function(req, res){
	res.header('Access-Control-Allow-Origin', '*');
	console.log(req.body);

})
//app.listen & app.post are listener for http.post
//the handler is the entire function on app.post

app.get('/', function(req, res){
	res.header('Access-Control-Allow-Origin', '*');
	res.send('a string from a GET request');

})