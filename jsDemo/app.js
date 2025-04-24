// 通过websocket实现前后端的实时交互,不用使用构建工具就可以预览到页面


const ws = require('nodejs-websocket') // 导入nodejs-websocket包
const POST = 3000 // 自定义的端口

const server = ws.createServer(connect =>{
    console.log("创建了一个服务端,表示由用户链接") // 每当有用户使用这个链接，则执行这个
})

server.listen(POST,()=>{
    console.log("正在监听端口："+POST)    
}) // 监听该链接
