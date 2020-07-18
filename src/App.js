import React from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

const App = () => {
  return (
    <div className='App'>
      <ColorPicker />
      <Canvas />
    </div>
  );
};

export default App;
