const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/api", {
    "target": "http://192.168.173.75",
    "pathRewrite": {
      "^/api": "/api",
    },
    "changeOrigin": true
  }))
}