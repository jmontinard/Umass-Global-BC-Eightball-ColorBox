// ColorBoxesContainer.js
import React, { useState } from 'react';
import ColorBox from './ColorBox';
import { colorList } from './data';

const ColorBoxesContainer = ({ colors = colorList, numBoxes = 16 }) => {
  const [boxes, setBoxes] = useState(
    Array.from(
      { length: numBoxes },
      () => colors[Math.floor(Math.random() * colors.length)]
    )
  );
  const [changedBoxIndex, setChangedBoxIndex] = useState(null);

  const changeRandomBoxColor = () => {
    const randomIndex = Math.floor(Math.random() * boxes.length);
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    const newBoxes = [...boxes];
    newBoxes[randomIndex] = newColor;
    setBoxes(newBoxes);
    setChangedBoxIndex(randomIndex); // Keep track of the last changed box
  };

  return (
    <div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {boxes.map((color, index) => (
          <ColorBox
            key={index}
            color={color}
            text={changedBoxIndex === index ? 'Changed!' : ''}
          />
        ))}
      </div>
      <button onClick={changeRandomBoxColor}>Change</button>
    </div>
  );
};

export default ColorBoxesContainer;
