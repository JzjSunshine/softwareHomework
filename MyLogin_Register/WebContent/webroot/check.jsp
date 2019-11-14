<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<%@ page import="org.Login.LoginDao" %>   
<%@ page import="org.LoginEntity.*" %>

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
		
		LoginDao dao = new LoginDao();
		
		int result = dao.login(login) ;
		
		if(result >0){
		out.print("登录成功！");
			}else if(result==0){
		out.print("用户名或密码有误！！");
			}else{
		out.print("系统异常！！");
			}
	%>
</body>
</html>