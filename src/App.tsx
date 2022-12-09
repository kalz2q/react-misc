import React from 'react';
import './App.css';
// navigator clipboard API demo
const { useState } = React;


function App() {
  // const [inputValue, setInputValue] = useState("");
  // const [targetValue, setTargetValue] = useState("Paste value");
  const [[inputValue, targetValue], setValues] = useState(["kk", "mm"]);

  const handleChange = (e: any) => {
    // setInputValue(e.target.value);
    let newValues: [string, string] = [inputValue, targetValue];
    newValues[0] = e.target.value;
    setValues(newValues);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue)
  }

  const handlePasteClick = () => {
    // navigator.clipboard.readText().then((v) => (e.target.value = v))
    // let currentTargetValue = "";
    // navigator.clipboard.readText().then((v) =>
    //   currentTargetValue = v
    // );
    // setTargetValue(currentTargetValue)
    // alert("yuouare here")
    let newTargetValue = "youare";
    navigator.clipboard.readText().then((v) => {
      newTargetValue = v;
      console.log(newTargetValue);
    }

    );
    let newValues: [string, string] = [inputValue, newTargetValue];
    console.log(newValues);
    setValues(newValues);
  }

  return (
    <div className="App">
      <form onSubmit={() => handleCopyClick()}>
        <input
          value={inputValue}
          onChange={(e) => handleChange(e)}
          autoFocus
          className="add-item-input"
          placeholder="入力欄"
        />
        <input type="submit" value="Copy" className="submitButton" />
      </form>
      <form onSubmit={() => handlePasteClick()}>
        <input type="text" defaultValue={targetValue}
        />
        <input type="submit" value="Paste" className="submitButton" />
      </form>
    </div>
  );
}

export default App;

