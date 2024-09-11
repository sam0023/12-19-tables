import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [table, setTable] = useState(null);
  const [multiplier, setMultiplier] = useState(null);
  const [product, setProduct] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const generateTable = () => {
    const randomTable = Math.floor(11 + Math.random() * 9);
    const randomMultiplier = Math.floor(2 + Math.random() * 8);
    setTable(randomTable);
    setMultiplier(randomMultiplier);
    setProduct(randomTable * randomMultiplier);
    setShowAnswer(false);
    setShowImage(false); // Hide the image when generating a new question
  };

  const handleNextClick = () => {
    if (table === null) {
      generateTable();
    } else if (!showAnswer) {
      setShowAnswer(true);
    } else {
      generateTable();
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
      <button className="revise-button" onClick={() => setShowImage(!showImage)}>
        Revise
      </button>

      {showImage && (
        <div className="image-container">
          <img src="https://i.postimg.cc/25grfTLh/46ec58292695ffa4b93db0d804cdf001.png" alt="Revision" />
        </div>
      )}
    </div>
  );
};

export default App;
