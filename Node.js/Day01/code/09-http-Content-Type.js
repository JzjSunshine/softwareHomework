var http = require('http');

var server = http.createServer();


server.on('request',function(req,res){
	//服务器发送的数据，为utf8编码内容
	//但是浏览器不知道utf编码
	//浏览器会按照当前操作系统的编码去解析
	//http协议中，Content-Type就是告知对方我给你发送的数据是什么类型
	
	var url = req.url;

	if(url === '/plain'){
		//   text/plain 普通文本 
		res.setHeader('Content-Type','text/plain;charset=utf-8');
		res.end('hello nodejs 世界');
	}else if(url === '/html'){
		// text/html
		res.setHeader('Content-Type','text/html;charset=utf-8');
		res.end('<p>hello html <a href="">点我</a></p>');
	}
});

server.listen(3000,function(){
	console.log('server is running~');
});

