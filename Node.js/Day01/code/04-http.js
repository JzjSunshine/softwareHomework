/*
http 创建编写服务器

*/

//1. 加载http核心模块
var http = require('http');

//2. 使用htpp创建一个web服务器
var server = http.createServer();

//3. 服务器
/*
	对数据提供服务
	发请求 ，接受请求
	处理请求，发送响应

*/

// 客户端发请求过来，执行第二个参数，回调函数处理
server.on('request',function(){
	console.log('收到客户端的请求啦！');
});

//4. 绑定端口号，启动服务器
server.listen(3000,function(){
	console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
});