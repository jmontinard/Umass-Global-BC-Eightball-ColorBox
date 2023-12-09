import React, { useState } from 'react';
import EightBall from './EightBall';
import ColorBoxesContainer from './ColorBoxesContainer';
import { answers } from './data';
import './App.css';
const App = () => {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'eightBall':
        return <EightBall answers={answers} />;
      case 'colorBox':
        return <ColorBoxesContainer />;
      default:
        return (
          <div>
            <button onClick={() => setView('eightBall')}>Eight Ball</button>
            <button onClick={() => setView('colorBox')}>Color Box</button>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setView('home')}>Home</button>
      </nav>
      {renderView()}
    </div>
  );
};

export default App;
