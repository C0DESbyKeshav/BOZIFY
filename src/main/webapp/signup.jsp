<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Sign Up</title>
<link rel="icon" href="icon.ico" type="image/png/ico">
<link rel="stylesheet" type="text/css" href="authStyle.css">
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
        <div class="title">Sign Up</div>
        <form action="SignupServlet" method="post">
          <div class="entry">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Create a username" required>
          </div>
          <div class="entry">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email address" required>
          </div>
          <div class="entry">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Create a strong password" required>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div class="back">
          <p>Already have an account?</p>
          <a href="login.jsp">Log In</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>