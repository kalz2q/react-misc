import React from 'react';
import './App.css';
// cannot find props ｍで来た
// Devyan
// https://codepen.io/lovemaui/pen/bGwwxwx
const { useState } = React;

function App() {
  const cardIcon = '+';
  const cardIconRotate = '-';
  const [isOpen, setIsOpen] = useState(false);
  const [rotateClass, setRotateState] = useState(cardIcon);


  const { header, body } = props;


  function toggle() {
    setIsOpen(!isOpen);
    setRotateState(
      isOpen === true
        ? cardIcon
        : cardIconRotate
    );
  }

  function Accordion(props) {
    const cardIcon = 'fa fa-chevron-right';
    const cardIconRotate = 'fa fa-chevron-right rotate';

    const [isOpen, setIsOpen] = React.useState(false);
    const [rotateClass, setRotateState] = React.useState(cardIcon);
    const { header, body } = props;

    function toggle() {
      setIsOpen(!isOpen);
      setRotateState(
        isOpen === true
          ? cardIcon
          : cardIconRotate
      );
    }

    return (
      <div className="card">
        <div
          className="card-header"
          onClick={toggle}>
          <h2>{header}</h2>
          <i className={rotateClass}></i>
        </div>
        {isOpen && (
          <div className="card-body">{body}</div>
        )}
      </div>
    )
  }

  const cards = products.map((product) => {
    const { header, body } = product;
    return (
      <Accordion
        header={header}
        body={body}
      />
    );
  });

  return (
    <div className="App card">
      {cards}
    </div >
  );
}

const products = [
  {
    header: '人生の目的は何か',
    body: '生まれてきてしまったのでしょうがない'
  },
  {
    header: '楽しいことをしたい',
    body: '辛いことが一番楽しいとかはどうですか'
  },
  {
    header: '子供の頃は良かった',
    body: '嘘です'
  }
];

export default App;
