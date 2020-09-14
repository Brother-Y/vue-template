module.exports = {
    publicPath:'./', // 路径
    outputDir:'demo', // 打包目录
    assetsDir:'', // 资源目录
    indexPath:'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    devServer:{
        host:'localhost',
        port: 8080,
        proxy:{
            '/micro':{
                target: 'http://101.200.56.93:8020/micro',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: false,// 如果接口跨域，需要进行这个参数配置
                //pathRewrite方法重写url
                pathRewrite: {
                    '^/micro': '/micro' 
                    //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
               }
            }
        }
    }
}