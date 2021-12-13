import React from 'react';
import { route, path } from 'react-router-dom'
import './App.css';
import { Button } from '@dnb/eufemia/components'
import { CryptoPrint } from './pages/CryptoPrint';

function App() {
  return (
    <div className="App">
      <CryptoPrint/>
    </div>
  );
}

export default App;
