package org.register;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import org.Login.*;

import org.LoginEntity.Login;

public class Register {
	public int register(Login login) {
		String urlString = "jdbc:mysql://localhost:3306/softhomework";
		
		String USERNAME = "root";
		String PWD = "jmm123";
		Connection connection = null;
		Statement stmt = null;
		try {		
			//a.导入驱动，加载具体的驱动类
			Class.forName("com.mysql.jdbc.Driver");
			//加载具体的驱动类
			//b.与数据库建立连接
			connection = (Connection) DriverManager.getConnection(urlString, USERNAME, PWD);
			//c.发送sql，执行增删改
			stmt = (Statement) connection.createStatement();
			//INSERT INTO USER (id, NAME, pwd) VALUES (3, 'key', '234');
			//INSERT INTO userInfo VALUES(NULL,'aaa','123');
			System.out.println(login.getName()+"aaaaaaa");
			System.out.println(login.getPwd()); 
			String sql = "insert into userInfo values(NULL,"+" ' "+login.getName()+"',"+" ' "+login.getPwd() +" '); ";
			
			// 执行sql
			int count = stmt.executeUpdate(sql);//返回值表示 增删改 几条数据
			//d. 处理结果
			if(count >= 0) {
				System.out.println("操作成功！ ");
				return 1;
			}
			return -1;
		}  
		catch (SQLException | ClassNotFoundException e) {
			    e.printStackTrace();
	         }
	        try {
	        	 if(stmt!=null) 
	        		 stmt.close();// 对象.方法
				 if(connection!=null)
					 connection.close();
	        }
	         catch (SQLException e) {
	             e.printStackTrace();
        }
			return -1;
	}
}
