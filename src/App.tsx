import React from 'react';
import './App.css';
// 【React】Reactでボタンをクリックすると、内容が表示されるアコーディオンを実装する
const { useState } = React;


function App() {
  const [clicked, setClicked] = useState(100);
  const menus = [
    { title: "6月30日", content: "晴れ" },
    { title: "7月1日", content: "曇り" },
    { title: "7月2日", content: "曇り時々晴れ" },
  ];
  const handleClick = (index: any) => {
    if (clicked === index) {
      return setClicked(100);
    }

    setClicked(index);
  };

  return (
    <div className="App">
      <ul className="space-y-2">
        {menus.map((menu, index) => (
          <li key={index} style={{ width: "240px" }}>
            <button
              type="button"
              onClick={() => handleClick(index)}
              style={{
                width: "100%",
                textAlign: "center",
                backgroundColor: "#ff8c00",
                color: "#f1f1f1",
                padding: "0.5rem",
              }}
            >
              {menu.title}
            </button>
            <div>
              {menu.content}
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
}


export default App;
