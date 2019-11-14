
//1. 结合fs发送文件中的数据
// 2. Content-Type
//  http://tool.oschina.net
//	不同资源对应的 Content-Type 是不一样的
//  一般只为字符数据才指定编码
var http = require('http');
var fs = require('fs');

var server = http.createServer();


server.on('request',function(req,res){
	var url = req.url;
	if(url === '/'){
		fs.readFile('./resource/index.html',function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain;character=utf-8');
				res.end('文件读取失败，请稍后重试');
			}
			else{
				res.setHeader('Content-Type','text/html;character=utf-8');
				res.end(data);
			}
		})
	}else if(url === '/baby'){
		fs.readFile('./resource/ab2.jpg',function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain;character=utf-8');
				res.end('文件读取失败，请稍后重试');
			}else{
				//url：统一资源定位
				//图片不需要指定编码，编码指：字符编码
				res.setHeader('Content-Type','image/jpeg');
				res.end(data);
			}
		})
	}

});

server.listen(3000,function(){
	console.log('server is running~');
});

