const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        //定义前端项目的端口号
        port: 7070,

        proxy: {
            // 配置代理，解决ajax请求跨域问题, 前端只有以'/api'作为前缀才进行代理转发
            // TODO: 为什么这个转发不会造成跨域问题呢？这底层的逻辑是什么？
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    // 前端发送的路径中含有'/api'，但是实际上后端并不需要这一部分
                    '^/api': ''
                }
            },
        }
    }
})
