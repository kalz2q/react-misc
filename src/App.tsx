import React from 'react';
import './App.css';
// [Tips] JavaScriptでCSVを読み込んでJSONを作る
// JavaScriptでCSVデータ(項目行あり)をJSON形式に変換する

function App() {

  const jsonArray = csv2json(originalData);


  return (
    <div className="App">
      <ul>
        {jsonArray.map((v) => {
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

const originalData = `
上の句, 下の句
あさぼらけう "あらわれわたる"
あきのたの, わがころもでは
`
type Item = {
  "id": number;
  "上の句": string;
  "下の句": string
}

const csv2json = (csvData: string) => {
  let csvLines = csvData.split('\n').filter(Boolean); // 行ごとに分割する
  const keyNames = csvLines[0].split(/[\n\s\"\',;.]+/); // [ '上の句', ' 下の句' ]
  let jsonArray = [];

  for (let i = 1; i < csvLines.length; i++) { // 0行目は見出しに使ったので1行目から
    let a_line: Item = {id: 0,   "上の句": "", "下の句": ""};
    let csvArrayData = csvLines[i].split(/[\n\s\"\',;.]+/); // [ 'あさぼらけ', ' あらわれわたる' ]
    a_line['id'] = i;
    for (let j = 0; j < keyNames.length; j++) {
      a_line[keyNames[j]] = csvArrayData[j];
    }
    jsonArray.push(a_line);
  }
  return jsonArray;
}

export default App;
