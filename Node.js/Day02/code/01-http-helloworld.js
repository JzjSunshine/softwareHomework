var http = require('http');
var fs = require('fs');

var server = http.createServer();

/*
监听 Server 的request 请求事件，设置请求处理函数
    请求 处理
    响应
      一个请求对应一个一个响应，如果在请求过程中，已经响应结束了，则不能
      则不能重复发送响应，没有请求没有响应

      Apache服务软件器软件，这个软件默认有一个 www 目录，所有存放在 www 目录中的资源都可以通过网址来浏览

*/

var wwwDir = '';

server.on('request', function(req, res) {
  if (url === '') {
    fs.readFile(wwwDir + '/index.html', function(err, data) {
      if (err) {
        /*
          return
            1.阻止代码继续执行
            2.方法返回值；
        */
        return res.end('404 Not Found');
      }
      res.end(data);
    })
  } else if (url === '/a.txt') {
    fs.readFile('request', function(err, data) {
      if (err) {
        return res.end('404 Not Found');
      }
      res.end(data);
    })
  } else if (url === '/index.html') {
    fs.readFile(wwwDir + '/index.html', function(err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else if (url === '/apple/login.html') {
    fs.readFile(wwwDir + '/apple/login.html', function(err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  }
});

server.listen(3000,function(){
  console.log('running....');
});