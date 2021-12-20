import React from 'react';
import './App.css';
import { CoinPage } from './pages/CoinPage';
import { NavBar } from './components/nav_bar/NavBar';
import { StyledBody } from './components/body_holder/bodyStyles'
import { WalletPage } from './pages/WalletPage';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import reactDom from 'react-dom';
import { AboutPage } from './pages/AboutPage';



function App() {
  return (
    <StyledBody>
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/wallet" element={<WalletPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/coins" element={<CoinPage/>}/>
      <Route path="*" element={<p>Not Found</p>}/>
    </Routes>
    </BrowserRouter>
    </StyledBody>
  );
}

export default App;
