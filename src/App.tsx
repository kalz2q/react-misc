// react-transition-group使ってみた
// https://qiita.com/kzkapr1129/items/887b756cd36b5905fbd2
// ---
// react-transition-groupにする
// なぜならframer-motion, react-springは範囲が広すぎる
// animation全体をやりたいわけではない。
// 今はむしろreactを理解する助けになるようなツールが使いたい
// とりあえず
// https://qiita.com/takeshisakuma/items/67578529789939c900ff
// をなぞる
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import './App.css';
import styled from "@emotion/styled";
// import  ReactDOM from "react-dom";

const MyStyles = styled.div`
    .fade-enter-done {
      background: red;
      height: 100px;
    }
    
    .fade-enter {
      height: 0;
      overflow: hidden;
    }

    .fade-enter-active {
      transition: height 1s;
      background: green;
      height: 100px;
    }
`;

const App = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <MyStyles>
      <button onClick={() => setAnimate((prev) => !prev)}>
        {animate ? "falseにする" : "trueにする"}
      </button>
      <CSSTransition classNames="fade" in={animate} timeout={1000} unmountOnExit>
        {(state) => {
          return <h1>{state}</h1>;
        }}
      </CSSTransition>
    </MyStyles>
  );
};

export default App;
