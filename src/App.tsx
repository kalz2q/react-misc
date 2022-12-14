import React from 'react';
import './App.css';
// 詳細cssアニメーション編


const { useState } = React;


function App() {
  const [reverseIcon, setReverseIcon] = useState(false);

  const handleClick = () => {
    setReverseIcon(!reverseIcon);
  };

  return (
    <div className="App">

    </div >
  );
}

export default App;
