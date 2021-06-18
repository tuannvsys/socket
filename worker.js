var io = require('socket.io-client');

(async () => {
    var dateStart = new Date();
    await run()
    var dateEnd = new Date()
    var diff = (dateEnd.getTime() - dateStart.getTime()) / 1000
    console.log(">>>>>>>> TIMEEEEE: ", diff)
})();


async function run() {
    const fns = []
    for (let i = 0; i < 1000; i++) {
        fns.push(Task())
    }
    await Promise.all(fns)
}

async function Task() {
    return new Promise((resolve, reject) => {
        var socket = io.connect("http://45.32.60.107", { transports: ['websocket'] })

        socket.on("hello", (data) => {
            console.log(">>>>>>>>>>:", data);
            resolve(socket.emit("ping", "Ping Pong"))
        });
    })
}

async function Slow() {
    return new Promise((resolve, reject) => {
        return setTimeout(function () {
            resolve(true)
        }, 0)
    })
}