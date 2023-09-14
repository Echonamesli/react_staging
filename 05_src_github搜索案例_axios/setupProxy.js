//每次修改代理文件都需要重新npm start启动！！！！
const {createProxyMiddleware:proxy} = require('http-proxy-middleware')
 module.exports=function(app){
    app.use(
        proxy('/api1',{   //遇见以api1为前缀的请求，就会触发该代理配置，把所有带api1前缀的请求转发给5000
            target:'http://localhost:5000',  //请求转发给谁
            changeOrigin:true,  //控制服务器收到的请求头中host字段的值
            pathRewrite:{'^/api1':''}  //去除请求前缀，保证交给后台服务器的是正常请求地址（必须配置）
        })
    )
 }