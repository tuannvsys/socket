var io = require('socket.io-client');

var socket = io.connect("http://45.32.60.107:3001", { transports: ['websocket'] })
socket.on("hello", (data) => {
    console.log(">>>>>>>>>>:", data)
});
