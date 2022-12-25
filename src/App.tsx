// はじめてのjavascript dotinstall
import React, { useState } from "react";
import './App.css';

function App() {
  const [textContent, setTextContent] = useState("ボケ防止にプログラミング頑張っています。温かく見守って下さい。");

  const handleClick = () => {
    setTextContent("頑張ります。");
  }

  return (
    <>
      {/* <div className="section"> */}
      <section>
        <div
          className="face box"
          onClick={() => handleClick()}
        >
          <div id="eye_left">
            <div id="iris_left"></div>
          </div>
          <div id="eye_right">
            <div id="iris_right"></div>
          </div>
          <div id="mouth02"></div>
        </div>
        <h1>山田太郎</h1>
        <p>{textContent}</p>
        {/* </div> */}
      </section>
      {/* <div className="footer">(c) kalz2q </div> */}
      <footer>(c) kalz2q </footer>
    </>
  );
}

export default App;
