var fs = require('fs');


/**
 参数
 	- 文件路径
 	- 文件内容
 	- 回调函数

 	成功：
 		erro：null
 		文件写入成功
 	失败：
 	    error：错误对象
		文件写入失败
*/
fs.writeFile('./data/jmm.txt','Miss jia is the most lovely girl in the world!',function(error){
	if(error){
		console.log('failed to write！');
	}
	else{
		console.log('success!');
	}
});