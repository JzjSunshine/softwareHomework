#  一.基本介绍

`shift+enter` 换单行 `enter` 双行

1. node.js是`javascript`的运行环境；
2.  `Javacript`的运行环境，脱离浏览器运行；
3. 没有BOM和DOM，因为服务器不操作页面；
   为`Javascript`提供一些服务器级别的操作API
   例如 ：文件读写，网络服务器的构建，网络通信
    http服务器，……

4. 功能
5. 事件驱动，异步

- 非阻塞IO模型；
- 轻量高效；
- npm世界上最大的开源生态系统；
- 绝大数的`Javascript`相关的包都在`npm`上，方便开发人员使用；

5. 构建与`chrome`的V8引擎之上；Google的V8引擎目前公认的解析JS代码最快的；

# 二.Node.js能干什么

1. hexoHexo 是一个快速、简洁且高效的博客框架。Hexo使用Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
2. B/S编程模型

- Browser-Server
- back-end
- 任何服务端技术这种BS编程模型都一样，和语言无关；
- Node只是作为学习BS编程模型的一个工具；

3. 模块化编程

- 在Node中可以像`@inmport`一样加载JavaScript脚本文件；

# 三. node.js安装

1. 6.11.5LTS稳定版  Current：体验版
2. node --version 或者

# 四.运行

1. shift+右键，即可在相应文件夹下打开终端；
2. 输入 node 文件名 即可执行文件；
3. 不要将执行文件命名为node.js，最好不要使用中文；

# 五.Node中的JavaScript 

## 5.1 HTTP

### 5.1.1 客户端请求

~~~javascript
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
~~~

![1570710903403](C:\Users\ADMINI~1\AppData\Local\Temp\1570710903403.png)

1. `EcmaScript` 没有BOM和DOM；
2. 核心模块
3. Node为JavaScript提供了很多的服务器级别的API都被包装中一个具名的核心模块中；
4. 例如，文件系统fs模块，http服务构建的http模块，path路径操作模块，`os`操作系统信息模块；

## 5.2 ip地址和端口号

- ip地址用来定位计算机；

- 端口号用来定位具体的程序；

- 一切需要联网的通信软件都会占用一个端口号；

- 端口号的范围 0~65536之间；

- 在计算机中有一些默认端口号，最好不要去使用；

  - 例如http服务的80

- 在开饭过程中最好做一些简单的记忆，例如3000 5000，没有什么特殊含义；

- 可以同时开启多个服务，要确认不同服务的端口号同一时间不能占用一个端口号；
  
  ![1570713742013](C:\Users\ADMINI~1\AppData\Local\Temp\1570713742013.png)

  Content-Type 对应查询

  <http://tool.oschina.net/commons> 

  # 总结

## 1. Node.js是什么

- JavaScript运行环境
- 既不是语言，也不是框架，为一个平台

## 2.Node.js中的`JavaScript`

- 没有BOM,DOM
- EcmaScript基本的JavaScrpt语言部分；
- 在Node中为JavaScript提供一些服务器几倍的API
  - 文件的操作能力
  - http的服务能力

## 3. Node中JavaScript

- EcmaScript
  - 变量
  - 放啊
  - 数据类型
  - 内置对象
  - Array
  - Object
  - Data
  - Math
- 模块系统
  - 在Node中没有全局作用域的概念
  - 在Node中，只能通过require方法加载执行多个JavaScript脚本文件
  - require加载的只是执行其中的代码，文件与文件之间由于模块作用域，所以不会有污染问题
    - 模块完全是封闭的
    - 外部无法访问内部
    - 内部也无法访问外部
  - 模考作用域固然带来一些好处，可以加载执行多个文件，可以完全避免变量命名冲突
  - 某些情况下，模块之间是需要通信的
    - 提供通信对象 	`exports`
    - 该对象默认为空对象
    - 将需要被外部访问的成员手动挂载在`exports`接口对象上
    - 由其他模块`require`得到试使用这个对象的权利；
  - 核心模块
    - 核心模块是Node提供的一个个的具名的模块，他们有自己的特殊名称标识；例如；
      -  fs文件操作模块 
      - http 网络服务构建模块
      - os ：操作系统信息模块
      - path：路径处理
      - ……
  - http
    - require
    - 端口号
      - ip地址定位计算机
      - 端口号定位具体应用程序
    - Content-Type
      - 服务器最好把每次响应的数据是什么类型都告诉客户端
      - 不同资源对应的Content-Type具体参照：http://tool.oschina.net/commons
      - 对于文本类型的数据，最好都加上编码，目的是为了防止中文解析乱码问题
    - 通过网络发送文件
      - 发送的并不是文件，本质上来讲是文件的内容；
      - 当浏览器收到的服务器响应的内容之后，就会根据Content-Type进行响应的解析处理
    - 模块系统
    - Node 中的其它的核心模块
    - 做一个小管理系统：
      - CRUD
    - Express Web 开发框架
      - `npm install express`

## 

