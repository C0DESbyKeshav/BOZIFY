package com.bozify.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.bozify.dao.UserDao;
import com.bozify.dao.UserDaoImpl;
import com.bozify.dao.User;

/**
 * Servlet implementation class SignupServlet
 */
@WebServlet("/SignupServlet")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static UserDao userDao = new UserDaoImpl();
	
    public SignupServlet() {
        super();
    }

//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		User user = new User();
		user.setUsername(username);
		user.setEmail(email);
		user.setPassword(password);
		
		if(userDao.addUser(user)) {
			response.sendRedirect("login.jsp?registration=success");
		}else {
			response.sendRedirect("signup.jsp?error=1");
		}
	}

}
