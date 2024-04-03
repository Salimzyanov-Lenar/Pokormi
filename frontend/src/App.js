import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Map from './components/Map';
import Feeders from './components/Feeders';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feeders />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
