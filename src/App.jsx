import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to hold the table, multiplier, and product
  const [table, setTable] = useState(null);
  const [multiplier, setMultiplier] = useState(null);
  const [product, setProduct] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to generate a random table and multiplier
  const generateTable = () => {
    const randomTable = Math.floor(11 + Math.random() * 9); // Random table from 11 to 19
    const randomMultiplier = Math.floor(2 + Math.random() * 8); // Multiplier from 2 to 9
    setTable(randomTable);
    setMultiplier(randomMultiplier);
    setProduct(randomTable * randomMultiplier);
    setShowAnswer(false); // Don't show answer on first click
  };

  // Function to handle the Next button click
  const handleNextClick = () => {
    if (table === null) {
      generateTable(); // First time, generate the question
    } else if (!showAnswer) {
      setShowAnswer(true); // Show the answer on the next click
    } else {
      generateTable(); // Generate a new question after showing the answer
    }
  };

  return (
    <div className="app">
      <h1>Tables Game</h1>

      <div className="table-info">
        {table !== null && multiplier !== null ? (
          <>
            <p>
              {table} x {multiplier} {showAnswer ? `= ${product}` : ''}
            </p>
          </>
        ) : (
          <p>Click Next to start the game!</p>
        )}
      </div>

      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default App;
