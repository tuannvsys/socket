var io = require('socket.io-client');

for (let i = 0; i < 10000; i++) {
    try {
        // var socket = io.connect("http://192.168.10.36", {  transports: ['websocket'] }); // transports: ['polling']
        var socket = io.connect("http://127.0.0.1", { transports: ['websocket'] }); // transports: ['polling']
        
        socket.on("hello", (data) => {
            console.log(">>>>>> :", i, data);
        });
    } catch (err) {
        console.log(">>>>>>> ERRRRRRRRRR:", String(err))
    }
}