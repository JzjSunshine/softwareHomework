/*
requrie是一个方法，
它的作用是加载模块的
在Node中，有三种，
	具名的核心模块： 例如fs，http
	用户自己编写的文件模块
	相对路径必须加 ./

	在node中，没有全局作用域，只有模块作用域
	外部访问不到内部
	内部也访问不到外部

	既然是模块作用域，如何使莫夸之间通信


require两个作用
	- 加载文件模块并执行里面的代码；
	2. 拿到被加载文件模块导出接口对象；

	在每个文件模块汇总提供一个对象，exports
*/
var foo = 'aaa'

console.log('a start')

function add(a,b){
	return a+b;
}

require('./b.js')

console.log('foo =',foo)

console.log('a end')