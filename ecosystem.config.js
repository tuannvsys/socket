module.exports = {
    apps: [
        {
            name: "App1",
            script: "./index.js",
            watch: true,
            env: {
                PORT: 3001
            }
        },
        {
            name: "App2",
            script: "./index.js",
            watch: true,
            env: {
                PORT: 3002
            }
        },
        // {
        //     name: "App3",
        //     script: "./index.js",
        //     watch: true,
        //     env: {
        //         PORT: 3003
        //     }
        // },
        // {
        //     name: "App4",
        //     script: "./index.js",
        //     watch: true,
        //     env: {
        //         PORT: 3004
        //     }
        // }
    ]
}