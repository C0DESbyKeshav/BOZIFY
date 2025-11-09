package com.bozify.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.bozify.util.DBUtil;
import com.bozify.util.QueryUtil;

public class UserDaoImpl implements UserDao{

	public boolean isValidUser(String username, String password) {
		String query = (String) QueryUtil.CHECK_LOGIN;
		
		try {
			Connection connection = DBUtil.getConnection();
			// Java code ko database se connection ka kaam ho raha hai using helper class DBUtil.
			// MySQL ke case mein DBUtil.getConnection() might connect to it using: jdbc:mysql://localhost:3306/mydatabase

			PreparedStatement preparedStatement = connection.prepareStatement(query);
			// SQL query ko prepare kar ke rakhta hai taaki mai baad mein safely run kar saku aur variables (username, password) add kar saku.
			
			preparedStatement.setString(1, username);
			// SQL query ka jo first parameter "?" hai woh replace kar do username ke value se.
			preparedStatement.setString(2, password);
			
			ResultSet resultSet = preparedStatement.executeQuery();
			// SQL query run hoga and Jo bhi matching username, password rows hoga database mein woh resultSet object mein store ho jaayega.
			
			System.out.println("Query run ho gayi");
			
			return resultSet.next();
			// Moves to the next row in the result set (if any).
			// Agar row match hua then returns true else false.
			
		}catch(SQLException e){
			e.printStackTrace();
			// Agar koi error aaya toh complete error console mein print hoga for debugging.
			
			return false;
			// Agar error aaya toh return false which will mean login failed.
		}
		
		/*	Connection = you dial the number to talk to the database.
			PreparedStatement = you prepare your question. yeh line tab use hoga jab dynamic query hoga with parameters.
			Statement stmt = connection.createStatement(); yeh line tab use hoga jab static query hoga without any parameters.
			setString() = you fill in the blanks of your question.
			executeQuery() = you ask the question.
			resultSet.next() = you check if you got any answer.
			catch = if the line disconnects or fails, you handle it politely. 
		*/
	}

	@Override
	public boolean addUser(User user) {
		String query = QueryUtil.ADD_USER;

		try {
			Connection connection = DBUtil.getConnection();

			PreparedStatement preparedStatement = connection.prepareStatement(query);
			
			preparedStatement.setString(1, user.getUsername());
			preparedStatement.setString(2, user.getEmail());
			preparedStatement.setString(3, user.getPassword());
			// getter function ek string return karega for each of the functions jo already set kiya hua hai in the SignupServlet using setter function for the corresponding functions.
			
			int affectedRows = preparedStatement.executeUpdate();
			
			System.out.println("Add hogaya new user");
			
			return affectedRows>0;
			
	}catch(SQLException e){
		e.printStackTrace();
		return false;
	}
	}
}
