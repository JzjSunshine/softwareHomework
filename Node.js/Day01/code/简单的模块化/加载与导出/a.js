/*

require两个作用
	- 加载文件模块并执行里面的代码；
	2. 拿到被加载文件模块导出接口对象；

	在每个文件模块汇总提供一个对象，exports
	exports 默认为一个空对象

*/
var fs = require('fs');

var bExports = require('./b');

console.log(bExports.foo);

console.log(bExports.add(10,20));

bExports.readFile('./a.js');

fs.readFile('./a.js',function(err,data){
	if(err){
		console.log("Failed to open file!");
	}
	else {
		console.log(data.toString());
	}
});