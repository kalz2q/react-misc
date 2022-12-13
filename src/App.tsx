import React from 'react';
import './App.css';
// cannot find props => 出来た。propsを排除した。
// Devyan
// https://codepen.io/lovemaui/pen/bGwwxwx
const { useState } = React;


const cardIcon = '+';
const cardIconRotate = '-';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateClass, setRotateState] = useState(cardIcon);

  // const { header, body } = props;


  function toggle() {
    setIsOpen(!isOpen);
    setRotateState(
      isOpen === true
        ? cardIcon
        : cardIconRotate
    );
  }

  return (
    <div className="App card">
      <h1>FAQ</h1>
      <dl>
        <div className="appear">
          <dt>質問です</dt>
          <dd>回答です。回答です。</dd>
        </div>
        <div>
          <dt>質問です</dt>
          <dd>回答です。回答です。回答です。回答です。回答です。</dd>
        </div>
        <div>
          <dt>質問です</dt>
          <dd>回答です。回答です。回答です。回答です。回答です。回答です。回答です。</dd>
        </div>
      </dl>
      <h1>FAQ</h1>
    </div >
  );
}

export default App;
