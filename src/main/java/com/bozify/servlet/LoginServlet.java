package com.bozify.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import com.bozify.dao.UserDaoImpl;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static UserDaoImpl userDao = new UserDaoImpl();
       
    public LoginServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		// login.jsp mein jo "username" naam ka input tag banaya hai woh as a string pass karke store ho raha hai.
		String password = request.getParameter("password");
		// login.jsp mein jo "password" naam ka input tag banaya hai woh as a string pass karke store ho raha hai.
		
		if(userDao.isValidUser(username, password))
		// userDao ek object hai DAO(Data Access Object) class ka.
		// isValidUser ek method hai jo userDao object ke through call ho raha hai.
		// isValidUser yeh check karega ki yeh username wala person already exist karta hai ya nahi aur agar exist karta hai toh uska password match ho raha hai ya nahi.
		{
			HttpSession session = request.getSession();
			// User ka jo existing session hai (uska login state, selected theme, liked songs, subscriptions) will get stored temporarily across pages jab tak user khud logout nahi kar deta or leave for too long.
			session.setAttribute("username", username);
			// Session ke andar username store ho raha hai.
			// Ab home.jsp mein <%= session.getAttribute("username") %> karke username ko access karke UI mein show kar sakte hai.
			response.sendRedirect("home.jsp");
			// Login successful hone pe user ko home.jsp pe leke jaayega.
		}
//		if(username.equals("keshav")) {
//			response.sendRedirect("home.jsp");
//		}
		else {
			response.sendRedirect("login.jsp?error=1");
			// Username / password match naa hone pe user ko waapis login.jsp pe hi leke aayega but ek error flag(error=1) ke saath so that browser knows ki ab page ko error show karna hai.
			System.out.println("Account nahi hai tera, bana ke aa.");
		}
	}

}
