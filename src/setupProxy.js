const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://164.92.76.182', // Reemplaza con la URL real de tu backend
      changeOrigin: true,
    })
  );
};
