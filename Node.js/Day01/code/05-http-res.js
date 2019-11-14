//1. 加载http核心模块
var http = require('http');

//2. 使用htpp创建一个web服务器
var server = http.createServer();

//3. 服务器
// 客户端发请求过来，执行第二个参数，回调函数处理

// request 请求事件处理函数，需要接收两个参数：
//    Request 请求对象
//        请求对象可以用来获取客户端的一些请求信息，例如请求路径
//    Response 响应对象
//        响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
	// http://127.0.0.1:3000/   /
	// http://127.0.0.1:3000/a  /a
	// http://127.0.0.1:3000/a/foo  /a/foo
	console.log('收到客户端的请求啦,请求路径是： '+request.url);

	//response对象有一个方法，write，可以给客户端发送响应数据
	//write 可以使用多次，但是最后一定要使用 end 结束响应，否则客户端会一直等待
	response.write('hello ');
	response.write('nodejs');

	//告诉服务器我的话说完了，可以呈递给客户了
	response.end();


});

//4. 绑定端口号，启动服务器
server.listen(3000,function(){
	console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
});