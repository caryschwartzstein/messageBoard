const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    const proxy = createProxyMiddleware({ target: 'http://localhost:5000' })
    app.use('/api', proxy);
    // app.use(proxy('/otherApi/**', { target: 'http://localhost:5000' }));
};