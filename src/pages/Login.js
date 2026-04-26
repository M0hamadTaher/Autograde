import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
  
    if (!email.trim() || !password.trim() || !role.trim()) {
      setError("Please fill all fields");
      return;
    }

    setError("");


    onLogin({ email, role });
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1 className="logo">AutoGrade</h1>
        <p className="subtitle">Sign in to your account</p>

        <h3 className="choose">Choose your role</h3>

   
        <div className="roles">

          <div
            className={`role-card ${role === "teacher" ? "active" : ""}`}
            onClick={() => setRole("teacher")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="teacher"
            />
            <h4>Teacher</h4>
            <p>Access all features</p>
          </div>

          <div
            className={`role-card ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="student"
            />
            <h4>Student</h4>
            <p>View results only</p>
          </div>

        </div>


        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       
        {error && (
          <p style={{ color: "red", fontSize: "13px" }}>
            {error}
          </p>
        )}

        
        <div
          className="forgot"
          onClick={() => setPage && setPage("forgot")}
        >
          Forgot password?
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="divider">or</div>

        
        <p className="signup">
          Don't have an account?{" "}
          <span onClick={() => setPage && setPage("signup")}>
            Sign up
          </span>
        </p>

        
<div className="login-footer">
  <p className="copyright">
    © {new Date().getFullYear()} AutoGrade. All rights reserved.
  </p>
</div>

      </div>
    </div>
  );
}