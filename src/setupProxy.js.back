const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.34.151.1:3000',
      pathRewrite: {
        '^/api':'',
      },
      changeOrigin: true
    })
  )

  app.use(
    createProxyMiddleware('/account/api', {
      target: 'http://3.34.151.1:3000',
      pathRewrite: {
        '^/account/api':'',
      },
      changeOrigin: true
    })
  )

  
  
  
  
//   app.use(
//     createProxyMiddleware('/다른context', {
//       target: 'https://다른호스트',
//       pathRewrite: {
//         '^/지우려는패스':''
//       },
//       changeOrigin: true
//     })
//   )
};