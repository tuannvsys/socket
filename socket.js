require('dotenv').config()
const PORT = process.env.PORT;

async function socketIO(app) {
    const io = require('socket.io')(app.server);

    var redis = require('socket.io-redis');
	  io.adapter(redis({ host: 'localhost', port: 6379 }));

  	// io.emit('hi', 'all sockets from server 01');
    io.on("connection", function (socket) {
        const time = new Date()
    	socket.emit('hello', `Connect to server -> ${PORT}, time: ${String(time)}`);

        console.log(`User connected to ${PORT} with socketID:` + socket.id);

        socket.on("ping" , (data) => {
        	socket.emit('hello', `Connect to server -> ${PORT}, time: ${String(time)}`);
        })

        socket.on("user_send_message_to_all" , (data) => {
        	console.log(data);
        	io.sockets.emit("server_send_data_to_all" , `Server ${PORT}: ${data}`);
        })
        console.log( socket.client.conn.server.clientsCount + " users connected" );
    });
}


// const io = require('socket.io')(app.server);
//     io.on('connection', function (socket) {
//         socket.on('message', function () { });
//         socket.on('disconnect', function () { });
//     });


module.exports = { socketIO }