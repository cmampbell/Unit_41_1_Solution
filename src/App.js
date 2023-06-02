import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import VendingMachine from './VendingMachine';
import SnackApple from './SnackApple';
import SnackZebraCakes from './SnackZebraCakes';
import SnackBarebells from './SnackBarebells';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/apple" element={<SnackApple />} />
          <Route exact path="/zebracakes" element={<SnackZebraCakes />} />
          <Route exact path="/barebells" element={<SnackBarebells />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
