package com.bozify.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/Logout")
public class LogoutServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public LogoutServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession sessionCurrent = request.getSession(false);
		//Agar current session exist karta hai toh usey get karne ka kaam karta hai.
		//"false" ka matlab yeh ki agar session exist nahi karta hai toh woh new session create NAHI karega.
		//Since LoginServlet.java mein bhi session name ka hi object hai so yaha name change karna padega session to sessionHome so that error na aaye of having the same name.
		//Importing HttpSession at the top is mandatory.

		if(sessionCurrent != null){
			sessionCurrent.invalidate();
			// Session destroy karke user ko log out karwaa dega.
			// Session mein jo bhi data store tha (username) sab clear ho jaayega.
			
			response.sendRedirect("index.html");
			// Logout hone pe user ko index.html pe leke jaayega.
		}
	}

//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doGet(request, response);
//	}

}
