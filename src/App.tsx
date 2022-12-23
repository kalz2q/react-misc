// learing framer-motion
// 元記事 framer-motionとreact-routerを組み合わせたお手軽ページトランジション
// https://mottox2.com/posts/440

// translate
// simple-single-page-application-demo
// https://codepen.io/kalz2q/pen/NWBPmBL?editors=1000
// 28-spa-slide
// slideは出来ていない。
import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";

const { BrowserRouter, Link, Routes, Route } = ReactRouterDOM;

const handleClick = (e: any) => {
  e.target.history.goBack();
}
const Home = () => {
  return (
    <>
      <h1>ホームページ</h1>
      <div >
        <Link className="btn" to={`/About/`}>click and go 'about' page</Link>
      </div><div>
        <Link className="btn" to={`/Services/`}>click and go 'services' page</Link>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About ページ</h1>
      <div>
        <Link className="btn" to={`/`}>go back</Link>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <h1>Services ページ</h1>
      <div>
        <Link className="btn" to={`/About/`}>click and go 'about' page</Link>
      </div>
      <div>
        <Link className="btn" to={`/`}>go back</Link>
      </div>
    </>
  );
};


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about/`} element={<About />} />
          <Route path={`/services/`} element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
