<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<%@ page import="org.Login.LoginDao" %>   
<%@ page import="org.LoginEntity.*" %>
<%@ page import="org.register.*" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
</head>
<body>
	
	
	<%
		request.setCharacterEncoding("utf-8") ;
			
		String name = request.getParameter("username");
		String pwd = request.getParameter("password");
		Login login = new Login(name,pwd);
		
		out.print(login.getName());
		out.print(login.getPwd());
		
		Register reg = new Register();
		
		int result = reg.register(login);
		
		if(result >0){
		out.print("注册登录成功！");
			}else if(result==0){
		out.print("注册失败！！");
			}else{
		out.print("系统异常！！");
			}
	%>
</body>
</html>