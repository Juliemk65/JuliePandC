import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "Julie" && password == 1234) {
      navigate("/adminPage");
    } else {
      alert("You don't have access! Please go back to the home page 🙈");
    }
  };

  const handleSubmitBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="login-page">
        <h1 className="login-header">Welcome to the Login Page!</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              placeholder="Please enter Username"
              autoComplete="off"
              id="name"
              name="email"
              className="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="login-button"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button onClick={handleSubmitBack} className="go-back-button">
              Back to Home Page
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
