import React from 'react';
import './App.css';
import { CoinPage } from './pages/coinPage/CoinPage';
import { NavBar } from './components/nav_bar/NavBar';
import { StyledBody } from './components/body_holder/bodyStyles'
import { WalletPage } from './pages/walletPage/WalletPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { H1 } from '@dnb/eufemia';



function App() {
  return (

    <StyledBody>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coins" element={<CoinPage />} />
          <Route path="*" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </StyledBody>

  );
}

export default App;
