	  var socket = io();
	  
	  socket.on('connect', function(){
	    console.log('Connected to the server');
		
		socket.emit('createEmail', {
			to: 'hellojansky@gmail.com',
			text : 'hey bro',
		});
	  });
	  
	  socket.on('disconnect', function() {
	    console.log('Disconnected from the server');
	  });
	  
	  socket.on('newEmail', function (email) {
		  console.log('New emial', email);
	  });