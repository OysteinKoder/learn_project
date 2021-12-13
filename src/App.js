import React from 'react';
import { route, path } from 'react-dom'
import './App.css';
import { Button } from '@dnb/eufemia/components'
import { CryptoPrint } from './pages/CryptoPrint';
import { NavBar } from './components/nav_bar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CryptoPrint/>
    </div>
  );
}

export default App;
