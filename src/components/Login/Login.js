// pages/login.js

import { useState } from "react";
import { setToken } from "../../pages/api/auth";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // You can perform validation here if needed

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      const data = await response.json();
      // Set token in local storage upon successful login
      setToken(data.access_token);
      // Handle successful login (redirect, display message, etc.)
      console.log("Login successful");
      alert("Login successful!");
    } catch (error) {
      // Handle login error (display error message, clear form fields, etc.)
      console.error("Login error:", error.message);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <Head>
        <title>Login</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        {/* Add viewport meta tag */}
      </Head>
      <div className="backgroundImage"></div>
      <div className="login-content">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
