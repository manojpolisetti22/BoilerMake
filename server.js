var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT=8080;


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/homepagek.html'));
});

app.listen(8080, function(){
	console.log("Started on PORT 8080");
});

app.post('/author',function(req,res){
	var author=req.body.auth;
	console.log("Author name = "+author);
	res.end("yes");
});

app.post('/search', function(req,res){
	console.log("At least I'm getting to the server");
	var author=req.body.auth;
	var spawn = require("child_process").spawn;
	var process = spawn('python',["index.py", author]);
	process.stdout.on('data', function (data) {
		console.log("Got something back from python "+data);
	});
	console.log("Author name = "+author);
	res.end("yes");
});
/*
app.post('/', function(req, rest) {

	var spawn = require('child_process').spawn;

	var process = spawn('python',["index.py", placeHolderForStringToPass]);

	py.stdout.on('data', function(data){
		console.log(data);
		res.send(data);
	}
});
	


function handleRequest(request, response){
	response.end('It works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
*/
