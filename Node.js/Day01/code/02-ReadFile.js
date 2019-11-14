/*
浏览器中的JavaScript没有文件的读取能力
但是Node中的 JavaScript可以
*/

/**
  fs:file-system
  文件操作，引入fs 核心模块
  fs.readfile 方法加载 fs 核心模块
*/
//1.使用requrie 方法加载 fs 核心模块
var fs = require('fs');

// 2.读取文件
// 	参数
// 		- 文件路径
// 		- 回调函数
// 	成功
// 		- data 数据
// 		- error null
// 	失败
// 		- data undifined没有数据
// 		- error错误对象
fs.readFile('./data/hello.txt',function(error,data){
// console.log(data)
//<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
//默认存储 二进制数据
//data.toString()
	if(error){
		console.log('文件读取失败！');
	}else{
		console.log(data.toString());
	}
})
