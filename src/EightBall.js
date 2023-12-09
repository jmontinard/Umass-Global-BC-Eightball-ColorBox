import React, { useState } from 'react';
import './Eightball.css';

const EightBall = ({ answers }) => {
  const [currentAnswer, setCurrentAnswer] = useState({
    msg: 'Think of a Question',
    color: 'black',
  });
  const [colorCounts, setColorCounts] = useState({
    green: 0,
    goldenrod: 0,
    red: 0,
    black: 1,
  });

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };

  const handleClick = () => {
    const randomAnswer = getRandomAnswer();
    setCurrentAnswer(randomAnswer);
    setColorCounts((prevCounts) => ({
      ...prevCounts,
      [randomAnswer.color]: prevCounts[randomAnswer.color] + 1,
    }));
  };

  const handleReset = () => {
    setCurrentAnswer({ msg: 'Think of a Question', color: 'black' });
    setColorCounts({ green: 0, goldenrod: 0, red: 0, black: 1 });
  };

  return (
    <div>
      <div
        className={`eight-ball ${currentAnswer.color}`}
        onClick={handleClick}
      >
        <p>{currentAnswer.msg}</p>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      <div className="color-counts">
        <p>Green: {colorCounts.green}</p>
        <p>Yellow: {colorCounts.goldenrod}</p>
        <p>Red: {colorCounts.red}</p>
      </div>
    </div>
  );
};

export default EightBall;
