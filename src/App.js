import React, { useState } from "react";
import Home from "./pages/Home";
import SubmitEssay from "./pages/SubmitEssay";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [feedbackData, setFeedbackData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {page === "login" && (
        <Login
          setPage={setPage}
          onLogin={(userData) => {
            setUser(userData);
            setPage("home");
          }}
        />
      )}

      {page === "signup" && (
        <SignUp setPage={setPage} />
      )}

      {page === "forgot" && (
        <ForgotPassword setPage={setPage} />
      )}

      {page === "home" && (
        <Home
          user={user}
          goToSubmit={() => setPage("submit")}
          goToFeedback={() => setPage("feedback")}
        />
      )}

      {page === "submit" && user?.role === "teacher" && (
        <SubmitEssay
          goBack={() => setPage("home")}
          onSubmit={(data) => {
            setFeedbackData(data);
            setPage("feedback");
          }}
        />
      )}

      {page === "feedback" && (
        <Feedback
          data={feedbackData}
          tryAgain={() => setPage("home")}
        />
      )}

    </div>
  );
}

export default App;