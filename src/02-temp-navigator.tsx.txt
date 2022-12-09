import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form onSubmit={(e) => handleCopyClick(e)}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
          className="add-item-input"
          placeholder="入力欄"
        />
        <input type="submit" value="Copy" className="submitButton" />
      </form>
      <form onSubmit={(e) => handlePasteecho "# react-misc" >> README.md
      git init
      git add README.md
      git commit -m "first commit"
      git branch -M main
      git remote add origin git@github.com:kalz2q/react-misc.git
git push -u origin mainClick(e)}>
      <input
      />
      <input type="submit" value="Paste" className="submitButton" />
    </form>
    </div >
  );
}

export default App;
