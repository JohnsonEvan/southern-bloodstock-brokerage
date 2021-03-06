import React, { useState } from "react";
import './login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username,password }),
    })
      .then((r) => r.json())
      .then((user) => window.location.reload())
  }

  return (
    <div id="logindiv">
    <form id="loginform" onSubmit={handleSubmit}>
      <h2 id="login-header" class="login">Sign In</h2>
      <label htmlFor="username">Username:</label>
      <br/>
      <input className="logininputs"
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <label htmlFor="username">Password:</label>
      <br/>
      <input className="logininputs"
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button id="loginbtn" type="submit">Login</button>
      <br/>
      <a id="signuplinkbtn" href="./SignUp">Create an account</a>
    </form>
    </div>
  );
}
export default Login