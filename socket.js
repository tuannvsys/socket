
const process = require('process');
const uuidApp = process.pid

async function socketIO(app) {
    const io = require('socket.io')(app.server);

    var redis = require('socket.io-redis');
	  io.adapter(redis({ host: 'localhost', port: 6379 }));

  	// io.emit('hi', 'all sockets from server 01');
    io.on("connection" , function(socket){
    	socket.emit('hello', `Connect to server -> ${uuidApp}`);

        console.log(`User connected to ${uuidApp} with socketID:` + socket.id);

        socket.on("user_send_message_to_all" , (data) => {
        	console.log(data);
        	io.sockets.emit("server_send_data_to_all" , `Server ${uuidApp}: ${data}`);
        })
    });
}


// const io = require('socket.io')(app.server);
//     io.on('connection', function (socket) {
//         socket.on('message', function () { });
//         socket.on('disconnect', function () { });
//     });


module.exports = { socketIO }