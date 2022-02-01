const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../build')));
app.use(
  '/api/*',
  createProxyMiddleware({
    target: 'https://tpts-tiltakspenger-mottak.dev.intern.nav.no/',
    changeOrigin: true,
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Redirect to local
app.listen(port);

module.exports = {};
