import React from 'react';
import './App.css';
// 

const { useEffect, useRef, useState } = React;


function App() {

  // type Props = {
  //   title: string;
  //   withIcon?: boolean;
  // };

  const childElement = useRef<HTMLDivElement>(null);
  const [showChildren, setshowChildren] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const [reverseIcon, setReverseIcon] = useState(false);

  useEffect(() => {
    if (childElement.current) {
      const height = childElement.current?.clientHeight;
      setChildHeight(height);
    }
  }, []);

  const handleClick = () => {
    if (childElement.current) {
      setshowChildren(!showChildren);
    }
    setReverseIcon(!reverseIcon);
  };


  return (
    <div className="App card">
      <dl>
        <div className="appear">
          <div className="item" onClick={() => handleClick()}>親メニュー</div>
          <div>子メニュー1</div>
          <div>子メニュー1</div>
        </div>
      </dl>
    </div >
  );
}

export default App;
