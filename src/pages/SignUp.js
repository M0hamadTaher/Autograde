import React from "react";
import "./Auth.css";

export default function SignUp({ setPage }) {
  return (
    <div className="auth-wrapper">

      <div className="auth-card">

        <div className="back" onClick={() => setPage("login")}>
          ← Back to Login
        </div>

        <h1 className="logo">Auto<span>Grade</span></h1>

        <h2>Create Your Account</h2>
        <p className="subtitle">Join AutoGrade and get started</p>

        <input placeholder="Full Name" />
        <input placeholder="Email Address" />

        <select>
          <option>Choose Role</option>
          <option>Student</option>
          <option>Teacher</option>
        </select>

        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="primary-btn">Sign Up</button>

        <div className="divider">or</div>


        <p className="bottom-text">
          Already have an account?{" "}
          <span onClick={() => setPage("login")}>Login</span>
        </p>

      </div>
    </div>
  );
}