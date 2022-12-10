import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [targetValue, setTargetValue] = useState("paste");

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleCopyClick = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(inputValue)
  }


  const handlePasteClick = (e: any) => {
    e.preventDefault()
    let currentTargetValue = "";
    navigator.clipboard.readText().then((v) => {
      currentTargetValue = v;
      alert(v);
    }

    );
    setTargetValue(currentTargetValue)
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleCopyClick(e)}>
        <input
          value={inputValue}
          onChange={(e) => handleChange(e)}
          autoFocus
          className="add-item-input"
          placeholder="入力欄"
        />
        <input type="submit" value="Copy" className="submitButton" />
      </form>
      <form onSubmit={(e) => handlePasteClick(e)}>
        <input
          value={targetValue}
        />
        <input type="submit" value="Paste" className="submitButton" />
      </form>
    </div >
  );
}

export default App;
