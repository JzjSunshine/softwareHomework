<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>化验管理系统登陆</title>  
  
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <link rel="stylesheet" type="text/css" href="css/reset.css"/>
    <script type="text/javascript">
    	function checkAccoutn(){
    		
    		var accountID = document.getElementById("accountID");
    		if(accountID.value.length < 6 || accountID.value.length > 12)
    		{
//  			alert(accountID.value.lenght);
//  			console.log(accountID.value.lenght);
				alert("用户名必须为6—12位");
    			//document.getElementById("accountID").value = "用户名必须为6—12位";
    		}
    		
    		
    	}
    	function checkPwd()
    	{
    		var pwdID = document.getElementById("pwdID");
    		if(pwdID.value.length<6 || pwdID.value.length > 12)
    		{
    			alert("密码必须为6—12位");
    			//document.getElementById("pwdID").innerHTML = "<font color='red'>密码必须为6—12位</font>";
    		}
    	}
    	window.onload = function(){
    		var submit_btn = document.getElementById("submit_btnID");
    		
    		submit_btnID.onclick = function(){
    			var pwdID = document.getElementById("pwdID").value;
    			var accountID = document.getElementById("accountID").value;
    			console.log(pwdID+" aaaa  "+accountID);
		        location.replace("../Software.html");
		        if(accountID.equals("admin123") && pwdID.equals("123456")){
		        	location.replace("../Software.html");
		        }else{
		        	alert("用户名或密码有误，请检查后输入！");
		        }
    		};
    	};
    </script>
</head>

<body>
<!--header开始-->
		<div class="header w">	
			<!--创建导航条-->
            <ul class="mynav">
            	<li>
            		<a href="#">医院首页</a>
            		<p>Back to home</p>
            	</li>
            	<li>
            		<a href="#">服务中心</a>
            		<p>What we have for you</p>
            	</li>
            	<li>
					<a href="#">党群建设</a>
					<p>Things we do</p>
				</li>
				<li>
					<a href="#">联系我们</a>
					<p>Follow our updates</p>
				</li>
				<li>
					<a href="#">健康科普</a>
					<p>Ways to reach us</p>
				</li>
            </ul>
            
			<div class="log">
				<a href="#" alt="网站的log">
					<img src="../img/banner/HUST.png"/>
				</a>
			</div>
		</div>
		<!--header结束-->
		
		<!--content开始-->
		<div class="content clearfix">
			
			<section id="login_wrap">
	        <div id="outer" class="banner w">
				<ul id="imgList">
					<li><img src="../img/banner/协和医院副本.jpg"/></li>
				</ul>
			</div>
	        	
	        <div class="login-box">
	        	<div class="title">
	        		<img src="images/login_logo.png" alt="">
	        		<span>欢迎登录化验管理系统账户</span>
	        	</div>
	        	<div class="login_inner">
					
					<!--登录错误提示消息-->
	        		<div id="errorMsg" class="alert alert-danger" ></div>
					<form id="loginForm" action="" method="post" accept-charset="utf-8">
	        			<input type="hidden" name="action" value="login"/>
						<input id="accountID" name="username" type="text" placeholder="请输入账号" autocomplete="off" onblur="checkAccoutn()">
	        			<input id="pwdID" name="password" type="password" placeholder="请输入密码" autocomplete="off" onblur="checkPwd()">
				<div class="submit_btn" id="submit_btnID">
	        				<button type="button">登录</button>
	        				<div class="auto_login">
	        					<input type="checkbox" name="" class="checkbox">
	        					<span>自动登录</span>
	        				</div>        				
	        			</div>        			       		
	        		</form>
	        		<div class="reg">没有账户？<a href="javascript:;">立即注册</a></div>
	        	</div>
        </div>
    </section>
		</div>
		<!--content结束-->
		
	    
	    
		<!--footer开始-->
		<div class="footer">
			<div class="w footer-div">
				<p class="copy">Copyright 2019. HUST SoftWare Homework. All Rights Reserved.</p>	
				<p>Site Powered by Wordpress. Design and Developed by HUSTERS.</p>
				<p><a href="#">Home</a> | <a href="#">About</a> | <a href="#">Products</a> | <a href="#">Services</a> | <a href="#">Contact</a></p>
				<p><a href="#">Privacy Policy</a> | <a href="">Terms of use</a></p>
			</div>
		</div>
		<!--footer结束-->
</body>

</html>