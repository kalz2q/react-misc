import React from 'react';
import './App.css';
// 詳細cssアニメーション編
// Add or Remove a Class on click in React
// https://bobbyhadz.com/blog/react-add-remove-class-on-click

const { useState } = React;

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div className="App">
      <div className={isActive ? 'box bg-salmon' : 'box'} onClick={handleClick}>
        Click
      </div>
    </div >
  );
}

export default App;
