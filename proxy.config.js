const PROXY_CONFIG = [
    {
        context: [
            '/api',
            '/locais'
        ],
        target: "http://localhost:4200/",
        secure: false,
        changerOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]


module.exports = PROXY_CONFIG;