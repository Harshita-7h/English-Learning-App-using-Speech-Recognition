import React, { useState } from 'react';
import './QuizPage.css';
import { recognizeSpeech } from '../src/services/speechRecognition';

const QuizPage = () => {
  const [spokenText, setSpokenText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    recognizeSpeech(setSpokenText);
  };

  const stopListening = () => {
    setIsListening(false);
    // Optionally, handle speech stopping or finalize the result
  };

  return (
    <div
      className="quiz"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/letters-background.jpeg)`,
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative', // Ensures the overlay sits on top
      }}
    >
      {/* Dimming overlay */}
      <div className="overlay"></div>
      <h2 className="quiz-title">Let's so some Pronunciation Practice</h2>
      <p className="instructions">
        Try saying the word <span className="highlight">"Harshita"</span> out loud.
      </p>

      <div className="motivation">
        <p>Keep practicing! You'll get better with each attempt. Consistency is key to mastering your pronunciation!</p>
      </div>
      <br />

      <button
        onClick={isListening ? stopListening : startListening}
        className={`action-btn ${isListening ? 'listening' : ''}`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>

      <p className="spoken-text">
        Your Pronunciation: <span>{spokenText}</span>
      </p>

    </div>
  );
};

export default QuizPage;
