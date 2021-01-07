var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);


app.get('/', function(req, res) {
  
   res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket) {
	console.log("connected");
  socket.on('hello', function() {
    console.log('Hello received');
  });
});
