import React from 'react';
import './App.css';
// [Tips] JavaScriptでCSVを読み込んでJSONを作る
// JavaScriptでCSVデータ(項目行あり)をJSON形式に変換する

function App() {

  type Name = {
    id: number;
    name: string
  }

  // const names: Name[] = [
  //   {
  //     id: 0,
  //     name: "Sara"
  //   },
  //   {
  //     id: 1,
  //     name: "Cahal"
  //   },
  //   {
  //     id: 2,
  //     name: "Edite"
  //   }
  // ]

  return (
    <div className="App">
      <ul>
        {jsondata.map((v) => {
          return (
            <li
              key={v["id"]}
            >
              <p>id: {v.id} syccess: {v.succsss} date: {v.date} </p>
            </li>
          );
        })}
      </ul>
    </div >
  );
}

const original = `
id,success,registrationDate
1,true,2022/01/03
2,false,2022/08/30
3,true,2022/12/13`


export default App;
