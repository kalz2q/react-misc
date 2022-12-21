// hello-react-router-v6がcodepenで動いたので
// あらためて26-weocom-homeをかきなおす
import React from 'react';
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";

const { BrowserRouter, Link, Routes, Route } = ReactRouterDOM;


const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
    </>
  );
};

const Register = () => {
  return (
    <>
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <>
      <h1>ログインページ</h1>
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

function NoMatch() {
  return <h2>このページは存在しません。</h2>;
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>welcome react router home</h1>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
