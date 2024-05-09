import React, { useState, useEffect } from 'react';

const Question = ({ question, answers, onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map(answer => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
      <p>Time remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Question;
