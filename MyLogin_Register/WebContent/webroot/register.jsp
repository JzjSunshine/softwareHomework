<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>化验管理系统注册</title>  
  
   	<link rel="stylesheet" type="text/css" href="css/register.css"/>
    <link rel="stylesheet" type="text/css" href="css/reset.css"/>
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
	        	
		</div>
		<!--content结束-->
		
		<!--注册开始-->
        <!-- 头部 end -->
    	<div class="rg_layout">
    		<div class="rg_form clearfix">
    			<div class="rg_form_left">
    				<p>新用户注册</p>
    				<p>USER REGISTER</p>
    			</div>
    			<div class="rg_form_center">
					
					<!--注册表单-->
    				<form id="registerForm" action="check_reg.jsp" method="post" accept-charset="utf-8">
						<!--提交处理请求的标识符-->
						<input type="hidden" name="action" value="register">
    					<table style="margin-top: 25px;">
    						<tr>
    							<td class="td_left">
    								<label for="username">用户名</label>
    							</td>
    							<td class="td_right">
    								<input type="text" id="username" name="username" placeholder="请输入账号">
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left">
    								<label for="password">密码</label>
    							</td>
    							<td class="td_right">
    								<input type="text" id="password" name="password" placeholder="请输入密码">
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left">
    								<label for="email">Email</label>
    							</td>
    							<td class="td_right">
    								<input type="text" id="email" name="email" placeholder="请输入Email">
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left">
    								<label for="name">姓名</label>
    							</td>
    							<td class="td_right">
    								<input type="text" id="name" name="name" placeholder="请输入真实姓名">
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left">
    								<label for="telephone">手机号</label>
    							</td>
    							<td class="td_right">
    								<input type="text" id="telephone" name="telephone" placeholder="请输入您的手机号">
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left">
    								<label for="sex">性别</label>
    							</td>
    							<td class="td_right gender">
    								<input type="radio" id="sex" name="sex" value="男" checked> 男
    								<input type="radio" name="sex" value="女"> 女
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left">
    								<label for="birthday">出生日期</label>
    							</td>
    							<td class="td_right">
    								<input type="date" id="birthday" name="birthday" placeholder="年/月/日">
    							</td>
    						</tr>
    						<tr>
    							<td class="td_left"> 
    							</td>
    							<td class="td_right check"> 
    								<input type="submit" class="submit" value="注册">
									<span id="msg" style="color: red;"></span>
    							</td>
    						</tr>
    					</table>
    				</form>
    			</div>
    			<div class="rg_form_right">
    				<p>
    					已有账号？
    					<a href="#">立即登录</a>
    				</p>
    			</div>
    		</div>
    	</div>
		<!--注册结束-->
		
		
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