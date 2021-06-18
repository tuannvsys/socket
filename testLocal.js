var io = require('socket.io-client');

var socket = io.connect("http://127.0.0.1:3001", { transports: ['websocket'] })
socket.on("hello", (data) => {
    console.log(">>>>>>>>>>:", data)
});
