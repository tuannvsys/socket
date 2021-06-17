const path = require("path")
const app = require("fastify")()
const {socketIO} = require("./socket")

require('dotenv').config()
const PORT = process.env.PORT;

async function start() {
    /***** With SocketIO Lib *****/
    socketIO(app)

    app.register(require('fastify-static'), {
        root: path.join(__dirname, 'public'),
        prefix: '/static/'
    })

    app.get("/ping", async (req, res) => {
        res.send({ data: 200 })
    })
    app.get("/", async (req, res) => {
        res.redirect("/static/index.html")
    })

    app.listen(PORT, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(">>>>>>>> Server running at port :", PORT)
    })
}

start()

