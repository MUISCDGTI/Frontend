const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1/films',
    createProxyMiddleware({
      target: 'https://api-drorganvidez.cloud.okteto.net',
      changeOrigin: true,
    })
  );
};