var http = require('http');
var express = require('express');
var path = require('path');

// experiment
var routes = require('./routes');
var suer = require('./routes/user');
app.get('/', routes.index);
app.get('/users', user.list);



const PORT=8080;


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/homepagek.html'));
});

app.listen(8080);

app.post('/', function(req, rest) {

	var spawn = require('child_process').spawn;

	var process = spawn('python',["index.py", placeHolderForStringToPass]);

	py.stdout.on('data', function(data){
		console.log(data);
		res.send(data);
	}
};
	

/*
function handleRequest(request, response){
	response.end('It works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
*/
