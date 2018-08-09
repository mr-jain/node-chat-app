const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../Public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connect',(socket) => {
	console.log('new user connected');	
	
	socket.emit('newEmail' , {
		from : 'jain222akash@gmail.com',
		text : 'Hey akash what is going on',
		createAt : 123
	});
	
	socket.on('createEmail' , (newEmail) => {
        console.log('createEmail',newEmail);		
	})
	
	socket.on('disconnect', () => {
		console.log('User was Disconnected');
	});
});

server.listen(port, () =>
{
	console.log(`Server is up on ${port}`);
});