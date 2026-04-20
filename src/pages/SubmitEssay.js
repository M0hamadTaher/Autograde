import React, { useState } from "react";
import "./SubmitEssay.css";

export default function SubmitEssay({ goBack, onSubmit }) {

  const [form, setForm] = useState({
    name: "",
    subject: "",
    question: "",
    response: "",
    modelAnswer: ""
  });

  const handleSubmit = async () => {
    try {

      const response = await fetch("https://localhost:7119/api/Grading/grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: form.question,
          studentAnswer: form.response,
          modelAnswer: form.modelAnswer  
        })
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const result = await response.json();

      onSubmit({
        ...form,
        score: result.grade,
        feedback: result.feedback,
        suggestions: result.suggestions || [],
        modelAnswer: form.modelAnswer 
      });

    } catch (error) {
      console.error("API error:", error);
      alert("Error connecting to API");
    }
  };

  return (
    <div className="form-container">

      <h1 className="logo">AutoGrade</h1>

      <input
        type="text"
        placeholder="Student Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />

      <input
        type="text"
        placeholder="Question"
        onChange={(e) => setForm({ ...form, question: e.target.value })}
      />

      <textarea
        placeholder="Student Response"
        onChange={(e) => setForm({ ...form, response: e.target.value })}
      ></textarea>

      <textarea
        placeholder="Model Answer"
        onChange={(e) => setForm({ ...form, modelAnswer: e.target.value })}
      ></textarea>

      <div className="btn-row">
        <button className="blue-btn" onClick={handleSubmit}>
          Submit
        </button>

        <button className="white-btn" onClick={goBack}>
          Back
        </button>
      </div>

    </div>
  );
}