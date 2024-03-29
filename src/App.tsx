// 36=>no map version を作ってみる。実験。消すかもしれない。
// react-misc 38-maybe-checkbox
// mapでindexでごまかした部分をidで明示的に書く=> indexをidとするだけで元と同じに動いた
// mapを外すことに意味がないかも => いやある。なぜなら今回は画像が同じだが
// 本来は違うはずだから。そだね。=> ここまで考えて力が尽きた
// => 単純化してゼロスタートしたい
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
const { useState } = React;

const App = () => {
  type Item = {
    id: number;
    itemName: string;
    isSelected: boolean;
  };
  const [items, setItems] = useState<Item[]>([
    {
      id: 0,
      itemName: "pink",
      isSelected: true
    },
    {
      id: 1,
      itemName: "orange",
      isSelected: false
    }
  ]);

  const toggleComplete = (id: number) => {
    const newItems = [...items];
    newItems[id].isSelected = !newItems[id].isSelected;

    setItems(newItems);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const newItems = [...items];
    if (checked) {
      newItems[id].isSelected = true;
    } else {
      newItems[id].isSelected = false;
    }

    setItems(newItems);
  };



  return (
    <div className="App">
      <h2>クリックすると...</h2>
      <div className="item-list">
        {items.map((item, id) => (
          <div className="item-container">
            <div className="item-name" onClick={() => toggleComplete(id)}>
              <input
                type="checkbox"
                className="hide-checkbox"
                checked={items[id].isSelected}
                onChange={(e) => handleChecked(id, e.target.checked)}
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
