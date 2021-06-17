var io = require('socket.io-client');

for (let i = 0; i < 1000; i++) {
    try {
        // var socket = io.connect("http://192.168.10.36", {  transports: ['websocket'] }); // transports: ['polling']
        var socket = io.connect("http://45.32.60.107", { transports: ['websocket'] }); // transports: ['polling']
        
        socket.on("hello", (data) => {
            console.log(">>>>>> :", i, data);
        });
    } catch (err) {
        console.log(">>>>>>> ERRRRRRRRRR:", String(err))
    }

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END TEST:::::")
}