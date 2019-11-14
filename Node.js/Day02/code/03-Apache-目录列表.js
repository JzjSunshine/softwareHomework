var http = require('http');
var fs = require('fs');

var server = http.createServer();
var wwwDir =  'D:/self_taught/node.js/Node.js/Movie/www';
server.on('request',function(req,res){
	
	var url = req.url;
	fs.readFile('./static-template.html',function(err,data){
		if(err){
			return res.end('404 Not Found.');
		}
		/*
		1.如何得到 www.Dir 目录中的文件名和目录名
			fs.readdir
		2. 如何将得到的文件名和目录名替换到 template.html 中
			2.1 在 template.html 中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
			2.2 根据 files 生成需要的 HTML 内容；

		*/
		/*fs.readdir(wwwDir,function(err,files){
			if(err){
				return res.end('Can not find www.Dir');
			}
			console.log(files);
		});*/

		//2.1生成需替换的内容
		fs.readdir(wwwDir,function(err,files){
			if(err){
				return res.end('Can not find www dir.');
			}
			var content = '';
			files.forEach(function(item){
				/*
				在EcmaScript 6 的 ``反引号，可以换行拼接  可以使用 ${}来引用变量
				*/
				content += `   
				<tr>
	                <td data-value="apple/"><a class="icon dir" href="/D:/self_taught/node.js/Node.js/Movie/www/apple/">${item}/</a></td>
	                <td class="detailsColumn" data-value="0"></td>
	                <td class="detailsColumn" data-value="1570757332">2019/10/11 上午9:28:52</td>
	            </tr>
	            `;
			})

			//2.3替换
			data = data.toString();
			//普通字符串解析替换，浏览器看到的结果就会不一样
			data = data.replace('^_^',content);

			res.end(data);
		  })
		})
});

server.listen(3000,function(){
	console.log('running...');
});