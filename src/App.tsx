import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleClick = () => {
    setToggleIcon((current) => !toggleIcon);
  };

  return (
    <div className="App">
      <h1>click icon</h1>
      <div
        className={toggleIcon ? "map icon" : "paperclip icon"}
        onClick={() => handleClick()}
      ></div>
    </div>
  );
}



export default App;
