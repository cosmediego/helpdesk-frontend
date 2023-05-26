const PROXY_CONFIG = [
    {
        context: [
            '/login'
        ],
        target: "http://localhost:8080",
        secure: false,
        changerOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]
module.exports = PROXY_CONFIG;