module.exports = {
  lintOnSave: false,//关闭格式校验
  publicPath: '/',
  assetsDir: "./static",
  indexPath: "./templates/index.html",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://121.196.237.175:18772',//对应的代理地址（目标服务器地址）
        changeOrigin: true,// 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        pathRewrite: {
          '^/api':""
        }
      }
    },
    //远程连接配置
    // historyApiFallback: true,
    // allowedHosts: "all",
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}