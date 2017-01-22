var http = require('http');
var express = require('express');
var app = express();
var path = require('path');


const PORT=8080;


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/template.html'));
});

app.listen(8080);


/*
function handleRequest(request, response){
	response.end('It works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
*/
