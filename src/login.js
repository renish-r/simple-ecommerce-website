import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleLogin() {
    if (!username || !password) {
      alert("Please enter any username and password to login");
      return;
    }
    
    navigate("/main");
  }

  function goToRegister() {
    navigate("/register");
  }

  return (
    <div className="login-page" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Images/login.jpeg)`
    }}>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          <button onClick={handleLogin} className="btn-primary">
            Login
          </button>

          <p className="register-link">
            Don’t have an account?{" "}
            <span onClick={goToRegister}>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
