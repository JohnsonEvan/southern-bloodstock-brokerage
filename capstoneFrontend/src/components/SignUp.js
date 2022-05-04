import React, { useState } from "react";
import "./SignUp.css";


function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
    return (
        <div id="signupform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br/>
        <input
        id="username"
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          placeholder ="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <br/>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          placeholder ="confirm password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <button id="signUpButton" type="submit">Submit</button>
      </form>
      </div>
    );
  }
export default SignUp;