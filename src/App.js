import React, { useState } from "react";
import Home from "./pages/Home";
import SubmitEssay from "./pages/SubmitEssay";
import Feedback from "./pages/Feedback";
import "./App.css";

function App() {

  const [page, setPage] = useState("home");
  const [feedbackData, setFeedbackData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {page === "home" && (
        <Home goToSubmit={() => setPage("submit")} />
      )}

      {page === "submit" && (
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
          tryAgain={() => setPage("submit")}
        />
      )}
    </div>
  );
}
export default App;