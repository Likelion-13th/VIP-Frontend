import './App.css';

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CookiesProvider} from "react-cookie";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home/Home";
import Mypage from "./pages/Mypage/Mypage";
import Diffuser from "./pages/ProductPage/Diffuser";
import Perfume from "./pages/ProductPage/Perfume";
import New from "./pages/ProductPage/New";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <CookiesProvider>
      <Router>
        <Header />
        <Toolbar isLogin={isLogin} onLoginChange={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home onLoginChange={setIsLogin} />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/diffuser" element={<Diffuser />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/new" element={<New />} />
        </Routes>
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;