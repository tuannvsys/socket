module.exports = {
    apps: [
        {
            name: "App1",
            script: "./index.js",
            watch: true,
            env: {
                PORT: 3000
            }
        },
        {
            name: "App2",
            script: "./index.js",
            watch: true,
            env: {
                PORT: 4000
            }
        },
         {
            name: "App2",
            script: "./index.js",
            watch: true,
            env: {
                PORT: 5000
            }
        }
    ]
}