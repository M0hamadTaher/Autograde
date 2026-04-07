import React from "react";
import "./Home.css";

export default function Home({ goToSubmit }) {
  return (
    <div className="home-container">
      <h1 className="logo">AutoGrade</h1>

      <h2>Automated Essay Scoring</h2>

      <button className="blue-btn" onClick={goToSubmit}>
        Score Essay
      </button>

      <p className="sub-text">
        Evaluate Essays with AI <br />
        Automatically assess essay responses using advanced AI technology.
      </p>

      <footer className="copyright">
        © 2026 AutoGrade
      </footer>
    </div>
  );
}