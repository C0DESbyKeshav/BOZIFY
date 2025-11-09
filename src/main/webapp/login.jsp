<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="icon" href="icon.ico" type="image/png/ico">
<link rel="stylesheet" type="text/css" href="authStyle.css"/>
</head>
<body>
  <div class="window">
    <div class="side-section">
      <div class="logo">
        <img src="icon.png">
        <p>Bozify</p>
      </div>
      <div class="description">
        <p>Rhythm Redefined</p>
        <p>Feel the frequency, stream the vibe with complete freemium experience</p>
      </div>
      <div class="illustration"><img src="music3d.png"></div>
    </div>
    <div class="details">
      <div class="container">
      <%-- Registration successful ho jaaye toh  --%>
      <% String rs = request.getParameter("registration");
      if(rs != null && rs.equals("success")){
      %>
       <p class="rs-success" style="display:grid; place-items:center; margin-bottom:40px; color:green;">Registration Successful!  Please Log In.</p>
       <% } %>
        <div class="title">Log In</div>
        <form action="LoginServlet" method="post">
          <div class="entry">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
          </div>
          <div class="entry">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
          </div>
          <%-- Login fail hone pe error message show hoga --%>
      <% String error = request.getParameter("error");
            		// Woh error jo pass kiya tha LoginServlet mein network query link ke through usko get kar rahe hai.
      		if(error != null && error.equals("1")){ %>
      			<p class="error-message" style="display:grid; place-items:center; margin:20px; color:red;">Invalid username or password.  Please try again.</p>
      		<% } %>
          <button type="submit">Log In</button>
        </form>
        <div class="back">
          <p>Don't have an account?</p>
			<a href="signup.jsp">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
  
  <script>
	  setTimeout(()=>{
		  const errMsg = document.querySelector(".error-message");
		  if(errMsg){
			  errMsg.style.display = "none";
		  }
	  },5000);
  </script>
</body>
</html>