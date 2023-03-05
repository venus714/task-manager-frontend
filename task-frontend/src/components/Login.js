import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:9292/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {                                                                                                 
        if (data.code === 200) {

          console.log("Login successful!");
        } else {
          console.log("Login failed: " + data.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <Link to="/Task"><button type="submit">Log In</button></Link>
      </form>
    </div>
  );
}

export default Login;