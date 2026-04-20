import React from "react";
import "./Feedback.css";

export default function Feedback({ data, tryAgain }) {

  const scoreOutOf100 = data.score <= 10 ? data.score * 10 : data.score;

  const scoreColor = scoreOutOf100 < 50 ? "#ffb3b3" : "#b7ffb7";
  const textColor = scoreOutOf100 < 50 ? "#c90707" : "#15a315";

  return (
    <div className="feedback-container">

      <h2 className="title">Feedback</h2>

      <div 
        className="score-box"
        style={{
          backgroundColor: scoreColor,
          color: textColor
        }}
      >
        <span className="score">{scoreOutOf100}/100</span>
        <p className="score-label">Predicted Score</p>
      </div>

      <label className="label">Student Answer</label>
      <textarea 
        value={data.response} 
        readOnly 
        className="textarea"
      ></textarea>

      <label className="label">Model Answer</label>
      <div className="model-box">
        <p className="model-title">● Suggested Ideal Answer</p>
        <p className="model-text">
          {data.modelAnswer }
        </p>
      </div>

      <label className="label">Feedback Summary</label>
      <textarea 
        value={data.feedback}
        readOnly
        className="textarea"
      ></textarea>

      <label className="label">Suggestions to Improve the Essay</label>
      <ul className="suggestions-box">
        {data.suggestions && data.suggestions.length > 0 ? (
          data.suggestions.map((item, index) => (
            <li key={index} className="suggestion-item">{item}</li>
          ))
        ) : (
          <li className="suggestion-item"></li>
        )}
      </ul>

      <div className="btn-row">
        <button className="white-btn" onClick={tryAgain}>
          Try Again
        </button>

        <button className="blue-btn">
          View Detailed Report
        </button>
      </div>
    </div>
  );
}