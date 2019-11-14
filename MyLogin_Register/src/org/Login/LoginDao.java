package org.Login;

import java.sql.*;

import org.LoginEntity.Login;

public class LoginDao {
	public int login(Login login)
	{
		String urlString = "jdbc:mysql://localhost:3306/softhomework";
		String USERNAME = "root";
		String PWD = "jmm123";
		Connection connection = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			// a.导入驱动，加载具体的驱动类
			Class.forName("com.mysql.jdbc.Driver");// 加载具体的驱动类
			// b.与数据库建立连接
			connection = DriverManager.getConnection(urlString, USERNAME, PWD);
			// c.发送sql，执行(【查】)
			stmt = connection.createStatement();
			
			//String sql = "select count(*) from login where uname='"+login.getName()+"' and upwd ='"+login.getPwd()+"' " ;
			//String sql = "insert into student values(1,'zs',23,'s1')";
			//String sql = "insert into student values(1,"+"'"+login.getName()+"',"+"'"+login.getPwd()+"')";
			//SELECT NAME,pwd FROM USER WHERE NAME = 'zs';
			String sql = "select "+login.getName()+","+login.getPwd()+"from userinfo where name = '"+login.getName()+"';";
			
			rs = stmt.executeQuery(sql); // 返回值表示 增删改 几条数据
			if(rs == null || rs.next() == false)
				return -1;
			return 1;
			// d.处理结果
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return -1 ;
		} catch (SQLException e) {
			e.printStackTrace();
			return -1 ;
		} catch(Exception e) {
			e.printStackTrace();
			return -1 ;
		}
		finally {
			try {
				 if(stmt!=null) 
					 stmt.close();// 对象.方法
				 if(connection!=null)
					 connection.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
