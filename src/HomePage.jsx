import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      {/* Background overlay for blur and opacity */}
      <div className="background-overlay"></div>

      <h1 className="title">Welcome to my English Learning App</h1>
      <p className="intro">
        Want to speak with confidence? Improve your pronunciation using advanced speech recognition technology. Whether you're learning English or any other language, this app is here to help you master your speaking skills in no time!
      </p>

      <div className="features">
        <h3>Why Choose this?</h3>
        <ul>
          <li>Real-time feedback to help you improve pronunciation.</li>
          <li>Interactive quizzes to test your skills.</li>
          <li>Track your progress over time.</li>
        </ul>
      </div>

      <Link to="/quiz">
        <button className="start-btn">Start Quiz</button>
      </Link>

      <div style={{ paddingTop: '50px' }}>
        <footer className="d-flex flex-wrap justify-content-center align-items-center border-top">
          <div className="d-flex align-items-center">
            <span className="text-muted">Future Ready Talent project by P V S Sri Harshita</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;


