import React from 'react';
import './App.css';
// Reactによるアコーディオンメニューの実装方法
// https://nishinatoshiharu.com/react-accordion/#_react-spring
// アイデアだけを頂こう。
const { useState } = React;


function App() {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
    if (showChildren) {
      
    }
  }

  return (
    <div className="App card">
      <div className="item" onClick={() => handleClick()}>
        親メニュー
      </div>
      <div className="item childItem">小メニュー1</div>
      <div className="item childItem">小メニュー2</div>
    </div >
  );
}

export default App;
