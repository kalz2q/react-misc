import React from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from 'react-router-dom';

// import * as reactRouterDom from "https://cdn.skypack.dev/react-router-dom@6.5.0";

// 元記事: React Router v6 はじめでもわかるルーティングの設定方法の基礎
// https://reffect.co.jp/react/react-router-6
// const { BrowserRouter, Routes, Route } = reactRouterDom;

// https://cdn.skypack.dev/react-router-dom@6.5.0
// https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js
// <script src='https://unpkg.com/react-router-dom@5.0.0/umd/react-router-dom.min.js'></script>
// https://unpkg.com/react-router-dom@5.0.0/umd/react-router-dom.min.js


const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        新規登録は<reactRouterDom.Link to={`/register/`}>こちら</reactRouterDom.Link>
      </div>
    </>
  );
};

const Register = () => {
  return (
    <>
      <h1>新規登録ページ</h1>
      <div>
        ログインは<reactRouterDom.Link to={`/login/`}>こちら</reactRouterDom.Link>
      </div>
      <div>
        <reactRouterDom.Link to={`/`}>ホームに戻る</reactRouterDom.Link>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <>
      <h1>ログインページ</h1>
      <div>
        新規登録は<reactRouterDom.Link to={`/register/`}>こちら</reactRouterDom.Link>
      </div>
      <div>
        <reactRouterDom.Link to={`/`}>ホームに戻る</reactRouterDom.Link>
      </div>
    </>
  );
};

const App = () => {
  return (
    <reactRouterDom.BrowserRouter>
      <reactRouterDom.Routes>
        <reactRouterDom.Route path={`/`} element={<Home />} />
        <reactRouterDom.Route path={`/register/`} element={<Register />} />
        <reactRouterDom.Route path={`/login/`} element={<Login />} />
      </reactRouterDom.Routes>
    </reactRouterDom.BrowserRouter>
  );
};


export default App;
