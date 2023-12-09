import React from 'react';
import './ColorBox.css';

const ColorBox = ({ color, text }) => {
  const boxStyle = {
    '--box-color': color, // Set the CSS variable dynamically
  };

  return (
    <div className="colorBox" style={boxStyle}>
      {text}
    </div>
  );
};

export default ColorBox;
