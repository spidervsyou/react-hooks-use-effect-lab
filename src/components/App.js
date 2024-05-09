import React, { useState } from 'react';
import Question from './Question'; // Assuming Question.js is in the same directory

const App = () => {
  const [answered, setAnswered] = useState(false);

  const handleAnswered = (isCorrect) => {
    // Handle the answer logic here
    console.log(isCorrect ? 'Correct!' : 'Incorrect!');
    setAnswered(true);
  };

  return (
    <div>
      <h1>Trivia App</h1>
      <Question
        question="What is the capital of France?"
        answers={['Paris', 'London', 'Berlin']}
        onAnswered={handleAnswered}
      />
    </div>
  );
};

export default App;
