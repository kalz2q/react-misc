// no map version を作ってみる。実験。消すかもしれない。
// react-misc 37-maybe-checkbox
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
const { useState } = React;

const App = () => {
  type Item = {
    itemName: string;
    quantity: number;
    isSelected: boolean;
  };
  const [items, setItems] = useState<Item[]>([
    {
      itemName: "pink",
      quantity: 3,
      isSelected: true
    },
    {
      itemName: "orange",
      quantity: -3,
      isSelected: false
    }
  ]);

  const toggleComplete = (index: number) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const handleChecked = (index: number, checked: boolean) => {
    const newItems = [...items];
    if (checked) {
      newItems[index].isSelected = true;
    } else {
      newItems[index].isSelected = false;
    }

    setItems(newItems);
  };



  return (
    <div className="App">
      <h2>クリックすると...</h2>
      <div className="item-list">
        {items.map((item, index) => (
          <div className="item-container">
            <div className="item-name" onClick={() => toggleComplete(index)}>
              <input
                type="checkbox"
                className="hide-checkbox"
                checked={items[index].isSelected}
                onChange={(e) => handleChecked(index, e.target.checked)}
              />
              {item.isSelected ? (
                <div className={item.itemName}>
                  <div id="eye_left">
                    <div id="iris_left"></div>
                  </div>
                  <div id="eye_right">
                    <div id="iris_right"></div>
                  </div>
                  <div id="mouth02"></div>
                  <div className="crossed">
                  </div>
                </div>
              ) : (
                <div className={item.itemName}>
                  <div id="eye_left">
                    <div id="iris_left"></div>
                  </div>
                  <div id="eye_right">
                    <div id="iris_right"></div>
                  </div>
                  <div id="mouth02"></div>
                </div>
              )}
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default App;
