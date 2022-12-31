// 
// strip 
import React from "react";
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
      <h4>クリックするとバッテンcross</h4>
      <div className="item-list">
        {items.map((item, index) => (
          <div className="item-container">
            <div className="item-name" onClick={() => toggleComplete(index)}>
              <input
                type="checkbox"
                checked={items[index].isSelected}
                onChange={(e) => handleChecked(index, e.target.checked)}
              />
              {item.isSelected ? (
                <div className={item.itemName}>kkk</div>
              ) : (
                <div className={item.itemName}>mmm</div>
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
